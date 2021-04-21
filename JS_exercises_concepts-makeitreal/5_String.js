//Obtener la longitud de string - lenght
const palabra = "Hola "
console.log(palabra.length)

//extraer parte del string
const cosita = "hola mundo"
//con este metodo indicar posicion inicial y final
console.log(cosita.substring(5, 7))

//pasar a mayúscula
const str = "Hola mundo a may"
console.log(str.toUpperCase())

//pasar a minúscula
const otra = "HOLA MUNDO A MIN"
console.log(otra.toLowerCase())

// strings no se pueden modificar
//ESTO NO SE PUEDE
str[5]="t"

//partir un string
const stringNumeros = "1-2-3-4-5-6-7"
console.log(stringNumeros.split("-"))
//lo convierte en un array, pero tener en cuenta que dentro del split se debe colocar de acuerdo al caracter que divide los caracteres en este caso - si fuera por una coma se debera colocar ,

//Recorrer cadenas (strings)
const stringCadena = "hola bebe"
console.log(stringCadena[5])  

//El espacio tambien es caracter

//Recorrer los caracteres
const cadenaPalabras = "Esta es una oracion"

for (let i=0; i < cadenaPalabras.length; i++) {
  console.log(cadenaPalabras[i])
}

//reemplazar partes de un string
let mensage = "hi word"
mensage = mensage.replace("hi", "welcome")
console.log(mensage)

//Otra forma de reemplazar
mensage = mensage.replace(/word/g, "mundo asdf")

//saber si un string comienza con otro string
const stringEvaluar = "hola mundo"
console.log(stringEvaluar.startsWith("Ho")) //false
console.log(stringEvaluar.endsWith("ndo")) //true

//verificar si incluye una subcadena
let stringVerificar = "hola a todos"
console.log(stringVerificar.includes("hola")) //true
