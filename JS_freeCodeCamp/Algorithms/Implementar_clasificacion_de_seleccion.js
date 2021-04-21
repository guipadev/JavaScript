/*
Implementar la clasificación de selección

Aquí implementaremos el ordenamiento por selección. La clasificación por selección funciona seleccionando el valor mínimo en una lista e intercambiándolo con el primer valor de la lista. Luego comienza en la segunda posición, selecciona el valor más pequeño en la lista restante y lo intercambia con el segundo elemento. Continúa iterando a través de la lista e intercambiando elementos hasta que llega al final de la lista. Ahora la lista está ordenada. El ordenamiento por selección tiene una complejidad de tiempo cuadrática en todos los casos.

Instrucciones: Escriba una función selectionSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor.
*/

/*
Explicación del problema
La clasificación por selección es uno de los algoritmos de clasificación más fáciles de comprender e implementar.
Este algoritmo divide la matriz en dos partes:
Ordenados
Sin clasificar
La parte ordenada se encuentra al comienzo de la matriz y la parte no ordenada después.
En cada pasada, inicialmente asumimos que el primer elemento es el más pequeño, luego recorremos toda la matriz y seleccionamos el elemento más pequeño. Al final de la pasada, cambiamos el elemento más pequeño a la matriz ordenada.
Tiene una complejidad de tiempo O (n2).
*/

function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    swap(i, min, array);
  }
  return array;
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);