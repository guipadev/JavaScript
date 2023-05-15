/*
Implementar ordenación por combinación

Otro algoritmo de clasificación intermedio común es la clasificación por combinación. Al igual que la ordenación rápida, la ordenación combinada también utiliza una metodología recursiva de dividir y conquistar para ordenar una matriz. Aprovecha el hecho de que es relativamente fácil ordenar dos matrices siempre que cada una esté ordenada en primer lugar. Pero comenzaremos con solo una matriz como entrada, entonces, ¿cómo llegamos a dos matrices ordenadas a partir de eso? Bueno, podemos dividir recursivamente la entrada original en dos hasta llegar al caso base de una matriz con un elemento. Una matriz de un solo elemento se ordena de forma natural, por lo que podemos comenzar a combinar. Esta combinación desenrollará las llamadas recursivas que dividen la matriz original, lo que eventualmente producirá una matriz ordenada final de todos los elementos. Los pasos de la ordenación combinada, entonces, son:

1) Divida recursivamente la matriz de entrada por la mitad hasta que se produzca una submatriz con un solo elemento.

2) Combine cada submatriz ordenada para producir la matriz ordenada final.

La clasificación por combinación es un método de clasificación eficiente, con una complejidad de tiempo de O (nlog (n)). Este algoritmo es popular porque es eficaz y relativamente fácil de implementar.

Aparte, este será el último algoritmo de clasificación que cubriremos aquí. Sin embargo, más adelante en la sección sobre estructuras de datos de árbol, describiremos la ordenación de pila, otro método de ordenación eficiente que requiere una pila binaria en su implementación.

Instrucciones: Escriba una función mergeSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor. Una buena forma de implementar esto es escribir una función, por ejemplo merge, que es responsable de fusionar dos matrices ordenadas, y otra función, por ejemplo mergeSort, que es responsable de la recursividad que produce matrices de un solo elemento para alimentar a merge. ¡Buena suerte!
*/

/*
Explicación del problema

-Merge Sort es un problema clásico de dividir y conquistar.
-Están involucrados los siguientes pasos:
* Dividir: Rompemos la matriz desde el medio usando recusión hasta que nos quedemos con 1 elemento.
* Conquer: Luego clasificamos estos pequeños arreglos.
* Combinar: Finalmente, fusionamos estos pequeños arreglos en un arreglo ordenado y seguimos haciéndolo hasta que combinemos todos los arreglos.
-La complejidad de tiempo de Merge Sort es O (nlogn).
-La complejidad espacial de Merge Sort es O (n).
-Es un algoritmo estable.
*/


function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}
mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
