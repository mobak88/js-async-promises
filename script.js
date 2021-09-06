"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className) {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>
//         `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('norway');

/* const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('norway');
getCountryAndNeighbour('usa'); */

//  const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   );
//   request.send();

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const user = {
//   name: "Mo",
//   age: 33,
// };

// const promise = new Promise((resolve, reject) => {
//   if (user.hasOwnProperty("name") && user.hasOwnProperty("age"))
//     console.log(`My name is ${user.name} and i am ${user.age}`);
//   else console.log("User does not exist");
// });

// promise.then((succes) => console.log(succes)).catch((err) => console.log(err));

/* const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then((response) => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country does not exist (${response.status})`);

      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(err);
      renderError(`Error: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      countriesContainer.style.marginBottom = "50px";
    });
}; */

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        `Error: Country not found`
      );
    })

    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(err);
      renderError(`Error: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      countriesContainer.style.marginBottom = "50px";
    });
};

btn.addEventListener("click", function () {
  getCountryData("sweden");
});

getCountryData("iceland");

const apiUrl = "https://api.chucknorris.io/jokes/random";

const getApiUrl = async function (url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.value);
};

getApiUrl(apiUrl);
