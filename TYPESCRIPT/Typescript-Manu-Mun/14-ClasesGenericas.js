"use strict";
//Al tener el tipo generico puede tener atributos como funciones
//Que luego trabaje con datos de tipo generico
var Militar = /** @class */ (function () {
    function Militar(fuerza_, rango_) {
        this.fuerza = fuerza_;
        this.rango = rango_;
    }
    Militar.prototype.cargo = function (dato) {
        return dato;
    };
    return Militar;
}());
var recluta = new Militar('FAC', 'T1');
recluta.fuerza;
recluta.cargo('Bachiller');
console.log(recluta.fuerza);
console.log(recluta.cargo('Bachiller'));
