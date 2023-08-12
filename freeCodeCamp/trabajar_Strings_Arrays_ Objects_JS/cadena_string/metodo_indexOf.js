/**
 * El método .indexOf()
 * Ahora, para encontrar el índice de un determinado carácter o un conjunto de caracteres
 * de una cadena, podemos usar el método indexOf().
 * Esto devolverá el índice del primer índice donde aparece el carácter o conjunto
 * de caracteres pasados.
 */

let string = "Hello World";

// Let's find the index where 'H' occurs for the first time

let firstH = string.indexOf("H"); // output 0

// Let's find the first index where 'World' occurs for the first time

let firstWorld = string.indexOf("World"); // output 6

// In case a character or a set of characters
// doesn't occur in the string this method returns -1

let notThere = string.indexOf("Z"); // output -1
