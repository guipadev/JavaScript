/*
Agregar elementos usando splice ()

Recuerda que en el �ltimo desaf�o mencionamos que splice () puede tomar hasta 
tres par�metros? 
Bueno, puede usar el tercer par�metro, compuesto por uno o m�s elementos, 
para agregarlo a la matriz. 
Esto puede ser incre�blemente �til para cambiar r�pidamente un elemento, 
o un conjunto de elementos, por otro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //[10, 11, 12, 13, 14, 15]

La segunda entrada de 12 se elimina y agregamos 13 y 14 en el mismo �ndice. 
La matriz de n�meros ahora ser�a [10, 11, 12, 13, 14, 15].

Aqu�, comenzamos con una matriz de n�meros. Luego, pasamos lo siguiente a splice (): 
El �ndice en el que comenzar a eliminar elementos (3), el n�mero de elementos a eliminar (1)
y los argumentos restantes (13, 14) se insertar�n comenzando en ese mismo �ndice. 
Tenga en cuenta que puede haber cualquier n�mero de elementos (separados por comas)
despu�s de amountToDelete, cada uno de los cuales se inserta.
*/

/*
Hemos definido una funci�n, htmlColorNames, que toma una matriz de colores HTML como 
argumento. 
Modifique la funci�n usando splice () para eliminar los dos primeros elementos de la matriz 
y agregue 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.

function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

/*
Sugerencias

Con la funci�n splice (), debe eliminar los primeros 2 elementos de la matriz arr 
y reemplazarlos con DarkSalmon y BlanchedAlmond.
Recuerde que la funci�n de empalme puede tomar hasta tres par�metros.

Ejemplo:

arr.splice(0, 1, "Two");

Los dos primeros par�metros son los mismos que en el desaf�o anterior.
`0` iniciar� la funci�n` splice () `en el �ndice 0.
El segundo par�metro `1` eliminar� solo 1 variable de la matriz.
La variable final "Dos" reemplazar� a la variable en arr [0].
Nota: El par�metro final puede requerir m�s de 1 argumento.
*/

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//Rta: ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]
