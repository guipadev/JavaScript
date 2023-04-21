"use strict"

//VENTAJAS DE LA PROGRAMACION FUNCIONAL
//Side Effects (Evita que utilizar variables que no te pertenecen)
//Organizacion, ya que ahora son pequeños bloques de codigo que solo ejecutan sola tarea

//En la programación funcional aunque podrias iteran
//NO se debe realizar osea utilizar ciclos For, While, Do While, For Each


//EJEMPLO FUNCIONES NO PURAS
var a = 10
var b = 3

function add() {
    return a + b
}

//Random
//Algo que DEPENDA de la fecha actual
//Algo dependiendo del sistema de archivos
//Mutaciones

const uno = 10
const dos = 15

function sumatoria() {
    let resultado = uno + dos
    return resultado
}

//Otro ejemplo de funcion no pura
//Cause efecto colateral

let resultado = 0

function suma(a, b) {
    resultado = a + b
}


//Otro ejemplo de impura, ya que accedo a console un objeto global

function sumo(x, y) {
    console.log(x + y)
}

sumo(3, 4)

//Funcion que comparte estado
let z = 10; //SHARED!!

function sume(z) {
    return a + b
}

function reste(z) {
    return a - b
}

sume(4)
reste(3)

//Mutaciones
let numbers = [2, 3, 6]
numbers[0] = 34
console.log(numbers)    //cambia [34, 3, 6]


function printNumbers() {
    let numbers = [2, 3, 6]
    numbers[0] = 34
}

printNumbers()  //cambia [34, 3, 6]

/*********************************************************/

//FUNCIONES PURA

//Pure Functions
//Mismo input, siempre regresa el mismo output
//Sin efectos coratelares(side effects)
//Evitan compartir estado(no shared stat)

//No se debe acceder a datos fuera declarados fuera de ellas
//Solo se puede funcionar al alcance local


function add(a, b) {
    return a + b;
}


//Dado un conjunto de entrada siempre, te genera el mismo tipo de salida

function sumar(num1, num2) {
    return num1 + num2
}

(sumar(3,4))

/***********************************************************/

//FUNCIONES DE MAS ALTO ORDEN

//Para realizar constructores de funciones

//Recibe como entrada funciones o te da como salida funciones

//Crear funciones basadas en otras funciones

//Higher-Order Functions
function crearCorreo(proveedorDeCorreo) {
    return function (nombreDeUsuario) {
        return `${nombreDeUsuario}@${proveedorDeCorreo}`
    }
}

let crearCorreoGmail = crearCorreo("gmail")
let crearCorreoOutlook = crearCorreo("outlook")

console.log(crearCorreoGmail("alex"))   //"alex@gmail"
console.log(crearCorreoOutlook("alex")) //"alex@outlook"

/*************************************************************/

//ESTILO FUNCIONAL
//Sin iteraciones = MapReduce
//No se vale hacer programacion imperativa como FOR

//Ejemplo programacion imperativa a NO UTILIZARzar
let numbers = [34, 56, 7]

function transformNumbers(numbers) {
    //Imperativa
    for(let i=0;  i<numbers.length; i++) {
        numbers[i] = Math.pow(numbers[i], 2)
    }
    return numbers
}

console.log(numbers) //Array [1156, 3136, 49]

/************************************************************/

//FORMA CORRECTA
//MAP

let numbers = [34, 56, 7]

let newNum = numbers.map(function(number) {
    return Math.pow(numbers, 2)
})

console.log(newNum) //Array [1156, 3136, 49]


//Forma anterior en AROW FUNCTION 
let numbers = [34, 56, 7]

let newNum = numbers.map(number => Math.pow(numbers, 2))

console.log(newNum) //Array [1156, 3136, 49]
//EL array original no cambia, no hubo mutaciones
console.log(numbers) //[34, 56, 7]

/************************************************************/

//REDUCE
//Dado un conjunto grande de elementos, literamente los reduzco a una sola cosa
let numbers = [34, 56, 7]

let reducer = function(accumulator, number) {
    return accumulator + number
}

console.log(numbers.reduce(reducer, 0))

//Esta es una forma de realizar lo anterior, 
//que no se debe utilizar en programacion funcional
//Ya que debemos evitar ejecutar interacciones

let resultado = 0

for(let i=0; i<numbers.length; i++) {
    resultado = resultado + numbers[i]
}

//EJemplo contar palabras repetidas
let frameworks = ['angular', 'vue', 'angular', 'react']

let resultados = {}

let reduciendo = function(acumula, contiene) {
    if(acumula[contiene]) {
        acumula[contiene] = acumula[contiene] + 1
    }else {
        acumula[contiene] = 1
    }
    return acumula
}

console.log(frameworks.reduce(reduciendo, resultados))  // { angular: 2, vue: 1, react: 1 }

//Volver todo a un solo arreglo
let arrays = [[3,5,6], ['a','b'],[5,9]]

let reducer = function(accummulator, array) {
    return accummulator.concat(array)
}

let arrayOneDimension = arrays.reduce(reducer, [])

console.log(arrayOneDimension)  //[ 3, 5, 6, 'a', 'b', 5, 9 ]


/************************************************************/

//FILTER siempre resultado TRUE o FALSE
//Solo obtener los numeros
let arrays = [[3,5,6], ['a','b'],[5,9]]

let reducer = function(accummulator, array) {
    return accummulator.concat(array)
}

let arrayOneDimension = arrays.reduce(reducer, [])

let numbers = arrayOneDimension.filter((item) => {
    return !isNaN(item)
})


console.log(numbers) //[ 3, 5, 6, 5, 9 ]

//Otra forma, mas compacta
let arrays = [[3,5,6], ['a','b'],[5,9]]

let reducer = function(accummulator, array) {
    return accummulator.concat(array)
}

let numbers = arrays
                .reduce(reducer, [])
                .filter((item) => !isNaN(item))


console.log(numbers) //[ 3, 5, 6, 5, 9 ]


//Filtar solo los correos de gmail
let emails = ['ale@gmail.com', 'jose@outlook.es', 'sono@gmail.com']

let emailsGmail = emails.filter(function(email) {
    return email.indexOf("gmail.com") > 0   
})

console.log(emailsGmail)    //[ 'ale@gmail.com', 'sono@gmail.com' ]


//Arows function
let emails = ['ale@gmail.com', 'jose@outlook.es', 'sono@gmail.com']

let emailsGmail = emails.filter(email => email.indexOf("gmail.com") > 0)

console.log(emailsGmail)    //[ 'ale@gmail.com', 'sono@gmail.com' ]