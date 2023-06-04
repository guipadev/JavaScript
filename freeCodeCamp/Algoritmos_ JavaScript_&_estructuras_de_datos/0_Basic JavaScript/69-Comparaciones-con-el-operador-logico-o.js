/*
Comparaciones con el operador lógico o
El operador lógico o (||) devuelve true si alguno de los operandos es true. De lo contrario, vuelve false.

El operador lógico o se compone de dos símbolos de tubería: (||). 
Por lo general, esto se puede encontrar entre las teclas Retroceso y Intro.

El patrón a continuación debería parecerle familiar de los puntos de ruta anteriores.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

Este código devolverá Yes si num está entre 5 y 10 (5 e 10 incluido). La misma lógica se puede escribir con el operador lógico o.

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

Combine las dos if declaraciones en una declaración que devuelve la cadena Outside si val no está entre 10 y 20, inclusive. De lo contrario, devuelve la cadena Inside.

function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

*/

function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);
