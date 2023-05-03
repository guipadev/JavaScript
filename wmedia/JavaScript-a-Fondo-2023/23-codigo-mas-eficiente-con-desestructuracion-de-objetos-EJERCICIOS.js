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

/**
 * EJERCICIO Desestructura objetos
 */
const city = {
  name: "Barcelona",
  weather: "Sunny",
  coords: {
    lat: 45.211448,
    lang: 1.87654,
  },
};

const weather = "cloudy";

/**
 * Extraer propiedades "name" y "weather" del objeto "city"
 */

const { name: nameCity, weather: weatherCity } = city;

weatherCity; // 'sunny'

/**
 * Extrae las propiedades "lat" y "lang" del objeto "city"
 */

const {
  coords: { lat, lang },
} = city;

lang; // 1.87654

/**
 * Extrae las propiedades "name" y resto del objeto "city"
 * Luego desesctructura el resto de propiedades
 */

const { name, ...resto } = city;

resto; // { weather: 'Sunny', coords: { lat: 45.211448, lang: 1.87654 } }

const {
  weather: cityWeather,
  coords: { lat: lt, lang: lg },
} = resto;

lang; // 1.87654
