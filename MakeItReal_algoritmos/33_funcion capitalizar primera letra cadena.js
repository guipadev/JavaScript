/*
Ejercicio 33
Escribe una funci�n llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra est� separada por espacio.

// c�digo de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make It Real"
*/

var cadena = prompt("Ingrese texto a capitalizar");
var arregloDeSubCadenas = cadena.split(" ");

function capitalizar(arregloDeSubCadenas){
  for(let i=0; i<arregloDeSubCadenas.length; i++){
   const w = arregloDeSubCadenas[i]
   arregloDeSubCadenas[i] = w[0].toUpperCase() + w.substring(1)   
  }
  return arregloDeSubCadenas.join(" ")
}

console.log(capitalizar(arregloDeSubCadenas))