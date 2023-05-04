/**
 * Al final de esta lectura, usted podrá:
 * Explique que las matrices son objetos, con sus propias propiedades y métodos integrados.
 * Resuma la forma común de extender arreglos usando el método push()
 * y explique cómo recortar el último miembro de una matriz usando el método pop()
 */

/**
Los arreglos son objetos

En JavaScript, las matrices son objetos. Eso significa que las matrices también tienen algunas 
propiedades y métodos integrados.

Uno de los métodos incorporados más utilizados en matrices son los   métodos push()  y  pop() .

Para agregar nuevos elementos a una matriz, puedo usar el  método push()  :
 */

let fruits = [];

fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']

// Para eliminar el último elemento de una matriz, puedo usar el   método   pop() :
fruits.pop();

console.log(fruits); // [ 'apple' ]

/**
 * Vinculándome con algunas lecciones anteriores de este curso,
 * ahora puedo construir una función que toma todos sus argumentos y los inserta en una matriz,
 * como esta:
 */

function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}

/**
 * Ahora puedo llamar a la  función arrayBuilder()  , por ejemplo, así:
 */
arrayBuilder("apple", "pear", "plum"); // [ 'apple', 'pear', 'plum' ]

/**
 * Aún mejor, no tengo que registrar en la consola la matriz recién construida.
 * En cambio, puedo devolverlo:
 */
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

/**
 * Además, puedo guardar esta llamada de función en una variable.
 * Puedo nombrarlo como quieras, pero esta vez usaré el nombre:  simpleArr .
 */
let simpleArr = arrayBuilder("apple", "pear", "plum");

/**
 * Y ahora puedo consolar el registro de los valores almacenados en  simpleArr :
 */
console.log(simpleArr); // [ 'apple', 'pear', 'plum' ]
