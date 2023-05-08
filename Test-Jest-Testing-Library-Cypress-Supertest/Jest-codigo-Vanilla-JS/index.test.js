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

const { isPalindrome, twoSum } = require("./index.js");

/*
test("neuquen is palindrom", () => {
  expect(isPalindrome("neuquen")).toBe(true);
});

test("bariloche is not palindrom", () => {
  expect(isPalindrome("bariloche")).toBe(false);
});
*/

/**
 * La función toma dos parámetros, una matriz de números y un número de valor objetivo.
 * Lo que hace es identificar si hay dos números en la matriz que suman el valor del
 * segundo parámetro. Si los dos valores existen en la matriz, los devuelve en una matriz
 * y, si no, devuelve falso.
 */

/*
test("[2,7,11,15] and 9 returns [2, 7]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
});

test("[3,2,4] and 6 returns [2, 4]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([2, 4]);
});

test("[3,2,4] and 10 returns false", () => {
  expect(twoSum([3, 2, 4], 10)).toBe(false);
});
*/

/**
 * Por ejemplo, .toBe()se usa para evaluar primitivas como cadenas, números o booleanos.
 * toEqual()se usa para evaluar objetos (que cubre casi todo lo demás en Javascript).
 *
 * Comparar el valor devuelto con un número se podría usar, .toBeGreaterThan() etc.
 * toBeGreaterThanOrEqual()
 */

/**
 * Jest nos proporciona una describe() función que podemos usar para agrupar las pruebas
 * y mostrar los resultados de una manera más esquemática.
 *
 * El primer parámetro es la descripción que queremos mostrar para el grupo de pruebas dado,
 * y el segundo es una devolución de llamada que contiene nuestras pruebas.
 */

describe("isPalindrome function", () => {
  test("neuquen is palindrom", () => {
    expect(isPalindrome("neuquen")).toBe(true);
  });

  test("bariloche is not palindrom", () => {
    expect(isPalindrome("bariloche")).toBe(false);
  });
});

describe("twoSum function", () => {
  test("[2,7,11,15] and 9 returns [2, 7]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
  });

  test("[3,2,4] and 6 returns [2, 4]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([2, 4]);
  });

  test("[3,2,4] and 10 returns false", () => {
    expect(twoSum([3, 2, 4], 10)).toBe(false);
  });
});
