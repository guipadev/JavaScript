/*
Utilice el operador condicional (ternario)

El operador condicional, también llamado operador ternario, se puede usar como una expresión if-else de una línea.

La sintaxis es a ? b : c, donde a es la condición, b es el código que se ejecutará cuando la condición regrese true
y c es el código que se ejecutará cuando la condición regrese false.

La siguiente función usa una if/else declaración para verificar una condición:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

Esto se puede reescribir usando el operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

Usa el operador condicional en la checkEqual función para verificar si dos números son iguales o no. 
La función debe devolver la cadena Equal o la cadena Not Equal.

function checkEqual(a, b) {

}

checkEqual(1, 2);

*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);