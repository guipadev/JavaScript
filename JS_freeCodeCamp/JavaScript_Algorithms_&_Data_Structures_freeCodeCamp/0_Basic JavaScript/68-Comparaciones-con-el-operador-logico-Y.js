/*
Comparaciones con el operador lógico Y

A veces necesitará probar más de una cosa a la vez. El operador lógico and && devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.

El mismo efecto podría lograrse anidando una ifdeclaración dentro de otra if.

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}

return "No";

Este código devolverá Yes si num es mayor que 5 y menor que 10. La misma lógica se puede escribir con el operador lógico y .

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

Reemplace las dos declaraciones if con una declaración, usando el && operador, que devolverá la cadena Yes si vales menor o igual que 50 y mayor o igual que 25. 
De lo contrario, devolverá la cadena No.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

*/

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);
