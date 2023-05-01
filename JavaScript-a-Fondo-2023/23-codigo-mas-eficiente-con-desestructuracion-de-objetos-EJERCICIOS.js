/**
 * Desestructurar objetos
 * Con ES2015(ES6) llegó por fin la posibilidad de
 * desustructurar propiedades de objetos
 */

const product = {
  id: 785679,
  name: "PlayStatuib 5",
  color: "white",
  price: {
    sale: 499,
    full: 599,
  },
};

/**
 * Obtener un valor especifico, de forma más largas
 */
// const color = product.color; // white
// const sale = product.price.sale; // 499

/**
 * Desestructurar objetos
 * Con una sintaxis muy parecida a la de los módulos
 * JavaScript, podemos extraer propiedades del objeto
 */

const { id, color } = product;

color; // white

/**
 * Desestructurar objetos
 * Incluso podemos extraer propiedades anidadas dentro
 * de un objeto
 */

const {
  price: { sale, full },
} = product;

sale; // 499

full; // 599

/**
 * Desestructurar objetos
 * También podemos evitar colisiones de identificadores
 * creando alias al desestructurar
 */

const player = {
  idP: 785679,
  nameP: "Cristiano",
  colorP: "blanco",
  priceP: {
    sale: 499,
    full: 599,
  },
};

const idP = "Another ID";

const { idP: playerId, colorP } = player;

idP; // "Another ID";

playerId; // 785679

/**
 * Desestructurar objetos
 * Por último, tambien podemos usar el operador
 * spread(...) para extraer "el resto" de propiedades
 * del objeto
 */

const dog = {
  idDog: 785679,
  nameDog: "zeus",
  colorDog: "cafe",
  priceDog: {
    sale: 499,
    full: 599,
  },
};

const { idDog, nameDog, colorDog, ...rest } = dog;

rest; // { priceDog: { sale: 499, full: 599 } }
