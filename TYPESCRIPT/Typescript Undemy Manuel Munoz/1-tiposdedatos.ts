let nombre:string = "Manuel"   //Valor modificable
nombre = "Jose"

const edad:number = 37 //No se puede modificar

// string
let cadena: string = "vico"
let nombres:string = 'Nata'
let apellidos:string = 'Muñoz'

console.log(nombres + apellidos)


// number
let numero: number = 12

numero = 15

console.log(numero)


// Boleano
// let declara la variable
// nombre de la variable
// : tipo de dato --boolean
// = asignacion

let si:boolean = true

let no:boolean = false

let verdadero_falso: boolean = true

// Any

let loquesea: any = "hola"
loquesea = 77

// Arrays
// Si cambio el string por any puedo ingresar cualquier dato
// Pero si especifico number u otro solo tienen que ser del mismo tipo

let numeros:number[] = [1, 2, 3, 4, 5]

let listnombres:string[] = ['Rigo', 'Lucy', 'Lalo']

let siono: boolean[] = [true, false, true]


// Otra forma de declarlo

let coleccionnumeros: Array<number> = [1, 2, 3, 4, 5]

let coleccionnombres: Array<string> = ['Rigo', 'Lucy', 'Lalo']

var lenguajes: Array<string> = ["php", "java", "python"]

// Otra forma de definir arrays
// Colección de datos
let years: number[] = [12, 15, 75]


let cosas: any[] = [12, "ole", true]


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes)


// tuple
let tupla: [number, string, boolean]

tupla = [23, 'Jose', true]

// Acceder a posicion
console.log(tupla[0])
