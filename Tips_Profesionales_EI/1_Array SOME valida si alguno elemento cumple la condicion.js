//Array SOME si alguno de los elementos cumple con la condicion

const array = [1,2,3,-10,5,6]

const algunValorMenor = array.some(function (valor) {
    return valor < 0
})

console.log(algunValorMenor) // true

//Refatorizar el código
const isLessThanZero = valor => valor < 0

const hayAlgunValorMenorACero = array.some(isLessThanZero)

console.log(hayAlgunValorMenorACero) // true

//EJEMPLO ENTERNO MAS REALISTA SABER EN UN OBJETO QUIEN ES MAYOR DE EDAD
const users = [
    {name: 'Fabian', age: 23},
    {name: 'Nomada', age: 10},
    {name: 'Stephen', age: 13},
    {name: 'John', age: 11}
]

const anyAdult = users.some(user => user.age > 18)

console.log(anyAdult) // true