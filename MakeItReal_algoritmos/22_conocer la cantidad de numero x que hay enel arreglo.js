/*
Ejercicio 22
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado deber�a ser el siguiente:

11

Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la funci�n filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.
*/

const numeros = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];

let sumador=0;

for(let i=0; i < numeros.length; i++){
   if(numeros[i]==1){
     sumador++
   }
} 
console.log(sumador)
