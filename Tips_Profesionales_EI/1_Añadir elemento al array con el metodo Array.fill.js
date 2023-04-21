// Añadir elemento al array con el metodo Array.fill
const array = [1,1,1,1,1,1,1,1,1,1,1]

array.fill(0)

console.log(array) // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

//Que se conserve solo los 2 primeros elementos

array.fill(3, 2)

console.log(array) // [ 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]

//Que se realice cambios a un numero determinado de elementos

array.fill(18, 2, 6)

console.log(array) // [ 0, 0, 18, 18, 18, 18, 3, 3, 3, 3, 3 ]

//EJEMPLO DE USO UN ARRAY INICIALIZADO, PERO COLOCARLE UN VALOR POR DEFECTO
const myArray = new Array(8).fill(0)
console.log(myArray) // [ 0, 0, 0, 0, 0, 0, 0, 0 ]

const myArray = new Array(8).fill(0).forEach(()=>console.log('HOLA'))
console.log(myArray) // [ 'HOLA', 'HOLA', 'HOLA', 'HOLA', 'HOLA', 'HOLA', 'HOLA', 'HOLA' ]
