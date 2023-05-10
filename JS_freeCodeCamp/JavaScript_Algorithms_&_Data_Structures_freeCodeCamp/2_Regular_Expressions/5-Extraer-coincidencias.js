/*
Hasta ahora, solo ha estado verificando si existe un patrón o no dentro de una cadena. 
También puede extraer las coincidencias reales que encontró con el .match() método.

Para usar el .match() método, aplique el método en una cadena y pase la expresión regular 
dentro de los paréntesis.

Aquí hay un ejemplo:

"Hello, World!".match(/Hello/);

let ourStr = "Regular expressions";

let ourRegex = /expressions/;

ourStr.match(ourRegex);

Aquí match volvería el primero ["Hello"] y volvería el segundo ["expressions"].

Tenga en cuenta que la .match sintaxis es "opuesta" al .test método 
que ha estado usando hasta ahora:

'string'.match(/regex/);
/regex/.test('string');

Aplique el .match() método para extraer la cadena coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
*/

let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/;

let result = extractStr.match(codingRegex);

console.log(result); // true
