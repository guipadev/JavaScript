/*
Confirma el final

Evalúa si una cadena (primer argumento, str) termina con la cadena 
de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. 
Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de 
subcadena de JavaScript en su lugar.

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
*/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian Armando", "do")); // true

// Solution 2
function confirmEnding2(str, target) {
  return str.slice(-target.length) === target;
}

// Solution 3
function confirmEnding3(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}
