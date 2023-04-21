let nombre = 'Nataly Porman'
let altura = 190

let concatenacion = nombre + " " + altura

let datos = document.getElementById("datos")

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`
if(altura >= 180){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>'
}else if(altura > 170 && altura <= 179){
    datos.innerHTML += '<h1>Eres una persona MEDIANA</h1>'
}else{
    datos.innerHTML += '<h1>Eres una persona BAJA</h1>'
}

for(let i=2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: " + i
}

function MuestraMiNombre(nombre, altura){
    let datos = document.getElementById('datosfuncion')
    datos.innerHTML = `
        <h1>Soy la funcion de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `
}

MuestraMiNombre('Arnol', 170)

function MostrarNombre(nombre, altura){
    let misDatos = `
        <h1>Soy la funcion de mostrar datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `
    return misDatos
}

function imprimir(){
    let datos = document.getElementById('datos3')
    datos.innerHTML = MostrarNombre('Paquiado', 150)
}

imprimir()

//Arrays
let nombres = ['vico', 'gabo', 'jose']
alert(nombres[0])

document.write('<h1>Listado de nombres</h1>')

for(let i=0; i<=nombres.length; i++){
    document.write(nombres[i] + '<br/>')
}

document.write('<h1>Listado de nombres recorrido ForEach</h1>')

nombres.forEach((name) => {
    document.write(name + '<br/>')
})

//OBJETOS LITERALES EN JS
let coche = {
    modelo: 'Renault',
    maxima: 150,
    antiguedad: 2019,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad)
    },
    propiedad1: "valor aleatorio"
}

document.write('<h1>' + coche.modelo + '</h1>')

coche.mostrarDatos()

console.log(coche)

//PROMESA VALOR DISPONIBLE AHORA, EN EL FUTURO O NUNCA
let saludar = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let saludo = "Hola buenas si te llego mi promesa!!!"
        //let = false
        if(saludo){
            resolve(saludo)
        }else{
            reject('No hay ninguna promesa o saludo disponible')
        }
    }, 2000)
})


saludar.then(resultado => {
    alert(resultado)
}).catch(err => {
    alert(err)
})