/*
Comprender el valor indefinido devuelto por una función

Una función puede incluir la return declaración pero no tiene que hacerlo. 
En el caso de que la función no tenga una return declaración, cuando la llama, la función procesa el código interno pero el valor devuelto es undefined.

Ejemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

addSumes una función sin return sentencia. 
La función cambiará la sum variable global pero el valor devuelto de la función es undefined.

Crea una función addFive sin argumentos. Esta función suma 5 a la sum variable, pero su valor devuelto es undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

// Only change code above this line

addThree();
addFive();
*/

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
