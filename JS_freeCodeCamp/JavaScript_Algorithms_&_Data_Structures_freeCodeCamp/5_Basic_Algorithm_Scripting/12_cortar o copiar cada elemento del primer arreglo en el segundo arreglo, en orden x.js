/*
Cortar y rebanar

Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. 
Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.
*/

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) // [4, 1, 2, 3, 5, 6]

//Solutin two
function frankenSplice2(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}