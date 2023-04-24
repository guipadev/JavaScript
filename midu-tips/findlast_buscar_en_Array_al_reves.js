/**
¡Por fin podemos buscar en un Array al revés super fácil!

El nuevo método findLast llega a JavaScript de forma oficial.

Ya no tendremos que darle la vuelta a una lista para encontrar el último elemento que cumple una condición.

El soporte en navegadores ya es del 89% pero en ECMAScript 2023 su soporte en el lenguaje será oficial.
**/

const names = ["midu", "migue", "midudev"];

// 🆕 Nueva forma en ECMAScript 2023

const found = names.findLast((name) => name.includes("a"));

console.log(found); //'didudev'

// 👴 Forma clásica

const foundOld = [...names] // copiar Array
  .reverse() // Damos la vuelta
  .find((name) => name.includes("m")); // y buscamos

console.log(foundOld); //'midudev'
