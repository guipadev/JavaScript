//DECLARACION CORRECTA FUNCION
var nombre = "paola"

function nuevoNombre(persona) {
    return persona += " hernandez"
}

var daniel = {
    nombre: "Daniel",
    edad: 18,
    dinero: 500
}

//OBJETOS PASADO COMO REFERENCIA
//Hay modificaion global del Objeto
function aumentaDinero(persona) {
    persona.dinero += 200
}

//OBJETO SE PASA POR VALOR
//No hay modificacion global, solo local
function aumentarDinero(dinero) {
    dinero += 150
}

//RETONAR NUEVO OBJETO
//No habra modificacion en el elemento del objeto
//Pero se creara un nuevo elemento en el objeto

var daniel = {
    nombre: "Daniel",
    edad: 18,
    dinero: 500
}

function aumentarDinero(persona) {
    return {
        ...persona, //es como si copia los datos anteriores del objeto, nombre, edad, dinero crear nuevo objeto
        nombre: "nuevoDaniel",
        dinero: persona.dinero + 600,
        color_ojos: "verde",
        bano: true
    }
}

var danielAdinerado = aumentarDinero(daniel)

daniel // {nombre: "Daniel", edad: 18, dinero: 500}
danielAdinerado // {nombre: "nuevoDaniel", edad: 18, dinero: 1100, color_ojos: "verde", bano: true}


//COMPARACION DE OBJETOS
var rigo = {
    nombre: "Rigo",
    edad: 18,
    dinero: 500
}

var yamid = {
    nombre: "Rigo",
    edad: 18,
    dinero: 500
}

//LOS OBJETOS ESTAN EN DIFERENTES ESPACIOS DE LA MEMORIA

rigo == yamid //false

//LOS OBJETOS AHORA ESTAN EN EL MISMO ESPACIO DE LA MEMORIA

var rigo = yamid //true

//COMO AHORA ESTAN EN LA MISMA REFERNCIA DE MEMORIA, AL REALIZAR UN CAMBIO AFECTA A LOS DOS OBJETOS

rigo.dinero = 6000

rigo //{nombre: "Rigo", edad: 18, dinero: 6000}
yamid //{nombre: "Rigo", edad: 18, dinero: 6000}