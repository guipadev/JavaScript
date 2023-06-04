/*
Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio

El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. 
Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.

Por ejemplo, el siguiente código comprobaría si cada elemento en el arreglo numbers es menor a 10:

var numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

El método every devolvería false aquí.

Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. 
La función debe devolver un valor booleano.

function checkPositive(arr) {
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/

function checkPositive(arr) {
  return arr.every((val) => val > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5])); // false

// Solution 2
function checkPositive2(arr) {
  return arr.every(function (value) {
    return value > 0;
  });
}

console.log(checkPositive2([1, 2, 3, -4, 5])); // false
