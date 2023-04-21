var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}

console.log(`Yo tengo un ${mazda.marca} modelo ${mazda.nombre} con un motor de ${mazda.motor} de color ${mazda.color}`)

//EJEMPLO COMO CAMBIAR A MAYUSCULA LA MARCA DEL OBJETO MAZDA

function objetoMayuscula(marquilla) {
    //console.log(marquilla.toUpperCase()) tambien se podria directo sin guardar en variable
    var marquilla = marquilla.toUpperCase()
    console.log(marquilla)
}

objetoMayuscula(mazda.marca) //MAZDA

//OTRA FORMA DE LA FUNCION
function objetoMay(marquilla) {
    console.log(marquilla.toUpperCase())
}

objetoMay(mazda.marca) //MAZDA

//OTRA FORMA DE LA FUNCION RECIBIENDO TODO EL OBJETO
var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}

console.log(`Yo tengo un ${mazda.marca} modelo ${mazda.nombre} con un motor de ${mazda.motor} de color ${mazda.color}`)

//EJEMPLO COMO CAMBIAR A MAYUSCULA LA MARCA DEL OBJETO MAZDA

var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}

function objetoMayuscula(marquilla) {
    //console.log(marquilla.toUpperCase()) tambien se podria directo sin guardar en variable
    var marquillaC = marquilla.toUpperCase()
    console.log(marquillaC)
}

objetoMayuscula(mazda.marca) //MAZDA

//OTRA FORMA DE LA FUNCION, TRAE TODO EL OBJETO
var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}


function objetoMayus(automovil) {
    var marca = automovil.marca.toUpperCase()
    console.log(marca)
}

objetoMayus(mazda) //MAZDA

//OTRA FORMA DE LA FUNCION, TRAE SOLO EL ELEMENTO QUE NECITAMOS DEL OBJETO
var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}


function objetoMayus({ marca }) {
    var marca = marca.toUpperCase()
    console.log(marca)
}

objetoMayus(mazda) //MAZDA

//OTRA FORMA DE LA FUNCION, TRAE SOLO EL ELEMENTO QUE NECITAMOS DEL OBJETO, EN ESTE CASO COLOR
var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}


function objetoMayus({ color }) {
    var color = color.toUpperCase()
    console.log(color)
}

objetoMayus(mazda) //BLANCO

//OBJETOS LITERALES, crea nuevo objeto
objetoMayus({ color: "verde" }) //VERDE

//DESTRUCTURACION DE OBJETOS
var mazda = {
    marca: "mazda",
    nombre: "323",
    motor: 1300,
    color: "blanco"
}

function objetoMayusculas(carro) {
    var { color } = carro
    console.log(color.toUpperCase())
}

objetoMayusculas(mazda) //BLANCO