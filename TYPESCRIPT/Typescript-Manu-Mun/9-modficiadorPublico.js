"use strict";
var Animal = /** @class */ (function () {
    // Tener public o no lo hace publico
    function Animal(_nombre, _tamano) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }
    Animal.prototype.moverse = function () {
        console.log('Me estoy moviendo');
    };
    return Animal;
}());
//Podemos acceder ya que es publico
var reptil = new Animal('Serpiente', 2);
reptil.moverse();
