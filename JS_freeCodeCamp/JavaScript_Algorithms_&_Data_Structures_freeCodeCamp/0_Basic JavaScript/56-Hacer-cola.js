/*
Hacer cola

En informática, una cola es una estructura de datos abstracta donde los elementos se mantienen en orden. 
Los elementos nuevos se pueden agregar al final de la cola y los elementos antiguos se quitan del frente de la cola.

Escriba una función nextInLine que tome una matriz (arr) y un número (item) como argumentos.

Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz.

La nextInLine función debería devolver el elemento que se eliminó.

function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

*/

function nextInLine(arr, item) {
  arr.push(item);
  
  const rta = arr.shift();
  
  return rta;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
