/*
ES6 agrega un buen soporte para definir fácilmente los literales de objetos.

Considere el siguiente código:

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

getMousePosition es una función simple que devuelve un objeto que contiene dos 
propiedades. 
ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener 
que escribir x: x. 
Simplemente puede escribir x una vez y se convertirá en x: x (o algo equivalente) debajo del capó. Aquí está la misma función de arriba reescrita para usar esta nueva sintaxis:

const getMousePosition = (x, y) => ({ x, y });

name Usa la abreviatura de propiedad de objeto con literales de objeto
para crear y devolver un objeto con age y gender propiedades.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
*/

const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender,
  };
};
