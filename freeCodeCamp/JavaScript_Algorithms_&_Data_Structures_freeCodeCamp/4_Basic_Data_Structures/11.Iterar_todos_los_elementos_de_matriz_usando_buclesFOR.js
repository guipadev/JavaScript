/*
Iterar a traves de todos los elementos de una matriz usando bucles for

A veces, cuando se trabaja con matrices, es muy útil poder iterar a través de cada 
elemento para encontrar uno o más elementos que podamos necesitar, o manipular una 
matriz en función de que elementos de datos cumplen un determinado conjunto de criterios. 
JavaScript ofrece varios métodos integrados que iteran sobre matrices de formas ligeramente 
diferentes para lograr resultados diferentes (como every(), forEach(), map(), etc.), 
sin embargo, la técnica que es más flexible y nos ofrece la mejor cantidad de control 
es un simple bucle for.

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]); //Resultado [12, 14, 80]

Usando un bucle for, esta función recorre y accede a cada elemento de la matriz, 
y lo somete a una prueba simple que hemos creado. 
De esta manera, hemos determinado de forma sencilla y programática que elementos de datos
son mayores que 10, y hemos devuelto una nueva matriz, [12, 14, 80], 
que contiene esos elementos.
*/

/*
Hemos definido una función, filterArray, que toma arr, una matriz anidada y elem como 
argumentos y devuelve una nueva matriz. 
elem representa un elemento que puede o no estar presente en una o más de las matrices 
anidadas dentro de arr. 
Modifique la función, usando un bucle for, para devolver una versión filtrada de la matriz 
pasada de modo que cualquier matriz anidada dentro de arr que contenga elem haya sido 
eliminada.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

/*
Pista 1
Se debe usar un bucle for para buscar en todos los elementos de la matriz.
para (sea i = 0; i <longitud de arr; i ++) {}

Pista 2
Cada elemento de la matriz debe compararse con el par�metro elem pasado a trav�s de la funci�n filterArray ().
if (arr [i] .indexOf (elem) == -1) {
}

Pista 3
Si NO se encuentra una coincidencia, newArr tiene todo ese subarreglo agregado. 
La funci�n push () es muy �til aqu�.
newArr.push (arr [i]);
Una vez que se agrega todo el subarreglo a newArr, el ciclo contin�a con el siguiente elemento.
*/

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      // Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); // //Inserts the element of the array in the new filtered array
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
