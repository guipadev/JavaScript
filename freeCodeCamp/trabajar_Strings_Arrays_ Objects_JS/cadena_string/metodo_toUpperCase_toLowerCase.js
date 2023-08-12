/**
 * Los métodos .toUpperCase() y .toLowerCase()
 * Ahora digamos que queremos poner en mayúsculas o minúsculas una cadena.
 * Puede hacer esto utilizando los métodos de instancia toUpperCase() y toLowerCase() .
 */

let string = "Hello";

// Let's lowercase a string

let lowerCase = string.toLowerCase(); // output 'hello'

// Let's upperCase a string

let upperCase = string.toUpperCase(); // output 'HELLO'

/**
 * Puede usarlos para ver si dos cadenas contienen la misma palabra, por ejemplo,
 * 'Sam' y 'sam'. En realidad, 'sam' === 'Sam' se evalúa como falso,
 * mientras que 'sam'.toLowerCase() === 'Sam'.toLowerCase() se evalúa como verdadero.
 */
