"use strict";
var papaPitufo = {
    alto: 2,
    ancho: 1
};
function MostrarPitufo(papaPitufo) {
    var mediapeso = papaPitufo.alto / papaPitufo.ancho;
    if (papaPitufo.nombres) {
        return papaPitufo.nombres + " tiene una media de " + mediapeso;
    }
    else {
        return "No se quien eres, pero t\u00FA media de peso es " + mediapeso + "}";
    }
}
console.log(MostrarPitufo(papaPitufo));
