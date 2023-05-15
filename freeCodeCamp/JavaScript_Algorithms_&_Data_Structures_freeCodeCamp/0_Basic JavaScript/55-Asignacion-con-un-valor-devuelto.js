/*
Asignación con un valor devuelto

Si recuerda nuestra discusión sobre el almacenamiento de valores con el operador de asignación, 
todo lo que se encuentra a la derecha del signo igual se resuelve antes de que se asigne el valor. 
Esto significa que podemos tomar el valor de retorno de una función y asignarlo a una variable.

Supongamos que hemos definido una función sum que suma dos números.

ourSum = sum(5, 12);

Llamar a la sum función con los argumentos de 5 y 12 produce un valor de retorno de 17. 

Este valor devuelto se asigna a la ourSum variable.

Llame a la processArg función con un argumento de 7 y asigne su valor de retorno a la variable processed.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

*/

let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

