/**
 * Añadir elementos
 *
 * Para añadir elementos al inicio y mutar el Array
 * podemos usar el método "unshif"
 */

const colores = ["amarillo", "azul", "rojo"];

colores.unshift("blanco");

console.log(colores); // [ 'blanco', 'amarillo', 'azul', 'rojo' ]

/**
 * Añadir elementos
 * Para añadir elementos al inicio sin mutar el Array
 * podemos usar el operador "spread"
 */

const razaPerros = ["Buldog", "Pastor Aleman", "Pitbull"];

const razaPastor = "Pastor Belga";

const razaPerros2 = [razaPastor, ...razaPerros];

console.log(razaPerros, razaPerros2);
