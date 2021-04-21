/*
Implementar ordenaci�n por combinaci�n

Otro algoritmo de clasificaci�n intermedio com�n es la clasificaci�n por combinaci�n. Al igual que la ordenaci�n r�pida, la ordenaci�n combinada tambi�n utiliza una metodolog�a recursiva de dividir y conquistar para ordenar una matriz. Aprovecha el hecho de que es relativamente f�cil ordenar dos matrices siempre que cada una est� ordenada en primer lugar. Pero comenzaremos con solo una matriz como entrada, entonces, �c�mo llegamos a dos matrices ordenadas a partir de eso? Bueno, podemos dividir recursivamente la entrada original en dos hasta llegar al caso base de una matriz con un elemento. Una matriz de un solo elemento se ordena de forma natural, por lo que podemos comenzar a combinar. Esta combinaci�n desenrollar� las llamadas recursivas que dividen la matriz original, lo que eventualmente producir� una matriz ordenada final de todos los elementos. Los pasos de la ordenaci�n combinada, entonces, son:

1) Divida recursivamente la matriz de entrada por la mitad hasta que se produzca una submatriz con un solo elemento.

2) Combine cada submatriz ordenada para producir la matriz ordenada final.

La clasificaci�n por combinaci�n es un m�todo de clasificaci�n eficiente, con una complejidad de tiempo de O (nlog (n)). Este algoritmo es popular porque es eficaz y relativamente f�cil de implementar.

Aparte, este ser� el �ltimo algoritmo de clasificaci�n que cubriremos aqu�. Sin embargo, m�s adelante en la secci�n sobre estructuras de datos de �rbol, describiremos la ordenaci�n de pila, otro m�todo de ordenaci�n eficiente que requiere una pila binaria en su implementaci�n.

Instrucciones: Escriba una funci�n mergeSort que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden de menor a mayor. Una buena forma de implementar esto es escribir una funci�n, por ejemplo merge, que es responsable de fusionar dos matrices ordenadas, y otra funci�n, por ejemplo mergeSort, que es responsable de la recursividad que produce matrices de un solo elemento para alimentar a merge. �Buena suerte!
*/

/*
Explicaci�n del problema

-Merge Sort es un problema cl�sico de dividir y conquistar.
-Est�n involucrados los siguientes pasos:
* Dividir: Rompemos la matriz desde el medio usando recusi�n hasta que nos quedemos con 1 elemento.
* Conquer: Luego clasificamos estos peque�os arreglos.
* Combinar: Finalmente, fusionamos estos peque�os arreglos en un arreglo ordenado y seguimos haci�ndolo hasta que combinemos todos los arreglos.
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
