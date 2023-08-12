/**
 * El método .slice()
 * Una subcadena es un subconjunto o parte de otra cadena, o es una secuencia contigua de
 * caracteres dentro de una cadena.
 * Por ejemplo, "Subcadena" es una subcadena de "Subcadena en JavaScript".
 *
 * Ahora digamos que queremos obtener una subcadena de una cadena dada.
 * Podemos usar el método slice().
 * Slice es en realidad uno de los métodos de cadena más importantes.
 * Lo usa para obtener subcadenas y también para copiar cadenas.
 *
 * Slice toma dos parámetros opcionales: el primero es donde queremos comenzar a cortar y
 * el segundo es donde queremos terminar la operación de corte.
 *
 * Supongamos que pasamos 1 y 10 como parámetros para el método de división.
 * Luego, el método devolverá una subcadena que comienza en el índice 1 y termina en el índice 9.
 *
 * Esto significa que la subcadena nunca incluye el carácter en el índice final.
 * Una nota importante es nunca pasar un índice final más alto que la longitud de la cadena.
 */

let string = "Hello World";

// to check the string length we can use the length instance property

let length = string.length; // output 11

// slicing to get the substring from index 1 -> 9

let string1 = string.slice(1, 10); // output 'ello Worl'

// not passing any parameters will generate
// a copy of the ariginal string with no mutation

let copy = string.slice(); // output 'Hello World'
