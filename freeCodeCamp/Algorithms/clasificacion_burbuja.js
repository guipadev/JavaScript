/*
Implementar clasificación de burbujas

Este es el primero de varios desafíos en los algoritmos de clasificación. Dada una matriz de elementos sin clasificar, queremos poder devolver una matriz ordenada. Veremos varios métodos diferentes para hacer esto y aprenderemos algunas compensaciones entre estos diferentes enfoques. Si bien la mayoría de los lenguajes modernos tienen métodos de clasificación integrados para operaciones como esta, es importante comprender algunos de los enfoques básicos comunes y aprender cómo se pueden implementar.

Aquí veremos la clasificación de burbujas. El método de clasificación de burbujas comienza al principio de una matriz no ordenada y 'burbujea' valores no clasificados hacia el final, iterando a través de la matriz hasta que esté completamente ordenada. Lo hace comparando elementos adyacentes e intercambiándolos si están fuera de servicio. El método continúa recorriendo la matriz hasta que no se producen intercambios, momento en el que se ordena la matriz.

Este método requiere múltiples iteraciones a través de la matriz y para el promedio y el peor de los casos tiene una complejidad de tiempo cuadrática. Si bien es simple, generalmente no es práctico en la mayoría de las situaciones.

Instrucciones: Escriba una función bubbleSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor.
*/

function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // -i because the largest element will be bubbled at the end so we don't have to compare.
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
  }
  return array;
}