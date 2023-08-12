/**
 * El método .indexOf()
 * Para obtener el primer índice de una matriz dada donde aparece un elemento,
 * podemos usar el método indexOf().
 * Se verá así. Si el argumento pasado a este método no aparece en la matriz,
 * devolverá -1.
 */

let array = [1, 2, 3];

// Let's find the index where 1 occurs for thwe first time

let first1 = array.indexOf(1); // output 0

// Now let's try to find 4 in the array

let first4 = array.indexOf(4); // output -1
