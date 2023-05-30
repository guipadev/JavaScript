/*
Combina un arreglo en una cadena utilizando el método "join"

El método join se utiliza para unir los elementos de un arreglo creando una cadena de texto. 

Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos 
del arreglo en la cadena.

Aquí hay un ejemplo:

var arr = ["Hello", "World"];
var str = arr.join(" "); // Hello World.
--------------------------------------------------------------------------------------------
Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración 
a partir de las palabras en la cadena str.

La función debe devolver una cadena. 

Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. 

Para este desafío, no utilices el método replace.

function sentensify(str) {
  // Only change code below this line
}

sentensify("May-the-force-be-with-you");
*/

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you")); //May the force be with you
