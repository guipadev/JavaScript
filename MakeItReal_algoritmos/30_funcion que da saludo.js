/*
Ejercicio 30
Escribe una funci�n llamada hola que reciba un argumento (una cadena de texto) y 
retorne "Hola " seguido del argumento y un signo de exclamaci�n.

// escribe la funci�n hola ac�

// c�digo de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"
*/

function hola(palabra){
    return `Hola ${palabra} !`
  }
  
  // c�digo de prueba
  console.log(hola("Pedro")) // "Hola Pedro!"
  console.log(hola("Juan")) // "Hola Juan!"
  console.log(hola("")) // "Hola !"