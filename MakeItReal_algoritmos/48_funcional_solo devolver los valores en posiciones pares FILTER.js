/*******************************************************************************
Ejercicio 48
Escribe una funci�n llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores 
en las posiciones pares del arreglo que llega como argumento.

// c�digo de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []
Nota: Intenta utilizar el m�todo filter de los arreglos.
********************************************************************************/

//La funci�n callback que recibe filter() tambi�n puede recibir como par�metro el �ndice 
//del elemento actual y se puede usar ese �ndice para hacer el filtrado:

function posPares(arreglo){
    const arrFiltrado = arreglo.filter((num, index) => index % 2 == 0)
    return arrFiltrado
  }
  
  // Resultados esperados
  console.log(posPares(["a", "b", "c"])) // ["a", "c"]
  console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
  console.log(posPares([])) // []
  
  //filter tambien tiene otros parametros aparte del valor actual, el segundo parametro es el index
  
  function Pares(arreglo){
    return arreglo.filter((value, index) => {
      if(index % 2 == 0) return value
    })
  }
  
  // Resultados esperados
  console.log(Pares(["a", "b", "c"])) // ["a", "c"]
  console.log(Pares([0, 1, 2, 3, 4])) // [0, 2, 4]
  console.log(Pares([])) // []