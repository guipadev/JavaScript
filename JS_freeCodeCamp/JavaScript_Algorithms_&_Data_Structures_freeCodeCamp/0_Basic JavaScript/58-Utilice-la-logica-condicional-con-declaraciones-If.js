/*
Utilice la lógica condicional con declaraciones If

if Las declaraciones se utilizan para tomar decisiones en el código. 
La palabra clave if le dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas entre paréntesis. 
Estas condiciones se conocen como Boolean condiciones y solo pueden ser true o false.

Cuando la condición se evalúa como true, el programa ejecuta la declaración dentro de las llaves. 
Cuando la condición booleana se evalúa como false, la declaración dentro de las llaves no se ejecutará.

pseudocódigo

if ( la condición es verdadera ) {
  la declaración se ejecuta
}

Ejemplo

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true)devuelve la cadena It was truey test(false) devuelve la cadena It was false.

Cuando test se llama con un valor de true, la if declaración evalúa myCondition para ver si es así true o no. 
Como lo es true, la función devuelve It was true. 
Cuando llamamos test con un valor de false, no myCondition lo es y la declaración entre llaves no se ejecuta y la función regresa. true It was false

Cree una if declaración dentro de la función para devolver Yes, that was true si el parámetro wasThatTrue es true y devolver No, that was false en caso contrario.

function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
*/

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

}
