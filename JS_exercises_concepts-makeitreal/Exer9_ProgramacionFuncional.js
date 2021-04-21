/***************************************************************
Ejercicio 46
Imprime todos los elementos del arreglo utilizando el método forEach:

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

El resultado en consola debería ser el siguiente:

45
Hola
82
2
67
true
Juan
12.34
***************************************************************/

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];

//Impresion de acuerdo solucion
arr.forEach((num) => console.log(num))

//impresion con la posicion de c/u
arr.forEach((num, i) => console.log("Esta la impresion con la posicion\n "+ i + ": " + num))

/*****************************************************************************
Ejercicio 47
Escribe una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares que existen en el arreglo:

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []
Nota: Intenta utilizar el método filter de los arreglos para solucionar este ejercicio.
******************************************************************************/

function pares(arregloNumeros){
  const arrFiltrado = arregloNumeros.filter(num => num % 2 == 0)
  return arrFiltrado
}

// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []

/*******************************************************************************
Ejercicio 48
Escribe una función llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores en las posiciones pares del arreglo que llega como argumento.

// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []
Nota: Intenta utilizar el método filter de los arreglos.
********************************************************************************/

//La función callback que recibe filter() también puede recibir como parámetro el índice del elemento actual y se puede usar ese índice para hacer el filtrado:

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

/*****************************************************************
Ejercicio 49
Escribe una función llamada multiplicar que reciba un arreglo (de números) y un número. La función debe retornar un nuevo arreglo con cada número multiplicado por segundo número:

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []
Nota: intenta utilizar el método map de los arreglos.
******************************************************************/

function multiplicar(arregloNumeros, numero){
  const result = arregloNumeros.map(num => num * numero)
  return result
}

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []

/*****************************************************************
Ejercicio 50
Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

// código de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]
***************************************************************/

function productosBaratos(prods){
  for (let elemento of prods){
    if(elemento.precio >= 5 && elemento.precio <= 10){
      console.log([elemento.nombre])
    }
  }
}

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];

console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]