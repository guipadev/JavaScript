"use strict";
/*
Clase es una plantilla de un Objeto
Este contiene Metodos y Atributos de dicho Objeto

Ejemplo:

Objeto Coche

Propiedades: color, marca, numero ruedas, numero de puertas

Metodos: arrancar, acelerar, frenar
*/
var Vehiculo = /** @class */ (function () {
    // _ para diferenciar el parametro de clase y del constructor
    function Vehiculo(marca, fecha, puertas) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }
    //ENCAPSULAR para que no alla errores
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    //Los metodos son funciones
    Vehiculo.prototype.acelerar = function () {
        console.log('Ojo que acelero');
    };
    Vehiculo.prototype.freno = function () {
        console.log('Ojo que freno');
    };
    return Vehiculo;
}());
//Instanciamos un nuevo objeto
var coche = new Vehiculo('Ford', '12/7/2018', 4);
//Acceder a propiedades
coche.marca = 'Chevrolet';
console.log(coche.marca);
coche.fecha;
console.log(coche.fecha);
coche.setMarca('Jeep');
console.log(coche.marca);
//Acceder a metodos
coche.acelerar();
