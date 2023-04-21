let casarse = 18

const compromiso = new Promise((resolve, reject) => {
    if(casarse == 18) {
        resolve("Ya cuenta con la mayoria de edad para comprometerse")
    } else {
        reject("Eres menor de edad para comprometerse")
    }
})

compromiso
    .then(res => {
        console.log('success:' + res)
    })
    .catch(error => {
        console.log('error:' + error)
    })


// operacion asincrona 

let x = 10

console.log('1. proceso iniciando...')

setTimeout(() => {
    x = x * 3 + 2
    console.log('2. proceso terminado...')
}, 2000)

console.log('3. el resultado es: ' + x)

// Convertir la operación asincrona en promesa

let y = 10

const prometo = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = y * 3 + 2
        console.log('2. proceso terminado')
        resolve(y)
    }, 2000)
})

console.log('1. proceso iniciando...')

prometo.then(rta => {
    console.log('3. el resultado es: ' + rta)
})


// TERCER EJEMPLO DE PROMESAS

let usuarios = [{
    id: 1,
    nombre: 'Marcos'
},
{
    id: 2,
    nombre: 'Lena'
}]

let telefonos = [{
    id: 1,
    telefono: 12345678
},
{
    id: 2,
    telefono: 87654321
}]

const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('El usuario existe!')
            resolve(obtenerTelefono(id))
        } else {
            reject('El usuario no existe')
        }
    })
}

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono existe!')
        } else {
            reject('El telefono no existe')
        }
    })
}

obtenerUsuario(2)
    .then(res =>{
        return res
    })
    .then(mensaje =>{
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })