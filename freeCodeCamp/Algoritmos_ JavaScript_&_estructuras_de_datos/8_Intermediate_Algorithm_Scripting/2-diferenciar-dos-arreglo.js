/*
Diferencia entre dos arreglos

Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran 
en uno de los dos arreglos dados, pero no en ambos. 
En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden.
*/

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])); // [4]

//Solution 2
function diffArray2(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

//Solution3
function diffArray3(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]
