/*
Invierte una cadena

Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.
*/


function reverseString2(str) {
    return str
      .split("")
      .reverse()
      .join("");
}

console.log(reverseString2("hello")) // olleh


// Solution 2

function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
  
console.log(reverseString("hello")) // olleh
