/*
Validador de números telefónicos

Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, 
siempre que tenga el formato de un número estadounidense válido. 
Los siguientes ejemplos son de formatos válidos para números estadounidenses 
(consulte las pruebas a continuación para otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf. 
Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier 
combinación de los formatos proporcionados arriba. 

El código de área es obligatorio. 
Si el código de país es proporcionado, debes confirmar que el código de país es 1. 
Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false.
*/

/**
 * valida si una cadena concuerda con un número de teléfono válido en Estados Unidos:
 * utiliza una expresión regular para validar el número de teléfono.
 * La expresión regular sigue las siguientes reglas:
 * ^ y $ aseguran que la cadena completa coincide con el patrón.
 * (1\s?)? verifica si hay un código de país opcional seguido de un espacio opcional.
 * (\(\d{3}\)|\d{3}) verifica si el código de área está presente en uno de los dos formatos: (555) o 555.
 * [-\s]? permite un guión o espacio opcional después del código de área.
 * \d{3} verifica si hay tres dígitos después del código de área.
 * [-\s]? permite un guión o espacio opcional después de los primeros tres dígitos.
 * \d{4} verifica si hay cuatro dígitos al final del número de teléfono.
 */
function telephoneCheck(str) {
  // Expresión regular para validar el número de teléfono
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); //
console.log(telephoneCheck("555-555-5555")); // debe devolver un booleano.
console.log(telephoneCheck("1 555-555-5555")); // debe devolver true.
console.log(telephoneCheck("1 (555) 555-5555")); // debe devolver true.
console.log(telephoneCheck("5555555555")); // debe devolver true.
console.log(telephoneCheck("555-555-5555")); // debe devolver true.
console.log(telephoneCheck("(555)555-5555")); // debe devolver true.
console.log(telephoneCheck("1(555)555-5555")); // debe devolver true.
console.log(telephoneCheck("555-5555")); // debe devolver false.
console.log(telephoneCheck("5555555")); // debe devolver false.
console.log(telephoneCheck("1 555)555-5555")); // debe devolver false.
console.log(telephoneCheck("1 555 555 5555")); // debe devolver true.
console.log(telephoneCheck("1 456 789 4444")); // debe devolver true.
console.log(telephoneCheck("123**&!!asdf#")); // debe devolver false.
console.log(telephoneCheck("55555555")); // debe devolver false.
console.log(telephoneCheck("(6054756961)")); // debe devolver false.
console.log(telephoneCheck("2 (757) 622-7382")); // debe devolver false.
console.log(telephoneCheck("0 (757) 622-7382")); // debe devolver false.
console.log(telephoneCheck("-1 (757) 622-7382")); // debe devolver false.
console.log(telephoneCheck("2 757 622-7382")); // debe devolver false.
console.log(telephoneCheck("10 (757) 622-7382")); // debe devolver false.
console.log(telephoneCheck("27576227382")); // debe devolver false.
console.log(telephoneCheck("(275)76227382")); // debe devolver false.
console.log(telephoneCheck("2(757)6227382")); // debe devolver false.
console.log(telephoneCheck("2(757)622-7382")); // debe devolver false.
console.log(telephoneCheck("555)-555-5555")); // debe devolver false.
console.log(telephoneCheck("(555-555-5555")); // debe devolver false.
console.log(telephoneCheck("(555)5(55?)-5555")); // debe devolver false.
console.log(telephoneCheck("55 55-55-555-5")); // debe devolver false.
