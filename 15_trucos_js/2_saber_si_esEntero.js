/**
 * Hay una forma mucho más limpia de saber si un valor es un número entero.
 * La Number API de JavaScript proporciona un método llamado isInteger()
 * para cumplir este propósito. Es muy útil y mejor estar al tanto.
 */

let mynum = 123;
let mynumStr = "123";

console.log(`${mynum} is a number?`, Number.isInteger(mynum));
console.log(`${mynumStr} is a number?`, Number.isInteger(mynumStr));
