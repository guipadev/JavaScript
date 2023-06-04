/*
Use la función parseInt con un Radix

La parseInt() función analiza una cadena y devuelve un número entero. 
Toma un segundo argumento para la raíz, que especifica la base del número en la cadena. 
La raíz puede ser un número entero entre 2 y 36.

La llamada a la función se parece a:

parseInt(string, radix);

Y aquí hay un ejemplo:

const a = parseInt("11", 2);

La variable radix dice que 11 está en el sistema binario, o base 2. 
Este ejemplo convierte la cadena 11 en un número entero 3.

Úselo parseInt() en la convertToInteger función para que convierta un número binario en un entero y lo devuelva.

function convertToInteger(str) {

}

convertToInteger("10011");

*/

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");