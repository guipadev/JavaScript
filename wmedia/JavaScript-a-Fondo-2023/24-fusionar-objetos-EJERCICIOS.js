/**
 * Fusionar y clonar objetos
 *Con Object.assign podemos fusionar varios objetos
 */

const product = {
  id: 785679,
  name: "PlatStation 5",
  color: "white",
};

const price = {
  sale: 499,
  full: 599,
};

const merged = Object.assign({}, product, price);

merged; // { id: 785679, name: 'PlatStation 5', color: 'white', sale: 499, full: 599 }

/**
 * Otra forma de fusionar objetos, con spread
 */

const fusion = { ...product, ...price, quantity: 3 };

fusion; // { id: 785679, name: 'PlatStation 5', color: 'white', sale: 499, full: 599, quantity: 3 }

/**
 * La fusión se realiza de forma profunda en el primer nivel,
 * los siguietnes son referencias (shallow copy)
 */

merged.color = "black";

product; // color: "white", no muta y mantine color

merged; // color: "black", cambia el color

/**
 * Pero si nodifica unas de las propiedades anidadas si hay mutacion
 */

// merged.price.sale = 0;
merged.sale = 0;

product; // sale: muto a 0

merged; // sale: cambia a 0

/**
 * Fusionar y clonar objetos
 * Para una verdadera copia profunda (deep copy)
 * podemos usar "liberías externas" (recomendada lodash.clonedepp) o el objeto JSON
 */

const mascota = {
  nombre: "paco",
  datos: {
    color: "negro",
    edad: 2,
  },
};

const precio = { sale: 499 };

const fusiono = { ...mascota, ...precio };

const deppCloned = JSON.stringify(fusiono);

// Esto es un string
deppCloned; // { nombre: 'paco', datos: { color: 'negro', edad: 2 }, sale: 499 }

// Convertir el string a object
const fusionObject = JSON.parse(deppCloned);

// Si hacemos un cambio en la copia en el objecto original no se realiza
fusionObject.datos.color = "lila";

console.log(mascota, fusionObject);

/**
 * EJERCICIO fusionar y clonar objetos
 */

// Starting code
const person = {
  name: "John",
  surname: "Doe",
  age: 50,
  meta: {
    eyeColor: "blue",
  },
};

const city = {
  name: "Barcelona",
  weather: "sunny",
  coords: {
    lat: 45.211448,
    lang: 1.87654,
  },
};

/**
 * Fusiona los objetos city y person (en este orden) en una única sentencia,
 * manteniendo "Barcelona" como valor de name.
 */

const result = { ...city, ...person, name: city.name };

/**
 * Usa el objeto JSON para crear una copia profunda de person.
 */

const stringifiedPerson = JSON.stringify(person);
const clonedPerson = JSON.parse(stringifiedPerson);

/**
 * ## Con `Object.assign` o el operador `...` podemos crear copias profundas de objetos.
 * - [ ]  Si.
 * - [ ]  No.
 * - [ ]  Depende.
 */

// ✅ Depende, porque creará una copia profunda del primer nivel del objeto,
// pero NO de posibles objetos anidados, que seguirán siendo una referencia al objeto original.
