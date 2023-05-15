/*
Utilice la función parseInt

La parseInt() función analiza una cadena y devuelve un número entero. Aquí hay un ejemplo:

const a = parseInt("007");

La función anterior convierte la cadena 007 en un número entero 7. 
Si el primer carácter de la cadena no se puede convertir en un número, devuelve NaN.

Úselo parseInt() en la convertToInteger función para que convierta la cadena de entrada str 
en un número entero y lo devuelva.

function convertToInteger(str) {

}

convertToInteger("56");

*/

function convertToInteger(str) {
    return parseInt(str); 
}

convertToInteger("56");