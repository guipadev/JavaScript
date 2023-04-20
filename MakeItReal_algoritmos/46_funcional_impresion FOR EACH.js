/***************************************************************
Ejercicio 46
Imprime todos los elementos del arreglo utilizando el metodo forEach:

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

El resultado en consola deberea ser el siguiente:

45
Hola
82
2
67
true
Juan
12.34
***************************************************************/

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];

//Impresion de acuerdo solucion
arr.forEach((num) => console.log(num))

//impresion con la posicion de c/u
arr.forEach((num, i) => console.log("Esta la impresion con la posicion\n "+ i + ": " + num))
