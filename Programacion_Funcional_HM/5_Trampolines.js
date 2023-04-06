//Vamos a prendecirdel error Maximum call stack size exceeded, el cual se genera cuando llamamos la funcion una y otra vez, despues de superar el limite de javascript
//Utilizaremos la tecnica de trampoline, el cual nos permite ejecutar la funcion de manera recursiva una y otra vez eliminando el anterior limite

//Ejemplo error al llamar la funcion en funcion varias veces
const sume = (number, sum = 0) => {
    number === 0 ? sum : suma(number - 1, sum + number)
}

constr = suma(10000)
console.log(r) //Error: Maximum call stack size exceeded

//Ejemplo tecnica trampoline
const trampoline = fn => (...args) => { //recibe una funcion y retorna otra funcion. Junta en este caso todos los arreglos en un argumento
    let result = fn(...args)
    while (typeof result === 'function') { //llamara hasta que deje de ser una función
        result = result()
    }
    return result
}

//Aplicando tecnica trampoline al primer ejemplo que genera error
const suma = (number, sum = 0) => {
    number === 0 ? sum : () => suma(number - 1, sum + number) //colocamos una funcion para volver a ejecutar
}
const tsume = trampoline(suma)
const r = suma(1000000)
console.log(r) //50000500000