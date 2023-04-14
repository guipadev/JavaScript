/*
Anidamiento de bucles

Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de referencia anterior para recorrer
tanto la matriz como las sub-matrices. Aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

Esto da salida a cada sub elemento de arr uno en uno. 
Tenga en cuenta que para el bucle interno, estamos comprobando .length of arr[i], ya que arr[i] es en sí mismo una matriz.

Modifique la función multiplyAll para que devuelva el producto de todos los números en los subconjuntos de arr.

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

*/

function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    
    return product;
}
  
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);