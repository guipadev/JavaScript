class Calculadora {
    constructor() {
        this.numero1
        this.numero2
    }

    resta(numero1, numero2) {
        this.numero1
        this.numero2
        return numero1 - numero2
    }

    suma(numero1, numero2) {
        this.numero1
        this.numero2
        return numero1 + numero2
    }
}

let operacion = new Calculadora()
console.log(`El resutaldo resta ${operacion.resta(30, 10)}`)
console.log(`El resutaldo suma ${operacion.suma(30, 10)}`)

//FUNCION GENERADORA O ITERADORA
function* contandorInfinito() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}

let conteo = contadorInfinito()

console.log(conteo.next()) //{value: 0, done: false}
console.log(conteo.next()) //{value: 1, done: false}
console.log(conteo.next()) //{value: 2, done: false}



for (let numero of conteo) {
    if (numero > 10) break
    console.log(numero)
} //Imprime los valores de 0 a 10

//OTRO EJEMPLO DE FUNCION ITERADORA
function* impares() {
    let numero = 0
    while (true) {
        yield 2 * numero + 1
        numero++
    }
}

function tarea(n, iterador) {
    let contador = null
    for (con of iterador) {
        console.log(con)
        contador--
        if (contador <= 0) break
    }
}

let todos_los_impares = impares() //1
tarea(5, todos_los_impares) //undefined