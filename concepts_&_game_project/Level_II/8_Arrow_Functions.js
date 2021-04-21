//forma minimalista de realizar las funciones
//una funcion constructora no puede realizarse con arrow function

//DETERMINAR SI PERSONA ES MAYOR DE EDAD

const MAYOR_EDAD = 18

var david = {
    nombre: "David",
    edad: 26,
    peso: 78
}

var carlos = {
    nombre: "Carlos",
    edad: 16,
    peso: 60
}
/*
//FUNCION NORMAL
function mayoriaEdad(persona){
    return persona.edad > MAYOR_EDAD
}

//FUNCION ANONIMA
var mayoriaEdad = function(persona){
    return persona.edad > MAYOR_EDAD
}

//FUNCION ARROW FUNCTIONS PARA ACORTAR CODIGO

//PRIMER OPCION
const mayoriaEdad = (persona) => {
    return persona.edad > MAYOR_EDAD
}

//SEGUNDA OPCION
const mayoriaEdad = persona => {
    return persona.edad > MAYOR_EDAD
}

//TERCER OPCION
const mayoriaEdad = persona => {
    persona.edad > MAYOR_EDAD
}

//CUARTA OPCION
const mayoriaEdad = persona => persona.edad > MAYOR_EDAD
*/
//QUINTA FORMA DESTRUCTURACION DE OBJETOS
const mayoriaEdad = ({edad}) => edad > MAYOR_EDAD


//FUNCION IMPRIMIR RESULTADO
function imprimirMayorEdad(persona){
    if(mayoriaEdad(persona)){
        console.log(`Oye ${persona.nombre} eres mayor`)
    }else{
        console.log(`Oye ${persona.nombre} eres menor`)
    }
}

function acceso(persona){
    if(!mayoriaEdad(persona)){
        console.log(`Lo sentimos eres menor de edad`)
    }
    else{
        console.log(`Puedes entrar mayor`)
    }
}

imprimirMayorEdad(david)
imprimirMayorEdad(carlos)

acceso(david)
acceso(carlos)