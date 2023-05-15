/*
Repite una cadena repite una cadena

Repite una cadena dada str (primer argumento) por un número (num) de veces 
(segundo argumento). 
Devuelve una cadena vacía si num no es un número positivo. 
Para este desafío, no utilices el método incorporado .repeat().
*/

function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
}
  
console.log(repeatStringNumTimes("abc", 3)) // abcabcabc

// Solution 2
function repeatStringNumTimes2(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
}

// Solution 3
function repeatStringNumTimes3(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}