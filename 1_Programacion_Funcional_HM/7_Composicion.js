//Es el arte de ir construyendo funciones más grandes,en bases de funciones más pequeñas
//La gracia que tiene la composicion de funciones, es que estas son faciles de poder probar
//Y faciles de poder intuir estas que tiene que hacer

const _ = require('lodash')

const users = [
    { id: 1, nombre: 'Yamid', apellido: 'Ortiz' }
]

const getNombreCompleto = (_users) => {
    const primero = _users[0]
    const capitalizados = {
        nombre: _.upperFirst(primero.nombre),
        apellido: _.upperFirst(primero.apellido),
    }
    return `${capitalizados.nombre} ${capitalizados.apellido}`
}

const x = getNombreCompleto(users)
console.log(x); //Yamid Ortiz

//Ejemplo de escribir la funcion anterior por composicionconst _ = require('lodash')
const _ = require('lodash')

const compose = (...funciones) => x => funciones.reduceRight((y, f) => f(y), x)

const users = [
    { id: 1, nombre: 'Yamid', apellido: 'Ortiz' }
]

const head = x => x[0]
const capitalizaNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(primero.apellido),
})

const generaNombre = x => `${x.nombre} ${x.apellido}`

//point free
const getNombreCompleto = compose(generaNombre, capitalizaNombreYApellido, head)

const x = getNombreCompleto(users)
console.log(x); //Yamid Ortiz