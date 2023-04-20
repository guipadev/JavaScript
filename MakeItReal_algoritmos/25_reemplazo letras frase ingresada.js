/*
Ejercicio 25
Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las may�sculas se reemplazan por min�sculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".

Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
Nota: Aunque esta es una forma de generar contrase�as no se considera segura y no la recomendamos.
*/

let palabras = prompt('Ingresa frase')

palabras = palabras.toLowerCase()
palabras = palabras.replace(/a/g,4)
palabras = palabras.replace(/e/g,3)
palabras = palabras.replace(/i/g,1)
palabras = palabras.replace(/o/g,0)

console.log(palabras.replace(/ /g, ""));