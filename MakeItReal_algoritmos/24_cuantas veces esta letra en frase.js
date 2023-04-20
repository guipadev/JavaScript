/*
Ejercicio 24
Escribe un programa que le pida una frase al usuario y le muestre el n�mero de caracteres "a" 
que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la pr�xima
La frase tiene 4 caracteres "a"
*/

const frase = prompt('Ingresa una frase')
let cuenta = 0

for(let i=0; i<frase.length; i++){
    if(frase[i] == 'a'){
       cuenta++
    }
}
console.log(`La frase tiene ${cuenta} caracteres a`)