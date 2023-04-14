/*
Comparación con el Operador de Desigualdad Estricta

El operador de desigualdad estricta (!==) es el opuesto lógico del operador de igualdad estricta. 
Significa "Estrictamente no igual" y regresa false donde regresaría la igualdad estricta truey viceversa. 
El operador de desigualdad estricta no convertirá tipos de datos.

Ejemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

Agregue el operador de desigualdad estricta a la if declaración para que la función devuelva la cadena Not Equal cuando val no sea estrictamente igual a 17

function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

*/

function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
