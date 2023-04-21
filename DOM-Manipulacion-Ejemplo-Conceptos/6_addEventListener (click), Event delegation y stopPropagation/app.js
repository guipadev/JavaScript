//Forma de al ser click en los botones aumente o reste el valor
/*
const btnAumentar = document.querySelector('.btn-info')
const btnDisminuir = document.querySelector('.btn-danger')
const span = document.getElementById('span')
let contador = 0


btnAumentar.addEventListener('click', () => {
    console.log("aumentando")
    contador ++
    span.textContent = contador
})

btnDisminuir.addEventListener('click', () => {
    console.log("restando")
    contador --
    span.textContent = contador
})
*/

// Realizar el proceso pero con Event Delegation
const container = document.querySelector('.container')
const span = document.getElementById('span')
let contador = 0

container.addEventListener('click', e => {
    //console.log(e.target)
    //(e.target.classList.contains('btn-info'))
    if(e.target.classList.contains('btn-info')) {
        contador++
        span.textContent = contador
    }
    if(e.target.classList.contains('btn-danger')) {
        contador--
        span.textContent = contador
    }
    //stopPropagation
    e.stopPropagation() //no abarcaria más de los botones el evento
})

//stopPropagation
//Si no se colocara el stopPropagation entonces, hasta cuando se realiza 
//el aumento y disminucion con los botones van a ser tenidos en cuenta
document.body.addEventListener('click', () => {
    console.log('diste click') //Al dar click en cualquier parte del body contara
})

// Otro ejemplo de stopPropagation
const btn = document.querySelector('.btn-dark')
const bgSuccess = document.querySelector('.bg-success')

btn.addEventListener('click', (e) => {
    console.log('click boton dark')
    e.stopPropagation() //Al utilizr este solo detectara el click en el boton dark
})

btn.addEventListener('click', () => {
    console.log('click boton bgSuccess')
})

