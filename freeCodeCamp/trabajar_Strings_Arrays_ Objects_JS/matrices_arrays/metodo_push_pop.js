/**
 * Los métodos .push() y .pop()
 * Como mencioné anteriormente, las matrices de JavaScript son dinámicas.
 * Entonces podemos agregar elementos usando el método push()
 * y eliminar el último elemento usando el método pop().
 * Una nota importante es que ambos métodos mutan la matriz original.
 */

let array = [1, 2, 3];

// let's add 4 to the array

array.push(4);

console.log(array); // output [1, 2, 3, 4]

// let's now make the array the same as before

let removedElement = array.pop(); // output 4

console.log(array); // output [1, 2, 3]
