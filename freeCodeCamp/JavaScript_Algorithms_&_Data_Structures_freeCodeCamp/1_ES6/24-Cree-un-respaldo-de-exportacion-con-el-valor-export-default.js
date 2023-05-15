/*
En la export lección, aprendió sobre la sintaxis denominada exportación con nombre. 
Esto le permitió hacer múltiples funciones y variables disponibles para su uso en otros archivos.

Hay otra export sintaxis que debe conocer, conocida como export default. 
Por lo general, utilizará esta sintaxis si solo se exporta un valor de un archivo. 
También se utiliza para crear un valor alternativo para un archivo o módulo.

A continuación se muestran ejemplos utilizando export default:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}

La primera es una función con nombre y la segunda es una función anónima.

Dado que export default se utiliza para declarar un valor alternativo para un módulo o archivo, 
solo puede tener un valor como exportación predeterminada en cada módulo o archivo. 
Además, no puede usar export default con var, let o const

La siguiente función debe ser el valor de reserva para el módulo. 
Por favor agregue el código necesario para hacerlo.

function subtract(x, y) {
  return x - y;
}
*/

"use strict";
export default function subtract(x, y) {
  return x - y;
}
