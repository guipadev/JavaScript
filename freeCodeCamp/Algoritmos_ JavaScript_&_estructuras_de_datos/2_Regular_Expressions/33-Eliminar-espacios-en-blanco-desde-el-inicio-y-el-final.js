/*
Eliminar espacios en blanco desde el inicio y el final

A veces, los caracteres de espacio en blanco alrededor de las cadenas no se desean, pero están ahí. 
El procesamiento típico de cadenas es eliminar el espacio en blanco al principio y al final.

Escriba una expresión regular y use los métodos de cadena apropiados para eliminar los espacios 
en blanco al principio y al final de las cadenas.

Nota: 
El String.prototype.trim() método funcionaría aquí, pero deberá completar este desafío usando 
expresiones regulares.

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
