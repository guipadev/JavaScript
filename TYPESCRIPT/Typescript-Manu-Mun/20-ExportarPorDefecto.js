"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre_, edad_, altura_) {
        this.nombre = nombre_;
        this.edad = edad_;
        this.altura = altura_;
    }
    Persona.prototype.mostrar = function () {
        console.log(this.nombre);
    };
    return Persona;
}());
//Para exportar toda la clase por defecto
exports.default = Persona;
