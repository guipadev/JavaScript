/*
What will be printed when the following code runs?
*/

var result = null;

console.log(result); // null

/*
When the following code runs, what will print out?
*/

try {
  console.log("Hello"); // Solo se imprime este valor 'Hello'
} catch (err) {
  console.log("Goodbye");
}

/*
If you pass an unsupported data type to a function, what error will be thrown ⭐?

RangeError ❌
SyntaxErrror ❌
TypeError ⭐
*/

/*
What will print out when the following code runs?
*/

var x;

if (x === null) {
  console.log("null");
} else if (x === undefined) {
  console.log("undefined"); // Este valor se imprimte 'undefined'
} else {
  console.log("ok");
}

/*
What will print out when the following code runs?
*/

throw new Error();

console.log("Hello"); // No se imprimirá nada.
