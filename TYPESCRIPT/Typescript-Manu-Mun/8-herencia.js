"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    // Recibe los parametros del Padre y anexa el nuevo
    function Hijo(_nombre, _edad, _apellido) {
        var _this = 
        //Llamar al constructor de la clase Padre
        _super.call(this, _nombre, _edad) || this;
        _this.apellido = _apellido;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        console.log(this.nombre);
    };
    return Hijo;
}(Padre));
var nuevoHijo = new Hijo('Martin', 5, 'Lozada');
// Heredamos funnciones del padre que no tenemos declaradas
// Heredamos todas las propiedades y metodos del Padre sin tenerlas
nuevoHijo.mostrarNombre();
nuevoHijo.mostrarNombreHijo();
