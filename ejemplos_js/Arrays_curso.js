//declarar array
let numbers = [1, 2, 4, 5, 6]

//length conocer longitud de array
console.log(numbers.length)

//Acceder a un elemento del array
console.log(numbers[0]) //Especificar posición

//Acceder elementos pero conteo negativo, para trabajar con los últimos elementos
console.log(numbers.at(-2)) // 5

//Acceder al último elemento 
console.log(numbers.length - 1)

//Recorrer array ascendente
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

//Recorrer array decendente
for(let i=numbers.length - 1; i >=0; i--){
    console.log(numbers[i])
}

//Funcion recorrer
function show(arr) {
    for(let i=0; i<numbers.length; i++){
        console.log(arr[i])
    }
}

//Ejecutando funcion recorrer
show(numbers)


//MUTABILIDAD modifica estado o valores
let beers = ["heniken", "corona", "poker", "aguila", "club colombia"]

//Agregar elemento al final (mutabilidad)
beers.push("costeña")

//Agregar elemento al principio (mutabilidad)
beers.unshift("pilsen")

//Agregar elemento en cierta posición (mutabilidad)
beers.splice(2, 0, "aguila ligth")

//Agregar y eliminar elemento en cierta posición (mutabilidad)
beers.splice(2, 1, "babara")

//Eliminar y regresar el último elemento (mutabilidad)
let b = beers.pop()
console.log(b)

//Eliminar y regresar el primer elemento (mutabilidad)
let c = beers.shift()
console.log(c)

//Cambiar valores del array por la palabra pato
beers.fill("pato", 1,3)


//INMUTABLE no realizar ninguna modificación
let cervezas = ["heniken", "corona", "poker", "aguila", "club colombia"]
let vinos = ["moscate", "casillero del diablo", "gato negro", "manzanilla"]

const alcohol = cervezas.concat(vinos)

// Nuevo elemento sin modificar los originales, pero contiene los datos de los dos elementos anteriores
console.log(alcohol)

//Buscar posicion de un elemento
console.log(cervezas.indexOf("corona")) // 1

//Obtener nuevo array, ciertos elementos
const cervezas2 = cervezas.slice(1, 4)  //  [ "corona", "poker", "aguila" ]


//USO OPERADOR SPREAD
const numeros = [1,2,3,4]

function suma(a, b, c) {
    return a + b + c
}

console.log(suma(...numeros)) // 6

//Otro ejemplo de uso de SPREAD
const animalSelva = ["Leon", "Elefante", "Mico"]
const animalBosque = ["Oso", "Lobo", "Zorro"]

const animales = [...animalBosque, 1, 2, ...animalSelva] // Une todos sin modificiar original


// ARRAYS DE OBJETOS
const chelas = [
    {
        name: "Corona",
        price: 4000,
        alcohol: 50,
    },
    {
        name: "Heiniken",
        price: 4000,
        alcohol: 50,
    },
    {
        name: "Stella Artois",
        price: 4000,
        alcohol: 50,
    },
    {
        name: "Budweiser",
        price: 4000,
        alcohol: 50,
    },    
]

//FUNCION DE PRIMER ORDEN
//Esta guardada en una variable
//Se puede enviar por parametro
let fn = function() {
    console.log("hello")
}

fn()

//FUNCION ORDEN SUPERIOR
//Recibe otras funciones como parametro
function some(f) {
    console.log("algo antes")
    f()
    console.log("algo despues")
}

some(fn)

//ARROW FUNCTION
let flecha = () => { 
    console.log("Saludo 🤟")
    console.log("Compadre 🌟")
}

//Solo tienes una linea
let flecha = () => console.log("Saludo 🤟")

//Con un solo parametro, puede ir sin parentisis
let flechaName = name => console.log(`Saludo 🤟 ${name}`)

flechaName('Pablo')

//Con más de un parametro
let nameApe = (name, lastName) => console.log(`Saludo 🤟 ${name} ${lastName}`)

nameApe('Pablo', 'jaramillo')

//ITERAR RECORRER CON FOR...OF
//String, cadenas, maps y los sets
for(let e of arr) {
    console.log(e)
}














