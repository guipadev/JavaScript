/*
Introducción a las sentencias Else

Cuando una condición para una ifdeclaración es verdadera, se ejecuta el bloque de código que la sigue. 
¿Qué pasa cuando esa condición es falsa? Normalmente no pasaría nada. 
Con una else declaración, se puede ejecutar un bloque de código alternativo.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

Combine las ifdeclaraciones en una sola if/elsedeclaración.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

*/

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
