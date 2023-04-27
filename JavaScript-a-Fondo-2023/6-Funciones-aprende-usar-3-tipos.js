/**
 * TODO SOBRE FUNCIONES
 *
 * 1. Declaración de funciones:
 *
 * En JavaScript hay 3 formas de crear funciones. Vamos a explorarlas
 *
 * La primera forma es a través de las funciones declaradas
 *
 * Estas requieren un identificador y son alzables
 *
 */

function saludar() {
  console.log("Me llamo Julio");
}

saludar(); // Me llamo Julio

/**
 * 2. Declaración de funciones
 *
 * También podemos crear una expresión funcional, que consiste en asociar una función a una variable
 *
 * Puede tener nombres o ser anónima
 *
 * Lo que se alza es declaración, no la asignación
 */

const saludo = function () {
  console.log("Me llamo Krilin");
};

/**
 * 3. Declaración de funciones
 *
 * Por último, podemos crear una versión aún más acortada de una función anónima a través de las funciones flechas
 *
 * No disponen de contexto propio de this
 *
 * Disponen de retorno implícito, delimitadores opcionales y no se alzan
 *
 * Funciones flecha no tienen contexto de this
 * Por lo cual como métodos de objetos no suelen usarse o para manipulación del DOM
 */

const carne = () => {
  console.log("Es carne de rex");
};

carne(); // Es carne de rex

// Función flecha
const mayuscula = (nombre) => {
  return nombre.toUpperCase();
};

// Función flecha más reducida
const mayusculas = (nombre) => nombre.toUpperCase();

let restaurante = mayuscula("carne de res");

console.log(restaurante); // CARNE DE RES
