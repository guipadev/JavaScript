/**
 * Undefined
 * Cuando una variable o propiedad  de un objeto no está definida
 */

let nombre;

console.log(nombre); // undefined

// Igual pasa en los objetos
const obj = {
  name: "Marcos",
};

console.log(obj.edad); // undefined

/**
 * Null
 * Ausencia de valor, se usa para definir ausencia del valor de objetos
 */

const song = null;

console.log(song); // null

console.log(typeof null); // object
console.log(typeof undefined); // undefined
