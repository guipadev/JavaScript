/*
Implementar ordenación por inserción

El siguiente método de ordenación que veremos es la ordenación por inserción. Este método funciona creando una matriz ordenada al principio de la lista. Comienza la matriz ordenada con el primer elemento. 

Luego, inspecciona el siguiente elemento y lo intercambia al revés en la matriz ordenada hasta que está en la posición ordenada. 

Continúa iterando a través de la lista e intercambiando nuevos elementos hacia atrás en la parte ordenada hasta que llega al final. 

Este algoritmo tiene una complejidad de tiempo cuadrática en el promedio y en el peor de los casos.

Instrucciones: Escriba una función insertionSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor.
*/

/*
Explicación del problema
- La ordenación por inserción asume que la matriz se divide en dos partes:
1. Ordenado (inicialmente el primer elemento)
2. Sin clasificar
- En cada pasada, seleccionamos un elemento y lo comparamos con la matriz ordenada.
- Si el elemento seleccionado es más pequeño que el último elemento de la matriz ordenada, cambiamos la matriz ordenada en 1 hasta que encontremos el lugar para insertar el elemento seleccionado.
- La complejidad temporal del tipo de inserción es de O (n2).
- Es un algoritmo estable. 
*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]); // (17) [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]


