/*
Al definir funciones dentro de objetos en ES5, debemos usar la palabra clave 
function de la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

Con ES6, puede eliminar la function palabra clave y los dos puntos al definir 
funciones en objetos. He aquí un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

Refactorice la función setGear dentro del objeto bicycle para usar la sintaxis 
abreviada descrita anteriormente.

const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);
*/

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);
