/*
Manipular arreglos con el método push

Una manera fácil de agregar datos al final de una matriz es a través de la push() función.

.push()toma uno o más parámetros y los "empuja" al final de la matriz.

Ejemplos:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

Empuje ["dog", 3] hacia el final de la myArray variable.

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

*/

const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);
