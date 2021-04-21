/*
Implementar clasificación rápida

Aquí pasaremos a un algoritmo de clasificación intermedio: clasificación rápida. La clasificación rápida es un enfoque eficaz y recursivo de dividir y conquistar para clasificar una matriz. En este método, se elige un valor de pivote en la matriz original. Luego, la matriz se divide en dos submatrices de valores menores y mayores que el valor de pivote. Luego combinamos el resultado de llamar de forma recursiva al algoritmo de clasificación rápida en ambas submatrices. Esto continúa hasta que se alcanza el caso base de una matriz vacía o de un solo elemento, que devolvemos. El desenrollamiento de las llamadas recursivas nos devuelve la matriz ordenada.

La clasificación rápida es un método de clasificación muy eficiente, que proporciona un rendimiento de O (nlog (n)) en promedio. También es relativamente fácil de implementar. Estos atributos lo convierten en un método de clasificación popular y útil.


Instrucciones: Escriba una función quickSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor. Si bien la elección del valor de pivote es importante, cualquier pivote servirá para nuestros propósitos aquí. Por simplicidad, se podría utilizar el primer o el último elemento.
*/

/*

Explicación del problema

-La clasificación rápida es un algoritmo de clasificación eficiente. Es un algoritmo in situ, por lo que no ocupa ningún espacio auxiliar.

-En primer lugar, elija un punto de pivote aleatorio alrededor del cual mueva todos los elementos más pequeños a la izquierda y los elementos más grandes a la derecha.

-Después de obtener el pivotIndex que es esencialmente la posición fija de ese elemento, encontramos otro pivotIndex llamando recusirvamente a esta función.

-El peor caso de la ordenación rápida es O (n2), pero eso se puede evitar si elegimos un punto de pivote aleatorio, por lo que la O grande es O (nlogn).

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