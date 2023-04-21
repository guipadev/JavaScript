var hotel_uno = {
    nombre: "Buenaventura",
    bano: true,
    piscina: true,
    bar: true,
    amoblado: false,
    sauna: false,
    sala: true,
    aire_acondicionado: false,
    ventilador: true,
    mascota: true
}

function imprimeCaracteristicasHotel(hotel) {
    if (hotel.bano) { //elemento en el objeto ya esta en true
        var estado = true
        console.log(`El hotel ${hotel.nombre} posee baño`)
        if (estado) {
            console.log(`El baño esta limpio`)
        } else {
            console.log(`El baño esta por limpiar`)
        }
    }
    if (hotel.piscina) {
        console.log(`El hotel ${hotel.nombre} posee piscina`)
    }
    if (hotel.bar) {
        console.log(`El hotel ${hotel.nombre} posee bar`)
    }
    if (hotel.amoblado) {
        console.log(`El hotel ${hotel.nombre} posee amoblado`)
    } else {
        console.log(`El hotel ${hotel.nombre} no posee habitacions amobladas`)
    }
    if (hotel.sala) {
        console.log(`El hotel ${hotel.nombre} posee sala`)
    }
    if (hotel.aire_acondicionado === true) {
        console.log(`El hotel ${hotel.nombre} posee AA`)
    }
    if (hotel.ventilador === true) {
        console.log(`El hotel ${hotel.nombre} posee ventilador`)
    }
    if (hotel.mascota === true) {
        console.log(`El hotel ${hotel.nombre} posee mascota`)
    }
}

imprimeCaracteristicasHotel(hotel_uno)

//DESENGLOSAR FUNCIONES Y RETORNEN UN VALOR
var max = {
    nombre: "Max",
    edad: 5,
    color: "blanco"
}

var hope = {
    nombre: "Hopito",
    edad: 6,
    color: "cafe"
}
const MAYORIA_EDAD_PERRITOS = 5

function imprimirPerroMasViejo(perro) {
    if (perro.edad > MAYORIA_EDAD_PERRITOS) {
        console.log(`mi perrito ${perro.nombre} es el mas viejito`)
    } else {
        console.log(`mi perrito ${perro.nombre} es joven aun`)
    }
}

imprimirPerroMasViejo(max)
imprimirPerroMasViejo(hope)

//MEJORANDO EL EJEMPLO DE DESENGLOSAR FUNCIONES Y RETORNEN UN VALOR
var max = {
    nombre: "Max",
    edad: 5,
    color: "blanco"
}

var hope = {
    nombre: "Hopito",
    edad: 6,
    color: "cafe"
}
const MAYORIA_EDAD_PERRITOS = 5

//FUNCION DETERMINAR EDAD
function mayoriaEdadPerritos(perro) {
    return perro.edad > MAYORIA_EDAD_PERRITOS
}

function imprimirPerroMasViejo(perro) {
    if (mayoriaEdadPerritos(perro)) {
        console.log(`mi perrito ${perro.nombre} es el mas viejito`)
    } else {
        console.log(`mi perrito ${perro.nombre} es joven aun`)
    }
}

imprimirPerroMasViejo(max)
imprimirPerroMasViejo(hope)


//EJERCICIO REALIZAR LO ANTERIOR PERO CON PERSONAS, PARA DETERMINAR SI SON MAYORES DE EDAD
//SI ES MENOR DE EDAD INFORMAR CUANTOS AÑOS LE FALTAN PARA SER MAYOR

var rigo = {
    nombre: "Rigo",
    edad: 60,
    estatura: 1.70
}

var lorenny = {
    nombre: "Lorenny",
    edad: 16,
    estatura: 1.65
}

const MAYORIA_DE_EDAD = 18

function mayoriaDeEdad(persona) {
    return persona.edad > MAYORIA_DE_EDAD
}

function ingresoDiscote(persona) {
    if (mayoriaDeEdad(persona)) {
        console.log(`Hola ${persona.nombre} puede ingresar a la Discoteca`)
    } else {
        console.log(`Lo sentirmos ${persona.nombre} no tienes la mayoria de edad, debes esperar ${MAYORIA_DE_EDAD - persona.edad} años todavia`)
    }
}

ingresoDiscote(rigo)
ingresoDiscote(lorenny)