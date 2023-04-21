/*
FUNCIONES, dos formas de declararlas:

function salud(){
    return
}

//FUNCION ANONIMA

var saludo = function(){
    return
}

*/

//FUNCION SIN PARAMETROS

var fruta = "manzana",
    cantidad = 12,
    color = "rojo"

function descripcionFruta() {
    console.log(`la ${fruta} es de color ${color} y hay disponible ${cantidad}`)
}

descripcionFruta()

//FUNCION CON PARAMETROS

function descripcionFrutas(fr, clr, ct) {
    console.log(`la ${fr} es de color ${clr} y hay disponible ${ct}`)
}

descripcionFrutas("Pera", "Verde", 15)
descripcionFrutas(fruta, color, cantidad)
descripcionFrutas("Piña", "Amarilla", 5)

//EJERCICIO
//Funcion que reciba nombre, apellido y edad

var miNombre = "Nata",
    miApellido = "Loza",
    miEdad = 30

function saludoPrueba(nombre, apellido, edad) {
    console.log(`Hola Sr(a) ${nombre} de ${apellido} con ${edad} años de vida`)
}

saludoPrueba(miNombre, miApellido, miEdad)


//ALCANCE DE UNA FUNCION
var animal = 'gato'

//NO RECOMENDABLE ya que afecta la variable global, en este caso animal, luego seguira en mayuscula
function animalMayuscula() {
    return animal = animal.toLocaleUpperCase()
}
console.log(animalMayuscula())

//POR LO CUAL ES RECOMEDABLE UTILIZAR PARAMETROS
//Para evitar esto y solo se afecta local la variable especia
var especieAnimal = "Tigre"

function animalMay(especie) {
    return especie = especie.toLocaleUpperCase()
}
console.log(animalMay(especieAnimal))