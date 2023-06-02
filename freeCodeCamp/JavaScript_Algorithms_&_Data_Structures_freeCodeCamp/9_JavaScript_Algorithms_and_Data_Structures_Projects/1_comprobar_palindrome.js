/*
Comprobador de palíndromos

Devuelve true si la cadena proporcionada es un palíndromo. 
De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera 
hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, 
minúsculas y espaciado.

Nota: 
Tendrás que eliminar todos los caracteres no alfanuméricos 
(puntuación, espacios y símbolos) y convertir todo en mayúsculas 
o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como 
racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 
2A3*3a2, 2A3 3a2 y 2_A3*3#A2.
*/

/**
 * Convierte la cadena a minúsculas usando el método toLowerCase().
 * Elimina todos los caracteres no alfanuméricos utilizando la función replace()
 * con una expresión regular /[^a-z0-9]/g.
 * Esto reemplazará todos los caracteres que no sean letras minúsculas (de 'a' a 'z')
 * y números (de '0' a '9') por una cadena vacía.
 * Luego, la cadena resultante solo contiene letras minúsculas y números.
 * Divide la cadena en un array de caracteres usando split('').
 * Invierte el orden de los caracteres en el array utilizando reverse().
 * Une los caracteres del array invertido en una cadena nuevamente utilizando join('').
 * Compara la cadena original sin caracteres no alfanuméricos con la cadena invertida.
 * Si son idénticas, la función devuelve true, lo que indica que la cadena es un palíndromo.
 * De lo contrario, devuelve false.
 */
function palindrome(str) {
  // Eliminar caracteres no alfanuméricos y convertir a minúsculas
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Comparar la cadena original con su reverso
  const reversedStr = alphanumericStr.split("").reverse().join("");

  return alphanumericStr === reversedStr;
}

console.log(palindrome("eye")); //
console.log(palindrome("racecar"));
console.log(palindrome("RaceCar"));
console.log(palindrome("race CAR"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("2A3 3a2"));
console.log(palindrome("2_A3*3#A2"));
