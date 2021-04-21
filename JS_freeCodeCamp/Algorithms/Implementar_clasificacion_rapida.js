/*
Implementar clasificaci�n r�pida

Aqu� pasaremos a un algoritmo de clasificaci�n intermedio: clasificaci�n r�pida. La clasificaci�n r�pida es un enfoque eficaz y recursivo de dividir y conquistar para clasificar una matriz. En este m�todo, se elige un valor de pivote en la matriz original. Luego, la matriz se divide en dos submatrices de valores menores y mayores que el valor de pivote. Luego combinamos el resultado de llamar de forma recursiva al algoritmo de clasificaci�n r�pida en ambas submatrices. Esto contin�a hasta que se alcanza el caso base de una matriz vac�a o de un solo elemento, que devolvemos. El desenrollamiento de las llamadas recursivas nos devuelve la matriz ordenada.

La clasificaci�n r�pida es un m�todo de clasificaci�n muy eficiente, que proporciona un rendimiento de O (nlog (n)) en promedio. Tambi�n es relativamente f�cil de implementar. Estos atributos lo convierten en un m�todo de clasificaci�n popular y �til.


Instrucciones: Escriba una funci�n quickSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor. Si bien la elecci�n del valor de pivote es importante, cualquier pivote servir� para nuestros prop�sitos aqu�. Por simplicidad, se podr�a utilizar el primer o el �ltimo elemento.
*/

/*

Explicaci�n del problema

-La clasificaci�n r�pida es un algoritmo de clasificaci�n eficiente. Es un algoritmo in situ, por lo que no ocupa ning�n espacio auxiliar.

-En primer lugar, elija un punto de pivote aleatorio alrededor del cual mueva todos los elementos m�s peque�os a la izquierda y los elementos m�s grandes a la derecha.

-Despu�s de obtener el pivotIndex que es esencialmente la posici�n fija de ese elemento, encontramos otro pivotIndex llamando recusirvamente a esta funci�n.

-El peor caso de la ordenaci�n r�pida es O (n2), pero eso se puede evitar si elegimos un punto de pivote aleatorio, por lo que la O grande es O (nlogn).

-Su complejidad espacial es O (logn).

-Es un algoritmo inestable.
*/

function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}