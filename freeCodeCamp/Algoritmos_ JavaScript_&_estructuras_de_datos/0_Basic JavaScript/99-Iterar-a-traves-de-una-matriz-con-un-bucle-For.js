/*
Iterar a través de una matriz con un bucle For

Una tarea común en JavaScript es iterar a través del contenido de una matriz. 
Una forma de hacerlo es con un for bucle. 
Este código enviará cada elemento de la matriz arra la consola:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

Recuerde que las matrices tienen indexación basada en cero, 
lo que significa que el último índice de la matriz es length - 1. 
Nuestra condición para este ciclo es i < arr.length, que detiene el ciclo cuando i es igual a length. 
En este caso, la última iteración es i === 4, por ejemplo, cuando i se vuelve igual arr.length - 1 y sale 6 a la consola.
Luego i aumenta a 5, y el ciclo termina porque i < arr.lengthes false.

Declare e inicialice una variable total en 0. 
Use un for ciclo para agregar el valor de cada elemento de la myArr matriz a total.

const myArr = [2, 3, 4, 5, 6];

*/

const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
 }