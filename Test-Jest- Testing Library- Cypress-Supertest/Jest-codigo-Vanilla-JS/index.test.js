/**
 * Requerir la función que queremos probar: isPalindrome = require('./index.js')
 *
 * La test() función la proporciona Jest y dentro de ella pondremos el código
 * que queremos que Jest ejecute.
 *
 * test() toma dos parámetros.
 * El primero es una descripción de la prueba, que es un nombre distintivo que se mostrará
 * en nuestra consola cuando se ejecute la prueba.
 *
 * El segundo parámetro es una devolución de llamada,
 * que contiene el código de prueba real.
 *
 * Dentro de esta devolución de llamada estamos llamando a la expect() función
 * (también proporcionada por Jest).
 * expect() toma nuestra función como parámetro, que a su vez recibe un parámetro que inventamos.
 *
 * Por último, encadenamos la .toBe() función (proporcionada también por Jest)
 * y como parámetro le pasamos el valor que esperamos isPalindrome() devolver para cada caso.
 * ("neuquen" es un palíndromo, por lo que nuestra función debería devolver true,
 * y "bariloche" no lo es, por lo que debería devolver false).
 *
 * Jest es fácil de configurarlo.
 * La autoexplicativa que es su sintaxis. 👌
 */

const { isPalindrome } = require("./index.js");

//isPalindrome = require("./index.js");

console.log(typeof isPalindrome);

test("neuquen is palindrom", () => {
  expect(isPalindrome("neuquen")).toBe(true);
});

test("bariloche is not palindrom", () => {
  expect(isPalindrome("bariloche")).toBe(false);
});
