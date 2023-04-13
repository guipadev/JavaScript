/*
Ámbito Local y Funciones

Las variables que se declaran dentro de una función, así como los parámetros de la función, tienen alcance local.
Eso significa que solo son visibles dentro de esa función.

Aquí hay una función myTest con una variable local llamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

La myTest() llamada a la función mostrará la cadena foo en la consola. 
La console.log(loc)línea (fuera de la myTest función) arrojará un error, ya locque no está definida fuera de la función.

El editor tiene dos console.logs para ayudarlo a ver lo que está sucediendo. 

Revisa la consola mientras codificas para ver cómo cambia. 

Declare una variable local myVar dentro myLocalScope y ejecute las pruebas.

Nota: La consola aún mostrará ReferenceError: myVar is not defined, pero esto no hará que las pruebas fallen.

function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
*/

function myLocalScope() {
  // Only change code below this line
  const myVar = "prueba";

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
