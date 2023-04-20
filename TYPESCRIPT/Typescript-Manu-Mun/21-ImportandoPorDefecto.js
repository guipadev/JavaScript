"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _20_ExportarPorDefecto_1 = __importDefault(require("./20-ExportarPorDefecto"));
//Usando la clase importada para crear nuevos objetos
var pelao = new _20_ExportarPorDefecto_1.default('Davinson', 20, 3);
pelao.mostrar();
