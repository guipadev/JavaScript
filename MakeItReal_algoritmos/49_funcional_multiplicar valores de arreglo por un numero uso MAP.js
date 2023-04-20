/*****************************************************************
Ejercicio 49
Escribe una funci�n llamada multiplicar que reciba un arreglo (de n�meros) y un n�mero. 
La funci�n debe retornar un nuevo arreglo con cada n�mero multiplicado por segundo n�mero:

// c�digo de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []
Nota: intenta utilizar el m�todo map de los arreglos.
******************************************************************/

function multiplicar(arregloNumeros, numero){
    const result = arregloNumeros.map(num => num * numero)
    return result
  }
  
  // c�digo de prueba
  console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
  console.log(multiplicar([7, 4], 3)) // [21, 12]
  console.log(multiplicar([], 10)) // []