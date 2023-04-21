let compras = "🍍"

function hacerLaCompra(callback) {
    setTimeout(function() {
        compras += "🫐"
        callback()
    }, 2000) 
}

// A los 2000 milisegundos aparecera agregado el producto
hacerLaCompra(function(){
    console.log(compras)

    hacerLaCompra(function(){
        console.log(compras)
    
        hacerLaCompra(function(){
            console.log(compras)
        
            hacerLaCompra(function(){
                console.log(compras)
            })
        })
    })
})


// Cambiando el anterior ejemplo a promesas en vez de callback
let compra = "🍍"

function hacerCompra() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            compra += "🫐"
            console.log(compra)
            resolve()
        }, 2000)
    })
}

hacerCompra()
    .then(() => hacerCompra())
    .then(() => hacerCompra())
    .then(() => hacerCompra())

// CREACIÓN DE PROMESA: Pendiente, satisfecha, rechazada
//Resultado = rechazo(reject) ó satisfecho(resolve)

let desarrollo = new Promise(function(resolve, reject) {
    // Acciones necesarias para conseguir un resultado
    // satisfactorio
    setTimeout(() => {
        const proyecto = "🤖"
        let aleatorio = Math.random()
        if (aleatorio < 0.4) {
            resolve(proyecto)
        } else {
            reject("⚠️ no entregado a tiempo")
        }
    }, 1500)
})

// Obteniendo la promesa, then reaccion con resolve por ende catch con reject

desarrollo
    .then((proyecto) => console.log(proyecto))
    .catch((error) => console.log(error))
    .finally(() => console.log("Promesa finalizada")) // No acepta ningun parametro, pero ayuda por ejemplo despues de una operacion cerrar el archivo, 
                     // Cerrar la conexión o si tiene un espiner de cargando, cuando se cumpla cerrarlo


// OTRO EJEMPLO DE PROMESA
function temporizador(tiempo) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tiempo)
    })
}

temporizador(2000)
    .then(() => console.log("FIN"))