/**
 * Propiedades, métodos y valores
 *
 * - Las propiedades de un objeto son las caracteristicas de la entidad que define
 * - Podemos definir propiedades al crear el objeto y también más adelante
 */

const person = {
  name: "Juan",
  // No se puede aplicar arrow function, porque necesitamos usar this
  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

/**
 * Propiedades, métodos y valores
 *
 * - Pero las características son inertes, inamidas.
 * ¿Qué ocurre con las "acciones"?. Para eso tenemos los métodos
 * - Un método es una función que vive en un objeto. ☑️
 */

person.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

person.name = "Andres";

person.sayHello(); // Hi, I'm Andres

/**
 * Propiedades computadas
 * Es posible definir los identificadores de propiedades de forma dinámica
 * usando "bracket notation".
 */

const people = {
  name: "Juan",
  "skill 1": "JavaScript",
  sayHello: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

people.name = "Camilo";

const num = 1;

// bracket notation
people["skill 1"]; // 'JavaScript'

people["skill " + num]; // 'JavaScript'

people["say" + "Hello"](); // Hi, I'm Camilo
