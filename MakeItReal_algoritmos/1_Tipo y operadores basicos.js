/*
TIPOS Y OPERADORES BASICOS
Números
Operadores aritméticos (suma, resta, multiplicación, división, módulo, exponentes), precedencia.

Cadenas de texto (strings)
Definir, imprimir, concatenar

Booleanos
Expresiones booleanas, && (y), || (ó) y ! (negación).
*/  

//BOOLEANOS

  console.log(true)
  console.log(false)

  //expresiones booleanas
  console.log(5 > 3)
  console.log(6 < 1)
  console.log(5 == 5) //igualdad
  console.log(5 != 5) //desigualdad
  console.log(5 <= 5)
  console.log(5 >= 5)

  console.log(!true)  //negación  
  console.log(!false)

  console.log()

  //& (Y) y el || (Ó)
  console.log(5 > 3 && 7 == 8)    //false
  console.log(5 > 3 || 7 == 8)    //true

//NUMEROS

//suma y resta
console.log(5 + 5 - 3)

//multiplicacion y división
console.log(5 * 8 / 10)
console.log(10 / 3)

//exponentes
console.log(2 ** 3)

//módulo - el residuo de la división
console.log(31 % 3)

console.log(((5 + 30) / 8) * (4 ** 2))

//EJEMPLO 1
let edad = prompt("Cual es tu edad")
edad = parseInt(edad)
console.log(edad + 10)

//EJEMPLO STRING

//cadenas de texto
console.log("Él dijo: 'Hola Mundo'")
console.log('Él dijo: \'Hola Mundo\'')


//contactenar cadenas
console.log("Hola " + "Mundo 1 + 1")

//backtis (`)-plantillas
console.log(`Hola mundo: ${1 + 1}`)

//números y strings
console.log("Hola" + "5" + "4")

//EJEMPLO VARIABLES

var edad = 30
console.log(edad)

//EMAScript 6 y +
//let nombre = "Pedro"
const casado = false

//redefinicion de variables
edad = 40
console.log(edad)

casado = true //Error, no se puede redefinir const


const nombre = prompt ("¿Cuál es tu nombre?")
console.log(nombre)

let edades = prompt ("Cual es tu edad")
edades = parseInt(edades)
console.log(edades + 10)


