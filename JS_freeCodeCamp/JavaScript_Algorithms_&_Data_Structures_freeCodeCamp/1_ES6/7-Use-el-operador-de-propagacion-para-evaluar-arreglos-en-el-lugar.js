/*
Use el operador de propagación para evaluar arreglos en el lugar

ES6 presenta el operador de expansión, que nos permite expandir matrices y otras expresiones 
en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 se usa apply() para calcular el valor máximo en una matriz:

var arr = [6, 89, 3, 45];

var maximus = Math.max.apply(null, arr);

maximus tendría un valor de 89.

Tuvimos que usar Math.max.apply(null, arr)
porque Math.max(arr) regresa NaN. 
Math.max() espera argumentos separados por comas, pero no una matriz. 
El operador de propagación hace que esta sintaxis sea mucho mejor para leer y mantener.

const arr = [6, 89, 3, 45];

const maximus = Math.max(...arr);

maximus tendría un valor de 89.

...arr devuelve una matriz desempaquetada. 
En otras palabras, extiende la matriz. 
Sin embargo, el operador de propagación solo funciona en el lugar, 
como en un argumento de una función o en un literal de matriz. 
El siguiente código no funcionará:

const spreaded = ...arr;

Copie todo el contenido de arr1 en otra matriz arr2 utilizando el operador de propagación.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);

*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

arr2 = [...arr1];

console.log(arr2);