/*
Compruebe la presencia de un elemento con indexOf ()

Dado que las matrices se pueden cambiar o mutar en cualquier momento, no hay garant�a de 
d�nde estar� un dato en particular en una matriz determinada, o si ese elemento a�n existe.
Afortunadamente, JavaScript nos proporciona  otro m�todo integrado, indexOf (), 
que nos permite verificar r�pida y f�cilmente la presencia de un elemento en una matriz.
indexOf () toma un elemento como par�metro y, cuando se llama, devuelve la posici�n, 
o �ndice, de ese elemento, o -1 si el elemento no existe en la matriz.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns  -1

fruits.indexOf('oranges'); // returns  2

fruits.indexOf('pears'); // returns  1 (el primer �ndice en el que existe cada elemento)
*/

/*
indexOf () puede ser increiblemente util para verificar ráidamente la presencia de un 
elemento en una matriz. 
Hemos definido una función, quickCheck, que toma una matriz y un elemento como argumentos. 
Modifique la función usando indexOf() para que devuelva verdadero si el elemento pasado 
existe en la matriz y falso si no.

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

//solutions 1
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//solutions 2
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//solutions 3
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
