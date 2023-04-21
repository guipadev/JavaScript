//filtrar un array o lista de objetos FILTER
//No afecta el array original por ende se debe guardar en una variable

const array = [1,2,-3,4]

// array.filter(function(valor, indice, array){})

const filtrado = array.filter(function (valor) {
    return valor > 0
})

console.log(array) // [ 1, 2, -3, 4 ]

console.log(filtrado) // [ 1, 2, 4 ]


// FORMA ARROW FUNCTIONS
const filtroArrow = array.filter((valor)=> valor > 0)

console.log(filtroArrow) // [ 1, 2, 4 ]


// REFACTORIZAR A CODIGO MAS LIMPIO Y LEGIBLE
const valoresPositivos = (valor) => valor > 0

const filtro = array.filter(valoresPositivos)

console.log(filtro) // [ 1, 2, 4 ]