/**
 * Añadir elementos
 *
 * Para añadir elementos al inicio y mutar el Array
 * podemos usar el método "unshif"
 */

const colores = ["amarillo", "azul", "rojo"];

// Añadir al inicio, mutando
colores.unshift("blanco");

console.log(colores); // [ 'blanco', 'amarillo', 'azul', 'rojo' ]

/**
 * Añadir elementos
 * Para añadir elementos al inicio sin mutar el Array
 * podemos usar el operador "spread"
 */

const razaPerros = ["Buldog", "Pastor Aleman", "Pitbull"];

const razaPastor = "Pastor Belga";

// Añadir al inicio, sin mutar
const razaPerros2 = [razaPastor, ...razaPerros];

console.log(razaPerros, razaPerros2); // [ 'Buldog', 'Pastor Aleman', 'Pitbull' ] [ 'Pastor Belga', 'Buldog', 'Pastor Aleman', 'Pitbull' ]

/**
 * Añadir elementos
 * Para añadir elementos al final y mutar el Array
 * podemos usar el método "push"
 */

// Añadir al final, mutando
razaPerros.push(razaPastor); // [ 'Buldog', 'Pastor Aleman', 'Pitbull', 'Pastor Belga' ]

// Añadir al final, sin mutar
const razaPerros3 = [...razaPerros, razaPastor];

/**
 * Añadir elementos
 * Para añadir elementos en cualquier índice y mutar el Array podemos
 * usar el método splice
 */

const paises = ["Colombia", "Mexico", "Argentina"];

const nuevoPais = "Brazil";

paises.splice(2, 0, nuevoPais); // [ 'Colombia', 'Mexico', 'Brazil', 'Argentina' ]
