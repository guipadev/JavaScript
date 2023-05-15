/*
Comparación con el Operador de Desigualdad

El operador de desigualdad (!=) es lo opuesto al operador de igualdad. 
Significa no igual y vuelve false donde volvería la igualdad true y viceversa. 
Al igual que el operador de igualdad, el operador de desigualdad convertirá tipos de datos de valores al comparar.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

Agregue el operador de desigualdad != en la if instrucción para que la función devuelva la cadena Not Equal cuando valno sea equivalente a 99.

// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

*/

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
