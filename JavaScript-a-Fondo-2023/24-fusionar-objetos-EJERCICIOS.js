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
