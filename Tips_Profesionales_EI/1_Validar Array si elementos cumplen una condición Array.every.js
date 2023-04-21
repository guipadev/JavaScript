//Validar Array si elementos cumplen una condición Array.every
//arrayNumeros.every(function(valor, indice, array){})

//Ejemplo validar si todos los números son pares
const array1 = [1,2,3,4]

const array2 = [2,2,4,4]

const sonPares = array1.every(function(valor) {
    return valor % 2 == 0
})

console.log(sonPares) // false

//REFACTORIZAMOS EL CÓDIGO Y VALIDAMOS EL ARRAY 2

function esNumeroPar(valor) {
    return valor % 2 === 0
}

const sonPares2 = array2.every(esNumeroPar)

console.log(sonPares2) // true