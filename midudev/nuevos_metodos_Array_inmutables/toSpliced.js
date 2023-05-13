
/**
* splice() 
* inicio, eliminar, agregar
* Devuelve array muta de lo eliminado
*/

const numbers = [1, 2, 3]

cons arrayNumbers = numbers.splice(1, 1, 3)

console.log(arrayNumbers) // [2]

/**
 * Devuelve nuevo array y no muta el original
 */

const arrayNumberNew = numbers.toSpliced(1, 2, 3, 4, 5)

console.log(arrayNumberNew) // [1, 3, 4, 5, 3]