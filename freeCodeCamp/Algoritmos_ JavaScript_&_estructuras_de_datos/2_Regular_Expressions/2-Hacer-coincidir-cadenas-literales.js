/*
En el último desafío, buscaste la palabra Hello usando la expresión regular /Hello/. 
Esa expresión regular buscó una coincidencia literal de la cadena Hello. 
Aquí hay otro ejemplo que busca una coincidencia literal de la cadena Kevin:

let testStr = "Hello, my name is Kevin.";

let testRegex = /Kevin/;

testRegex.test(testStr);

Esta test llamada volverá true.

Cualquier otra forma de Kevin no coincidirá. 

Por ejemplo, la expresión regular /Kevin/ no coincidirá kevin o KEVIN.

let wrongRegex = /kevin/;

wrongRegex.test(testStr);

Esta test llamada volverá false.

Un desafío futuro mostrará cómo combinar esas otras formas también.

Complete la expresión regular waldoRegex para buscar "Waldo" en la cadena waldoIsHiding
con una coincidencia literal.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";

let waldoRegex = /Waldo/;

let result = waldoRegex.test(waldoIsHiding);
