//Desembolver varios arrays con el metodo Array.flat

const array = [1, 2, [3, 4], [5, [6]], [[7]]]

const flatten = array.flat()

console.log(flatten) // [ 1, 2, 3, 4, 5, [ 6 ], [ 7 ] ]

//DESEMBOLVER MÁS EL ARRAY
const desenvuelve = array.flat(2)

console.log(desenvuelve) // [ 1, 2, 3, 4, 5, 6, 7 ]
