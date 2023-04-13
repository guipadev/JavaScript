/*
Alcance global y funciones

En JavaScript, el alcance se refiere a la visibilidad de las variables. 
Las variables que se definen fuera de un bloque de funciones tienen alcance global. 
Esto significa que se pueden ver en todas partes en su código JavaScript.

Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el global alcance. 
Esto puede crear consecuencias no deseadas en otras partes de su código o al ejecutar una función nuevamente. 
Siempre debe declarar sus variables con let o const.

Usando let o const, declare una variable global nombrada myGlobal fuera de cualquier función. Inicialícelo con un valor de 10.

Dentro de la función fun1, asigne 5 sin oopsGlobal usar las palabras clave var, let o const.

// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

*/

// Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal here
  let myGlobal = oopsGlobal;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
