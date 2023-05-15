/*
Iterar a trav�s de todos los elementos de una matriz usando bucles for

A veces, cuando se trabaja con matrices, es muy �til poder iterar a trav�s de cada elemento para encontrar uno o m�s elementos que podamos necesitar, o manipular una matriz en funci�n de qu� elementos de datos cumplen un determinado conjunto de criterios. 
JavaScript ofrece varios m�todos integrados que iteran sobre matrices de formas ligeramente diferentes para lograr resultados diferentes (como every (), forEach (), map (), etc.), sin embargo, la t�cnica que es m�s flexible y nos ofrece la mejor cantidad de control es un simple bucle for.

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

Usando un bucle for, esta funci�n recorre y accede a cada elemento de la matriz, y lo somete a una prueba simple que hemos creado. 
De esta manera, hemos determinado de forma sencilla y program�tica qu� elementos de datos son mayores que 10, y hemos devuelto
una nueva matriz, [12, 14, 80], que contiene esos elementos.
*/

/*
Hemos definido una funci�n, filterArray, que toma arr, una matriz anidada y elem como argumentos y devuelve una nueva matriz. 
elem representa un elemento que puede o no estar presente en una o m�s de las matrices anidadas dentro de arr. 
Modifique la funci�n, usando un bucle for, para devolver una versi�n filtrada de la matriz pasada de modo 
que cualquier matriz anidada dentro de arr que contenga elem haya sido eliminada.
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
      if (arr [i] .indexOf (elem) == -1) { // Checks every parameter for the element and if is NOT there continues the code
          newArr.push (arr [i]); // //Inserts the element of the array in the new filtered array
     }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
