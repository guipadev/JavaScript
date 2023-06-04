/*
Comparación con el Operador de Igualdad Estricta

La igualdad estricta (===) es la contrapartida del operador de igualdad (==). 
Sin embargo, a diferencia del operador de igualdad, que intenta convertir ambos valores que se comparan con un tipo común, 
el operador de igualdad estricta no realiza una conversión de tipo.

Si los valores que se comparan tienen tipos diferentes, se consideran desiguales y el operador de igualdad estricta devolverá falso.

Ejemplos

3 ===  3  // true
3 === '3' // false

En el segundo ejemplo, 3 es un Number tipo y '3' es un String tipo.

Utilice el operador de igualdad estricta en la if instrucción para que la función devuelva la cadena Equal cuando val sea estrictamente igual a 7.

// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
*/

function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
