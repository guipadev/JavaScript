//EcmaScript5
//contatenacion

let nombre = "David"
let apellido = "Torres"
let edad = 27

console.log("Hola soy " + nombre + " " + apellido + " tengo " + edad + " años")

//EcmaScript6
//template stringo templates literals

let nombre = "David"
let apellido = "Torres"
let edad = 27

console.log(`Hola soy ${nombre} ${apellido} tengo ${edad} años`)

//EcmaScript5
//contatenacion

function parametros(nombre, apellido, edad) {
    var nombre = nombre || "David"
    var nombre = apellido || "Torres"
    var nombre = edad || 27
    console.log(nombre, apellido, edad)
}
parametros() //David Torres 27
parametros("Juan", "Gomez, 65") //Juan  Gomez 65

//EcmaScript6
//funciones con parametros por defecto

function parametros(nombre = "David", apellido = "Torres", edad = 27) {
    var nombre = nombre
    var nombre = apellido
    var nombre = edad
    console.log(nombre, apellido, edad)
}
parametros() //David Torres 27
parametros("Juan", "Gomez, 65") //Juan  Gomez 65

//EcmaScript5
//multilineas
let frase1 = "Este mundo lleno de programadores\n"
let frase2 = "Que alegria es ivir en este mundo\n"
let frase3 = "Recuerden que lo mas valioso es el tiempo"

console.log(frase1, frase2, frase3)

//EcmaScript6
//multilineas
console.log(`${frase1}, 
    ${frase2}, 
    ${frase3}`)

//Ecma5 Objetos
let articulo = {
    nombre: "Mesa",
    color: "Rojo",
    peso: 10,
    precio: 50
}
console.log(articulo.nombre, articulo.color, articulo.peso, articulo.precio)

//Ecma6 destructuracion de objetos
let { nombre, color, peso, precio } = articulo
console.log(nombre, color, peso, precio)

//spread operator
let gama_alta = ["BMW", "Ferrari", "Alfa Roma", "Ford"]
let gama_media = ["Renault", "Mazda", "Toyota", "Fiat"]

//Unir los dos string y en medio 2 marcas de moto
let automoviles = ["BMW", "Ferrari", "Alfa Roma", "Ford", "Suzuki", "Yamaha", "Renault", "Mazda", "Toyota", "Fiat"]
console.log(automoviles)

//Uso de spread operator
let automoviles_spread = [...gama_alta, "Suzuki", "Yamaha", ...gama_media]


//asignacion de objetos
let nombre = "David"
let apellido = "Torres"
let edad = 27

let persona = { nombre: nombre, apellido: apellido, edad: edad }
console.log(persona)

//asignacion de objetos Ecma6
let persona_es6 = { nombre, apellido, edad }
console.log(persona_es6)

//var, let y const
//var se va imprimir console.log en cualquier parte y podria cambiar valor porque es global
//no recomendable utilizar
{
    var persona = "Soy david en global"
    console.log(persona) {
        console.log(persona)
    }
}
console.log(persona)

//let
//funciona solo en el ambiente donde es invocada
{
    let persona = "Soy chucho"
    console.log(persona)
}
console.log(persona) //saldria error porque let funciona solo en el bloque

//const
//no se puede alterar el valor nunca
const numero = 123
console.log(numero)

numero = 987
console.log(numero) //error no se puede sobreescribir