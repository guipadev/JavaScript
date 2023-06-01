/*
Déjalo caer

Dada la matriz arr, itere y elimine cada elemento comenzando desde el primer elemento 
(el índice 0) hasta que la función funcregrese truecuando el elemento iterado pase
a través de él.

Luego, devuelva el resto de la matriz una vez que se cumpla la condición; 
de lo contrario, arrdebe devolverse como una matriz vacía.

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
