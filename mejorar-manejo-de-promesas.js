/**
 * Es mejor el Promise.allSettled en vez de usar Promise.all
 * Porque así fallen toda las promesas, va a dar devolver todas
 * en cambio allSettled que es en paralelo, si alguna falla solo te devuleve esa
 * y las demas no les importa
 */

const coffeDrinked = false;

const myPromise = new Promise((resolved, rejected) => {
  if (coffeDrinked) {
    resolved(true);
  } else {
    rejected("Todavia no has tomado cafe");
  }
});

const awake = new Promise((resolved, rejected) => {
  coffeDrinked ? resolved("Estoy despierto") : rejected("Estoy Zzz");
});

Promise.all([myPromise, awake]).then((data) => console.log(data));

Promise.allSettled([myPromise, awake]).then((data) => console.log(data));
