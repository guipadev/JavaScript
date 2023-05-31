/*
Caso de punción lumbar
Convierte una cuerda en una caja espinal. 
El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.

function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
*/
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("It's such a fine line between stupid, and clever.")); // it's-such-a-fine-line-between-stupid,-and-clever.
