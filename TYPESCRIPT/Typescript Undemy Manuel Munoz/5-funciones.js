"use strict";
// Se define tipo valor a recibir y tipo valor que podra retornar
function valor(nume) {
    return "El n\u00FAmero es " + nume;
}
console.log(valor(55));
// Con 2 parametros
function sumar(a, b) {
    return a + b;
}
var suma = sumar(2, 2);
var suma2 = sumar(52, 72);
console.log(suma);
console.log(suma2);
// Modo de funciones normal
function mostrar0() {
    console.log('Funcion 1');
}
// Modo arow function igual que anterior
var mostrar2 = function () { console.log('Funcion 2'); };
console.log(mostrar0);
console.log(mostrar2);
// Modo de funciones normal con parametro
function mostrar3(a) {
    console.log(a);
}
// Modo arow function igual que anterior con parametro
var mostrar4 = function (a) { console.log(a); };
mostrar3('Lili');
mostrar4('Flora');
