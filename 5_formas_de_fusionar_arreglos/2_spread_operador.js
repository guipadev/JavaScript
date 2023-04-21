/*
Desde ES6, podemos usar ...(sí, tres puntos consecutivos) como operador de 
dispersión para desestructurar arreglos. 
Podemos usar el operador de dispersión en arreglos dentro de un literal de 
arreglo( []) para fusionarlos. Veámoslo con un ejemplo.

Primero, tomaremos dos arreglos, arr1y arr2. 
Luego fusione los arreglos usando el operador de dispersión ( ...) 
dentro de un literal de arreglo.
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// Merge arrays
const merged = [...arr1, ...arr2];

console.log(merged); // [1,2,3,4,5,6]
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]

/*
Ahora, observe el resultado de la combinación. 
Las matrices arr1y arr2se fusionan y sus elementos se combinan en una 
newmatriz. Tenga en cuenta que las matrices de entrada no se cambian aquí.

Ok, entonces, ¿cómo fusionamos más de dos matrices usando este método? 
Fácil, pase tantas matrices que desee fusionar como separadas por comas.
*/

const arrA = [1,2,3];
const arrB = [4,5,6];
const arrC = [7,8,9];

// Merge arrays
const merged2 = [...arrA, ...arrB, ...arrC];

console.log(merged2); // [1,2,3,4,5,6,7,8,9]

/*
Esta forma de fusionar matrices es mucho más conveniente que usar el 
enfoque tradicional de bucle for que hemos visto antes. 
Es una forma de combinar matrices en JavaScript, 
¡excepto por un pequeño problema que veremos en un momento!
*/
