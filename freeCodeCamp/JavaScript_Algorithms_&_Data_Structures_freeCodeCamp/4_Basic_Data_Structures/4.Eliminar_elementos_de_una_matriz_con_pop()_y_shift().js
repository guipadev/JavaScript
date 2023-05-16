/*
Eliminar elementos de una matriz con pop () y shift ()

Tanto push () como unshift () tienen m�todos correspondientes que son casi opuestos 
funcionales: pop () y shift (). 
Como ya habr� adivinado, en lugar de agregar, pop () elimina un elemento del final 
de una matriz, mientras que shift () elimina un elemento del principio. 
La diferencia clave entre pop () y shift () y sus primos push () y unshift (), 
es que ninguno de los m�todos toma par�metros, y cada uno solo permite que una matriz 
sea modificada por un solo elemento a la vez.

Vamos a ver:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();

greetings //['whats up?', 'hello'];

Tambi�n podemos devolver el valor del elemento eliminado con cualquier m�todo como este:

let popped = greetings.pop();

greetings tendr�a el valor [], y popped tendr�a el valor hello.
*/

/*
Hemos definido una funci�n, popShift, que toma una matriz como argumento 
y devuelve una nueva matriz. 
Modifique la funci�n, usando pop () y shift (), para eliminar el primer 
y �ltimo elemento de la matriz de argumentos, 
y asigne los elementos eliminados a sus variables correspondientes, 
de modo que la matriz devuelta contenga sus valores.

function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"])); //�["challenge", "complete"]
