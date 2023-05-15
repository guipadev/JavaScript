/*
Agregar elementos usando splice ()

¿Recuerda que en el último desafío mencionamos que splice () puede tomar hasta tres parámetros? 
Bueno, puede usar el tercer parámetro, compuesto por uno o más elementos, para agregarlo a la matriz. 
Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //[10, 11, 12, 13, 14, 15]

La segunda entrada de 12 se elimina y agregamos 13 y 14 en el mismo índice. 
La matriz de números ahora sería [10, 11, 12, 13, 14, 15].

Aquí, comenzamos con una matriz de números. Luego, pasamos lo siguiente a splice (): 
El índice en el que comenzar a eliminar elementos (3), el número de elementos a eliminar (1)
y los argumentos restantes (13, 14) se insertarán comenzando en ese mismo índice. 
Tenga en cuenta que puede haber cualquier número de elementos (separados por comas)
después de amountToDelete, cada uno de los cuales se inserta.
*/

/*
Hemos definido una función, htmlColorNames, que toma una matriz de colores HTML como argumento. Modifique la función usando splice () para eliminar los dos primeros elementos de la matriz y agregue 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.
*/

/*
Sugerencias

Con la función splice (), debe eliminar los primeros 2 elementos de la matriz arr y reemplazarlos con DarkSalmon y BlanchedAlmond.
Recuerde que la función de empalme puede tomar hasta tres parámetros.
Ejemplo:

arr.splice(0, 1, "Two");

Los dos primeros parámetros son los mismos que en el desafío anterior.
`0` iniciará la función` splice () `en el índice 0.
El segundo parámetro `1` eliminará solo 1 variable de la matriz.
La variable final "Dos" reemplazará a la variable en arr [0].
Nota: El parámetro final puede requerir más de 1 argumento.
*/

function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon','BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));  

//Rta: ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"] 















