"use strict";
// Ejemplo funcion general
function mostrar(dato) {
    return dato;
}
console.log(mostrar("perro"));
//FUNCION GENERICA
//Por convencio le ponemos una T pero puede ir cualquier escito y este debe estar en todas las demas T
function mostrarGenericas(dato) {
    return dato;
}
//Si damos tipo.  veremos que en estas ocasion si se desplaza todas las opciones para trabajar
//con este tipo de dato
var tipo = mostrarGenericas(5);
console.log(mostrarGenericas("gato")); //aqui puede colarse dato numerico, boolean
console.log(mostrarGenericas(5));
console.log(mostrarGenericas(true));
