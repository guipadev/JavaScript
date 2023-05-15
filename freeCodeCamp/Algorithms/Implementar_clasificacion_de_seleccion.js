/*
Implementar la clasificaci�n de selecci�n

Aqu� implementaremos el ordenamiento por selecci�n. La clasificaci�n por selecci�n funciona seleccionando el valor m�nimo en una lista e intercambi�ndolo con el primer valor de la lista. Luego comienza en la segunda posici�n, selecciona el valor m�s peque�o en la lista restante y lo intercambia con el segundo elemento. Contin�a iterando a trav�s de la lista e intercambiando elementos hasta que llega al final de la lista. Ahora la lista est� ordenada. El ordenamiento por selecci�n tiene una complejidad de tiempo cuadr�tica en todos los casos.

Instrucciones: Escriba una funci�n selectionSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor.
*/

/*
Explicaci�n del problema
La clasificaci�n por selecci�n es uno de los algoritmos de clasificaci�n m�s f�ciles de comprender e implementar.
Este algoritmo divide la matriz en dos partes:
Ordenados
Sin clasificar
La parte ordenada se encuentra al comienzo de la matriz y la parte no ordenada despu�s.
En cada pasada, inicialmente asumimos que el primer elemento es el m�s peque�o, luego recorremos toda la matriz y seleccionamos el elemento m�s peque�o. Al final de la pasada, cambiamos el elemento m�s peque�o a la matriz ordenada.
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