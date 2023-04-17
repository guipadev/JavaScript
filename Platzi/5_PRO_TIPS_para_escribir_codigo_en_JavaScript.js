// ---------------- 1. Encadenamiento opcional ----------------

const person = {
    name: 'Alex',
    pet: {
        type: 'cat',
        // name: 'Oliver'
    }
}

console.log(person.pet?.name) // ? opcionalmente puede no tener los datos

// ---------------- 2. Operador ternario ----------------

let number = 10

let result = (number > 10) ? `Es mayor que ${number}` : "No es mayor"

console.log(result)

// ---------------- 3. Destructuración de objetos ----------------

const people = {
    name: 'Alex',
    lastName: 'Camacho',
    age: '28',
    email: 'mail@gmail.com'
}

//  En vez de asignar dato especifico
// let name = people.name

// Destructuramos
let {name, lastName, age, email} = people

// Mostramos los datos deseados
console.log(name, lastName)


// ---------------- 4. Utiliza const para los arreglos ----------------

const todoList = ["Write", "Read", "Eat"]

todoList.push("Sleep")

console.log(todoList)

// ---------------- 5. Uso template literal ----------------
let names = 'Alex'
let activity = 'playing'
let time = 'today'

// Tradicional
const example = name + ' is ' + activity + ' with her cats ' + time

console.log(example)

// Template literals
const betterExample = `${name} is ${activity} with her cats ${time}`

console.log(betterExample)