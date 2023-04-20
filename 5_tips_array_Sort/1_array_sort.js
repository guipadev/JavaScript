/**
1. El array.sort() predeterminado es para el tipo de cadena
El sort()método ordena los elementos de la matriz y devuelve la matriz ordenada.
 */



let artists = [
    'John White Abbott', 
    'Leonardo da Vinci', 
    'Charles Aubry', 
    'Anna Atkins', 
    'Barent Avercamp'
];

let sorted = artists.sort();

console.log('Sort the artist names', sorted);

// Tenga en cuenta que el sort() método en realidad muta la matriz original y 
// tanto la matriz original como la ordenada son las mismas referencias.

/* Resultado:
Sort the artist names
[
"Anna Atkins", 
"Barent Avercamp", 
"Charles Aubry", 
"John White Abbott", 
"Leonardo da Vinci"
]
*/

console.log(artists === sorted); // returns true

/*
Muy bien, un punto importante a tener en cuenta aquí es,

Con el sort()método, el orden de clasificación predeterminado es ascending y los
elementos se convierten en cadenas. 
Por lo tanto, el método predeterminado sort() no es suficiente para ordenar 
matrices con elementos de diferentes tipos de datos.

¿Qué tal el orden de clasificación descendente?
El método predeterminado sort() ordena en orden ascendente. 
¿Cómo realizamos una ordenación en orden descendente? 
Bienvenido, compare function. 
A compare function ayuda a los elementos a clasificarse en un orden de acuerdo 
con su valor de retorno. Veámoslo con un ejemplo,
*/

// A compare function
function compara (a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    // a must be equal to b
    return 0;
 }

// La función de comparación anterior ayuda a comparar cada uno de los elementos
// de una matriz para realizar una ordenación descendente. 
// Por supuesto, la misma función se puede escribir de una manera mucho más 
// simple como

function compara2 (a,b) {
    return a === b ? 0 : a > b ? -1 : 1;
 }

 // Así que ahora, ordenemos la artistsmatriz en orden descendente,

 artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
 });
 
 console.log('Sort the artist names(Descending)', artists);
 

 /*
¿Qué hay de ordenar los números?
Se aplica la misma filosofía. La función predeterminada sort() no puede hacerlo
correctamente. Mira esto,
 */

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

ages.sort();
console.log(ages); // [10, 1000, 12, 2, 21, 23, 3, 30]

/*
¿Extraño verdad? Sí, porque con el valor predeterminado sort(), 
los elementos se convierten en cadenas y se comparan en orden de unidades de 
código UTF-16. 
Por lo tanto, el "12" convertido viene antes del "2" convertido.

Necesitamos un compare function rescate aquí otra vez. 
Una ordenación en orden ascendente se puede hacer como:
*/

ages.sort(function(a,b) {return a-b});
console.log(ages);

/*
Tenga en cuenta que la función de comparación pasó al sort() método. 
La función de comparación resta a de b y el resultado será un número positivo, 
un número negativo o cero.

Si está utilizando el ES6 estilo de codificación, puede escribirlo usando la 
arrow función como:
*/

console.log(ages.sort((a,b) => a-b));

/**
 * Un tipo de número descendente es un cambio fácil, en lugar del a-b retorno 
 * b-a de la función de comparación.
 */

 ages.sort(function(a,b) {return b-a})
 console.log(ages);
 