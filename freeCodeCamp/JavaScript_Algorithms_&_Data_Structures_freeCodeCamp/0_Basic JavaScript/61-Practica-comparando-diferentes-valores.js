/*
Practica comparando diferentes valores

En los últimos dos desafíos, aprendimos sobre el operador de igualdad (==) y el operador de igualdad estricta (===). 
Hagamos una revisión rápida y practiquemos un poco más el uso de estos operadores.

Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. 
Sin embargo, el operador de igualdad estricta comparará tanto el tipo de datos como el valor tal cual, sin convertir un tipo en otro.

Ejemplos

3 == '3' devuelve true porque JavaScript realiza la conversión de tipo de cadena a número. 3 === '3' devuelve false porque los tipos son diferentes y no se realiza la conversión de tipo.

Nota: en JavaScript, puede determinar el tipo de una variable o un valor con el typeof operador, de la siguiente manera:

typeof 3
typeof '3'
typeof 3 devuelve la cadena number y typeof '3' devuelve la cadena string.

La compareEquality función en el editor compara dos valores usando el operador de igualdad. 
Modifique la función para que devuelva la cadena Equal solo cuando los valores sean estrictamente iguales.

// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
*/

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
