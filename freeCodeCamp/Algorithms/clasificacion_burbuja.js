/*
Implementar clasificaci�n de burbujas

Este es el primero de varios desaf�os en los algoritmos de clasificaci�n. Dada una matriz de elementos sin clasificar, queremos poder devolver una matriz ordenada. Veremos varios m�todos diferentes para hacer esto y aprenderemos algunas compensaciones entre estos diferentes enfoques. Si bien la mayor�a de los lenguajes modernos tienen m�todos de clasificaci�n integrados para operaciones como esta, es importante comprender algunos de los enfoques b�sicos comunes y aprender c�mo se pueden implementar.

Aqu� veremos la clasificaci�n de burbujas. El m�todo de clasificaci�n de burbujas comienza al principio de una matriz no ordenada y 'burbujea' valores no clasificados hacia el final, iterando a trav�s de la matriz hasta que est� completamente ordenada. Lo hace comparando elementos adyacentes e intercambi�ndolos si est�n fuera de servicio. El m�todo contin�a recorriendo la matriz hasta que no se producen intercambios, momento en el que se ordena la matriz.

Este m�todo requiere m�ltiples iteraciones a trav�s de la matriz y para el promedio y el peor de los casos tiene una complejidad de tiempo cuadr�tica. Si bien es simple, generalmente no es pr�ctico en la mayor�a de las situaciones.

Instrucciones: Escriba una funci�n bubbleSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor.
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