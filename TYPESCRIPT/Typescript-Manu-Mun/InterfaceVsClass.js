"use strict";
// CLASS
// Que cierta propiedades y funcionalidades puedan usarse para 
// Instanciar basados en la clase
var Avenger = /** @class */ (function () {
    function Avenger(heroe) {
        this.heroe = heroe;
    }
    Avenger.prototype.poder = function () {
        console.log(this.heroe);
    };
    return Avenger;
}());
var ironman = new Avenger("Hola soy robot");
var capitan = new Avenger("Soy capitan america");
var hulk = new Avenger("Hulk destruye");
ironman.poder();
capitan.poder();
hulk.poder();
// Una variabe asignada en la interface debe cumplir con lo asignado en la interfaz
var personita = {
    name: "Dario",
    lastName: "Muñoz",
    age: 29,
    breath: function () {
        console.log("Estoy respirando");
    }
};
// Tanto la CLASE como la INTERFACE pueden utilizarse como tipo de PARAMETRO
var sayHi = function (personita) {
    console.log("Hola como andas ? " + personita.name);
};
var PlayerMessi = function (player) { };
var jugador = {
    name: "Lionel",
    lastName: "Messi",
    age: 29,
    breath: function () {
        console.log("Respira en Barcelona");
    },
    pieDiestro: "Izquierdo",
    numCamisa: 10,
    estadistica: {
        golesMarcados: 10,
        asistenciasEfectivas: 2
    },
};
