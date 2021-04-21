var nombre //Declarada
nombre = "David" //Inicializada

console.log("Hola señor " + nombre + " es un gusto")

var apellido = "Torres"
var edada = 26
var ojos = "marrones"
var camisa = true

//OTRA FORMA DECLARAR VARIABLES

var apellido = "Torres",
    edad = 26,
    ojos = "marrones",
    camisa = true

//TIPADO DEBIL
//Podemos cambiar el valor de la variable

nombre = "celular"

console.log("Hola señor " + nombre + " es un gusto")
    //Hola señor celular es un gusto


nombre = 1234

console.log("Hola señor " + nombre + " es un gusto")
    //Hola señor 1234 es un gusto


//STRING
var saludo = "Hola que mas pues"
var saludo = "123456"

console.log(saludo)

//CAMBIAR TEXTO A MINUSCULA
var persona = "Yamid Ortiz Muñoz"
console.log(persona)

var minuscula = persona.toLowerCase()
console.log(minuscula)

var mayuscula = persona.toUpperCase()
console.log(mayuscula)

//DAR A CONOCER LA POSICION DE LA LETRA
var persona2 = "Nataly Lozada Rojas"
var elemento = persona2.charAt(5) //MEJOR CON INDEXOF
console.log(elemento)

//CUANTOS ELEMENTOS HAY EN EL ARRAY
console.log(persona2.length)

//MOSTRAR LA ULTIMA PALABRA DEL ARRAY, SIN IMPORTAR SI SE INGRESA MAS DATOS
var nombres = "Rigoberto Ortiz Parr"
ultimoElemento = nombres.charAt(nombres.length - 1)
console.log(ultimoElemento)