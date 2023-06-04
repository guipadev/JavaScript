/*
Divide una cadena en un arreglo utilizando el método "split"

El método split divide una cadena en un arreglo de cadenas. 
Se necesita un argumento para el delimitador, el cual puede ser un carácter para separar 
la cadena o una expresión regular. 

Por ejemplo, si el delimitador es un espacio, se obtiene un arreglo de palabras y si el delimitador 
es una cadena vacía, se obtiene un arreglo de cada carácter en la cadena.

Aquí hay dos ejemplos que dividen una cadena por espacios, luego otra por dígitos utilizando una expresión regular:

var str = "Hello World";
var bySpace = str.split(" "); // ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"].

Dado que las cadenas son inmutables, el método split facilita el trabajo con ellas.
-------------------------------------------------------------------------------------------------
Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras. 
La función debe devolver un arreglo. 
Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe 
contener signos de puntuación.

function splitify(str) {
  // Only change code above this line
}

splitify("Hello World,I-am code");
*/

function splitify(str) {
  return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code")); // ['Hello', 'World', 'I', 'am', 'code']

// /\W/ Coincide con cualquier carácter que no sea una palabra.
// Esto incluye espacios y puntuación, pero no guiones bajos.
// Es equivalente a /[^A-Za-z0-9_]/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
