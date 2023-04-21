//USAR el Ternary Operator

function devolverSaludo(nombre, esDeDia) {
    var saludo;

    if (esDeDia){
        saludo = "Buenos Dias"
    } else{
        saludo = "Buenas Noches"
    }
    return saludo + ", " + nombre
}

console.log(devolverSaludo('Norman', true)) // Buenos Dias, Norman

//USO OPERADOR TERNARIO

function saludoTernario(nombre, esDeDia) {
    const saludo = esDeDia ? "Buenos Dias" : "Buenas Noches"
    return `${saludo}, ${nombre}`
}

console.log(saludoTernario('Norman', true)) // Buenos Dias, Norman

//NO USAR TERNARIO PARA CONDICIONES SIMPLES
function  esFalso(numero) {
    return (numero > 0) //No hay necesidad de agregar lo demas
}

console.log(esFalso(-10)) // false

//USO VARIOS OPERADORES TERNARIOS ANIDADOS
function example() {
    if (condition1) { return value1 }
    else if (condition2){ return value2 }
    else if (condition3) { return value3 }
    else { return value4 }
}

//PERO NO UTILIZAR ES MÁS DIFICIL DE ENTENDER
function exampleTernario() {
    return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4
}