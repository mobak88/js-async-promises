'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
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
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
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

/* const apiUrl = 'https://api.chucknorris.io/jokes/random';

const getApiUrl = async function (url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.value);
};

getApiUrl(apiUrl);

const job = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello world');
  }, 2000);
});

job.then(success => console.log(success)).catch(err => err); */

/* // Challenge 1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.country}`);

      return fetch(
        `https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`${error.message}`));
};

whereAmI(19.037, 72.873); */

/* console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end'); */

/* const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        `Error: Country not found`
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(err);
      renderError(`Error: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
      countriesContainer.style.marginBottom = '50px';
    });
};

btn.addEventListener('click', function () {
  getCountryData('sweden');
});

getCountryData('norway'); */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is going on');
  setTimeout(() => {
    let randNum = Math.random();
    if (randNum >= 0.5) {
      console.log(randNum);
      resolve('You WIN');
    } else {
      console.log(randNum);
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited 2 seconds`);
    return wait(1);
  })
  .then(() => console.log('I waited 1 more second'));

Promise.resolve('Resolve').then(res => console.log(res));
Promise.reject(new Error('Reject')).catch(rej => console.log(rej)); */

/* const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.country}`);

      return fetch(
        `https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`${error.message}`));
};

btn.addEventListener('click', whereAmI); */

// Challenge 2
/* const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err)); */

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  // Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}?fullText=true`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
  }
};

whereAmI();
console.log('FIRST');
