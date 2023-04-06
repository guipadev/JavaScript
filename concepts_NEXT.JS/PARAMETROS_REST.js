function process(item1, item2, item3) {
    console.log(item1, item2, item3); //1 2 3
}

process(1, 2, 3) //1 2 3

//EJEMPLO APLICACIÓN PARAMETRO REST
function process(...values) { //Operador esparancimiento
    values.forEach(v => {
        console.log(v); //1 2 3 4 5 6 7 8
    });
}
//Puedo colocar varios parametros y van a ser aceptados
process(1, 2, 3, 4, 5, 6, 7, 8) //1 2 3 4 5 6 7 8