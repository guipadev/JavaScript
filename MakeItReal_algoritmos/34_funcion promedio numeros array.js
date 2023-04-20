/*
Ejercicio 34
Escribe una funci�n llamada promedio que reciba un arreglo de n�meros y retorne el promedio los elementos.

// c�digo de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
*/

function promedio (arreglo){
    let sumatoria = arreglo.reduce(function(a, b){
      return a + b; //Regresa el acumulador m�s el siguiente
    }, 0); //Pero si no encuentras nada o no hay siguiente, regresa 0
    return sumatoria / arreglo.length;
  }
  
  console.log(promedio([1, 2, 3, 4])) // 2.5
  console.log(promedio([7, 8, 9])) // 8
  console.log(promedio([300, 100])) // 200