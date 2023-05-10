/*
Uso del método de prueba
Las expresiones regulares se utilizan en lenguajes de programación para hacer coincidir 
partes de cadenas. 
Usted crea patrones para ayudarlo a hacer esa combinación.

Si desea encontrar la palabra the en la cadena The dog chased the cat, puede usar la siguiente 
expresión regular: /the/. 
Tenga en cuenta que las comillas no son necesarias dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. 
Una forma de probar una expresión regular es usando el .test() método. 
El .test() método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) 
y devuelve true o false si su patrón encuentra algo o no.

let testStr = "freeCodeCamp";

let testRegex = /Code/;

testRegex.test(testStr);

El test método aquí devuelve true.

Aplique la expresión regular myRegex en la cadena myString usando el .test() método.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
*/

let myString = "Hello, World!";

let myRegex = /Hello/;

let result = myRegex.test(myString);

console.log(result); // true
