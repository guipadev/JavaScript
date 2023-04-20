/*
Busca y destruye
Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), 
seguido de uno o más argumentos. 
Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.
*/

function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(item => item !== null);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [1, 1]

// Solution 2
function destroyer2(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
}

// Solution 3
function destroyer3(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}