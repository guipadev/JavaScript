/*****************************************************************************
Ejercicio 47
Escribe una funci�n llamada pares que reciba un arreglo de n�meros y retorne un nuevo arreglo con los n�meros pares que existen en el arreglo:

// c�digo de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []
Nota: Intenta utilizar el m�todo filter de los arreglos para solucionar este ejercicio.
******************************************************************************/

function pares(arregloNumeros){
  const arrFiltrado = arregloNumeros.filter(num => num % 2 == 0)
  return arrFiltrado
}

// c�digo de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []
