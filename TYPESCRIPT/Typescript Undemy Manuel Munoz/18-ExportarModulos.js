"use strict";
/*
Modulos que son y para que sirven?
Los modulos son pequeñas porciones de codigo, reutilizables ya no solo dentro del mismo archivo,
si no para poder usar en archivos externos

Cualquier Variable, Clase o Interfaz se puede exportar.

La exportacion se realiza para poder utilizar porciones de codigo de un archivo en otrs.

Asi podemos trabajar con modulos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrona = exports.mostrar = exports.Persona = exports.nombre = void 0;
//Ponemos export para que se pueda exportar en este caso la Variable
exports.nombre = 'Jose';
//Exportar Clase
var Persona = /** @class */ (function () {
    function Persona(nombre_) {
        this.nombre = nombre_;
    }
    return Persona;
}());
exports.Persona = Persona;
//Exportar Funcion
var mostrar = function () {
    console.log('Mostar');
};
exports.mostrar = mostrar;
var mostrona = function (dato) {
    console.log('Mostar');
};
exports.mostrona = mostrona;
