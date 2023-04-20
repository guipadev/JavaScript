//Busca y destruye

/*
Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), 
seguido de uno o más argumentos. 
Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que utilizar el objeto arguments.
*/

function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))    // [1, 1]