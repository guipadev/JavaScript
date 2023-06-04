/*
Manipular arreglos con método unshift

No sólo puede shift sacar elementos del principio de una matriz, sino que también puede unshift agregar elementos al principio de una matriz, es decir, agregar elementos delante de la matriz.

.unshift() funciona exactamente igual que .push(), pero en lugar de agregar el elemento al final de la matriz, unshift() agrega el elemento al principio de la matriz.

Ejemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

Después de shift, ourArray tendría el valor ["J", "cat"]. Después de unshift, ourArray tendría el valor ["Happy", "J", "cat"].

Agregue ["Paul", 35] al comienzo de la myArray variable usando unshift().

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
*/

const myArray = [["John", 23], ["dog", 3]];

myArray.shift();

myArray.unshift(["Paul", 35]);

