"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importando la variable del otro archivo estro Exportada
var _18_ExportarModulos_1 = require("./18-ExportarModulos");
//Podemos importar todo lo que necesitemos
var _18_ExportarModulos_2 = require("./18-ExportarModulos");
//Otra forma de importar todo, pero ocupa mas memoria ya que no se especifica
//Se le puede poner cualquier nombre como paquete(archivos... etc) no recomendable x consumo memoria
var paquete = __importStar(require("./18-ExportarModulos"));
//Obtendremos la inf. de la variable nombre, sin declararla ya que es de otro archivo
console.log(_18_ExportarModulos_1.nombre);
//Utilizar Interface importadas
var usuario = { nombre: 'Camilo' };
//Utilizando la Funcion importadas
(0, _18_ExportarModulos_2.mostrar)();
(0, _18_ExportarModulos_1.mostrona)('Lebron James');
//cuando se exporta todo, para poder utilizarlo debemos llamarlo primero con el nombre
//asignado para por la importacion en este caso "paquete"
paquete.mostrar();
paquete.mostrona('Shagy Doo');
