"use strict";
//Nos permite acceder atributos no definidos adquiriendo atributos y metodos de la interface
function caminar(persona) {
    console.log("La persona " + persona.apellidoCompleto + " esta caminando");
}
//obligatoriamente se debe utilizar todos los que tenga la interface
var nueva_persona = {
    nombreCompleto: "Manuel",
    apellidoCompleto: "Lozada"
};
//Invocamos la funcion creada
caminar(nueva_persona);
