//Combinacion de una funcion y el alcance lexico que tiene esta
//El clouser se crea al momento de ejecutar una funcion

//La funcion puede acceder a constantes que se encuentran definidas dentro de esa funcion, y  tambien a variables que se encuentran definidas fuera de esa funcion, esa combinacion es la que se conoce como closures

//Con los closueres podemos realizar composicion de objetos o funciones para ir cambiando el comportamiento de las funciones

const x = 'Fluffy'

const f = () => {
    consty = 'kins'
    console.log(x, y)
}

f()

//Ejemplo
require('isomorphic-fetch')

const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`

    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}

//Escribiendo el codigo anterior, ahora podemos reutilizar de las siguiente forma closures

const Base = crudder('https://jsonplaceholder.typicode.com')
const Todos = Base('todos')
const Users = Base('users')

Todos.get().then(x => console.log(x[0]))
Users.get().then(x => console.log(x[0]))