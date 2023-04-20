"use strict";
var Animalito = /** @class */ (function () {
    // Por estar private es solo accesible dentro de esta clase
    function Animalito(_nombre, _tamano) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }
    Animalito.prototype.moverse = function () {
        console.log('Me estoy moviendo');
    };
    return Animalito;
}());
//Podemos acceder ya que es publico
var hervivoro = new Animal('Caballo', 3);
//No podemos acceder a los metodos
