/**
 * El método .filter()
 * Ahora digamos que tenemos una matriz de números y que queremos crear una matriz de solo
 * los números que pasan una determinada condición.
 *
 * En este caso, podemos usar el método filter() que también toma una devolución de
 * llamada como argumento.
 * La devolución de llamada devuelve un booleano: verdadero si el elemento pasa la prueba;
 * de lo contrario, falso.
 * Solo los elementos que pasen estarán en la matriz generada y la devolución de llamada
 * expresa la prueba. Así es como funciona:
 */

let arr = [1, 2, 3, 4, 5];

// Let's create an array of numbers bigger than 3

let filteredArray = arr.filter((elem) => elem > 3); // output [4, 5]
