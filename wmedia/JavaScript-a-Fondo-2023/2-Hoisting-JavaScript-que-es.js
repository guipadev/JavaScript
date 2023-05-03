/*
Alzado (hoisting)
*/

/**
 * JavaScript es un lenguaje con tipos dinámicos, es decir, podemos asignar y
 * reasignar diferentes tipos a una misma variable (de ahí el nombre: variable)
 *
 * Para hacerlo tenemos que utilizar dos fases diferentes:
 * declaración e inicialización
 */
var favorito; // Declaración
favorito = 66; // Inicialización
favorito = "Juan"; // Reasignación

// Cuando declaramos una variable, JavaScript le asigna el tipo undefined
var nombre;
console.log(nombre); // undefined

/**
 *  Si intentamos referenciar una variable antes de ser declarada, ¿qué crees que ocurrirá?
 *
 * La respuesta es undefined porque JavaScript, al interpretar tú código alza al inicio del programa
 * la declaración de variable(no la inicialización) y las funciones declaradas
 *
 * Esto explica el por qué, por ejemplo, puedes invocar una función antes de declararla
 */
console.log(apellido); // undefined, porque JS busca la declaración de la var
var apellido = "Marquez";

saludar(); // "Hola 👐"

function saludar() {
  console.log("Hola 👐");
}
