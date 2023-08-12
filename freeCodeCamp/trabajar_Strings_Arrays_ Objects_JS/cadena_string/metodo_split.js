/**
 * El método .split()
 * El último método de cadena que cubriremos es el método split().
 * Este método toma un patrón como argumento y divide la cadena en varias subcadenas.
 * El patrón describe dónde se producen las divisiones.
 * Este método devuelve una matriz de estas subcadenas.
 *
 * Es posible que utilice este método para analizar una URL o ciertas cadenas.
 */

let string = "Hello World";

// Divide a string into words
// This can be done when the passed pattern is a space

let words = string.split(" "); // output ['Hello' , 'World']

// When the passed parameter is an empty string, the output array
// will carry each of the characters of the given string

let chars = string.split("");

// output ["H","e","l","l","o"," ","W","o","r","l","d"]
