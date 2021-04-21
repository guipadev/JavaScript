let david = {
    nombre: "David",
    apellido: "Torres",
    edad: 27,
    altura: 1.80,
    peso: 80
}

let caroll = {
    nombre: "Caroll",
    apellido: "Gomez",
    edad: 35,
    altura: 1.70,
    peso: 65
}

let juan = {
    nombre: "Juan",
    apellido: "Ortega",
    edad: 16,
    altura: 1.65,
    peso: 71
}

let paola = {
    nombre: "Paola",
    apellido: "Hernandez",
    edad: 26,
    altura: 1.78,
    peso: 68
}

let miguel = {
    nombre: "Miguel",
    apellido: "Jimenez",
    edad: 17,
    altura: 1.76,
    peso: 98
}

//Array
let personas = [david, caroll, juan, miguel, paola]

/*
personas[3] //Acesso a miguel           
personas[3].peso //Acesso a peso miguel      
personas[3].apellido //Acesso apellido miguel    
personas[3].altura //Acesso altura miguel      
personas[3]['peso'] //OTRA FORMA DE ACCEDER
*/

//Recorrer Array
for (let i = 0; i < personas.length; i++) {
    let persona = personas[i]
    console.log(`Hola ${persona.nombre} ${persona.apellido} tu tienes ${persona.edad} años`)
}

//FILTRADO DE ELEMENTOS, CON METODO FILTER
//DETERMINAR CUALES PERSONAS SON MAYORES DE EDAD

let mayoresDeEdad = personas.filter(function(persona) {
    return persona.edad > 18
})

let menoresDeEdad = personas.filter(function(persona) {
    return persona.edad <= 18
})

mayoresDeEdad //Apareceran los mayores
menoresDeEdad //Apareceran los mayores


//OTRA FORMA DE FILTRAR CON UNA FUNCION
const MAYOR = (persona) => persona.edad > 18

let mayorEdad = personas.filter(MAYOR)

mayoreEdad //Apareceran los mayores

//OTRA FORMA
let mayorEdadOtra = personas.filter((persona) => persona.edad > 18)

mayorEdadOtra

//OTRA FORMA DESTRECTURAR
let mayorEdadOtraMas = personas.filter(({ edad }) => edad > 18)

mayorEdadOtraMas

//EJERCICIO REALIZAR MENOR DE EDAD CON TODAS LAS FORMAS
const MENOR = (persona) => persona.edad < 18
let menorEdad = personas.filter(MENOR)

//OTRA
let menorEdadOtra = personas.filter((persona) => persona.edad < 18)

//OTRA
let menorEdadOtraMas = personas.filter(({ edad }) => edad < 18)


//EJERCICIO CONOCER LA SUMATORIA DE LA EDAD DE TODOS
let total_edades = 0

for (let i = 0; i < personas.length; i++) {
    let persona = personas[i]
        //total_edades = total_edades + persona.edad
    total_edades += persona.edad
}
console.log(`El total de las edades es ${total_edades} años`)


//OTRA FORMA DE CONOCER LAS EDADES ES CON REDUCE
const SUMATORIA = (acumulador, persona) => acumulador + persona.edad //En el parametro acumulador es donde se guardan datos

var total_edades = personas.reduce(sumatoria, 0) //dos parametros el 1er el RECORRIDO y 2do desde donde EMPIEZA el contador

console.log(`El total edades es: ${total_edades} años`)


//MAP RECORRE TODOS LOS ELEMENTOS, PERO MODIFICA SUS VALORES
//VAMOS A MODIFICAR DE METROS A CENTIMETROS LA ALTURA

const CONVERTIR_CENTIMETROS = (persona) => {
    return {
        ...persona, //Nos cree un nuevo objeto y no modifique el array
        altura: persona.altura * 100
    }
}

//SE puede mejorar

const CONVERTIR_CENTIMETROS = (persona) => ({
    ...persona, //Nos cree un nuevo objeto y no modifique el array
    altura: persona.altura * 100
})

var personaAlturaCms = personas.map(CONVERTIR_CENTIMETROS)

personaAlturaCms //Nuevo array convertido