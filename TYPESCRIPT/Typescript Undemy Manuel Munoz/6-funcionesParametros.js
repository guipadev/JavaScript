"use strict";
// Parametros Opcionales al poner ?
var Opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("Se llama " + nombre + " su apellido " + apellido + " y su edad " + edad);
    }
    console.log("Se llama " + nombre + " su apellido " + apellido);
};
Opcionales('Manuel', 'Muñoz');
Opcionales('Manuel', 'Muñoz', 37);
// Parametros por defecto
var mostrarInfo = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 18; }
    return console.log("Se llama " + nombre + " su apellido " + apellido + " y su edad " + edad + " a\u00F1os");
};
console.log(mostrarInfo('Rigo', 'Parra')); //Mostrar edad por defecto
console.log(mostrarInfo('Luna', 'Perez', 50)); //Mostrar la edad puesta
// Parametros REST
var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y contiene " + frutas);
};
//Podemos pasar los parametros que queramos, pero el dato especifico parametrizado
cartapostres('napoleon', 'fresa', 'vainilla'); //mostrar resultado
