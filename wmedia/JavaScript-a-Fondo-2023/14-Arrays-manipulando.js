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

/**
 * Añadir elementos
 * Para añadir elementos en cualquier índice y sin mutar el Array podemos
 * usar el método slice
 */

const ciudades = ["Bogota", "Cali", "Medellin"];

const nuevaCiudad = "Barranquilla";

const ciudades2 = [
  ...ciudades.slice(0, 2), //Bogota, Cali
  nuevaCiudad,
  ...ciudades.slice(2), // Medellin
];

// [ 'Bogota', 'Cali', 'Barranquilla', 'Medellin' ]

/**
 * Eliminar elementos
 * Para eliminar elementos al inicio y mutar el Array podemos usar el método shift
 * Además retornamos lo eliminado
 */

// Eliminar del inicio, mutando
const hamburgueserias = ["McDonals", "La Granja", "El corral"];

const hamburguesa = hamburgueserias.shift(); // [ 'La Granja', 'El corral' ]

/**
 * Eliminar elementos
 * Para eliminar elementos al inicio sin mutar el Array podemos usar el operador spread y método slice
 */

// Eliminar del inicio, sin mutar
const bancos = ["BBVA", "Davivienda", "Bancolombia"];

const bancos2 = [...bancos.slice(1)]; // [ 'Davivienda', 'Bancolombia' ]

/**
 * Eliminar elementos
 * Para eliminar elementos al final y mutar el Array podemos usar el método pop
 * Además retornamos lo eliminado
 */

// Eliminar del final, mutando
const frutas = ["pera", "mango", "uva"];

const uva = frutas.pop(); // [ 'pera', 'mango' ]

/**
 * Eliminar elementos
 * Para eliminar elementos al final sin mutar el Array podemos usar el operador spread y método slice
 */

// Eliminar del final, sin mutar
const micos = ["gorila", "titi", "orangutan"];

const micos2 = [...micos.slice(0, micos.length - 1)]; // [ 'gorila', 'titi' ]

/**
 * Eliminar elementos
 * Para eliminar elementos en cualquier indice mutando el Array podemos usar el operador splice
 */

// Eliminar en cualquier índice, mutando
micos.splice(1, 1); // [ 'gorila', 'orangutan' ]

/**
 * Eliminar elementos
 * Para eliminar elementos en cualquier indice sin mutar podemos usar el operador spread
 * y el método slice
 */

// Eliminar en cualquier índice, sin mutar
const mascotas = ["perro", "gato", "perico"];

const index = 1;

const mascotas2 = [...mascotas.slice(0, index), ...mascotas.slice(index + 1)];

// [ 'perro', 'perico' ]

/**
 * Realizar transformaciones Array
 * Sin mutar el Array orignal mediante map
 */

const peces = ["mojarra", "bocachico", "bagre"];

const pecesMayuscula = peces.map((pez) => pez.toUpperCase()); // [ 'MOJARRA', 'BOCACHICO', 'BAGRE' ]

/**
 * Encontrar elementos
 *
 * - Una manera sencilla de encontrar elementos primitivos es utilizar el método indexOf
 *
 * - Devuelve el índice si lo encuentra, o -1 si no lo encuentra
 */

const motos = ["suzuki", "yamaha", "honda", "BMW"];

const indice = motos.indexOf("yamaha"); // 1

motos[index]; // yamaha

// Eliminar buscando indice mutando Array

const eliminarElemento = (array, busqueda) => {
  // ENcontra el índice de la búsqueda
  const index = array.indexOf(busqueda);

  if (index > -1) array.splice(index, 1);
};

eliminarElemento(motos, "BMW"); // [ 'suzuki', 'yamaha', 'honda' ];

/**
 * Encontrar elementos
 * - Otra forma consiste en usar el método includes.
 * - Retorna un valor booleano
 */

const felinos = ["tigre", "leon", "pantera"];

const tieneMelena = felinos.includes("leon"); // true

/**
 * Encontrar elementos
 * En escenarios más reales donde tenemos colecciones de información,
 * podemos usar el método findIndex que acepta un callback
 */

const hervivoros = [
  { id: 1, nombre: "vaca" },
  { id: 2, nombre: "caballo" },
  { id: 3, nombre: "oveja" },
];

function findAcarreo(animal) {
  return animal.id === 2;
}

const indiceCuernos = hervivoros.findIndex(
  (animal) => animal.nombre === "vaca"
); // 0

/**
 * Encontrar elementos
 * Si lo que necesitamos es el elemento encontrado (no su índice)
 * podemos usar el método find
 */
const peludo = hervivoros.find((animal) => animal.nombre === "oveja"); // 2

// Obtener el hervivoro que tenga mas de 5 letras
const minChars = 5;

const resultado = hervivoros.filter(
  (animal) => animal.nombre.length >= minChars
); // [ { id: 2, nombre: 'caballo } ]

/**
 * Copia superficial vs profunda
 *
 * - Podemos copiar elementos de forma superficial al utilizar el operador spred, Array.from y similar.
 *
 * - Si los elementos son valores primitivos, se copiarán por valor
 */
const original = ["rojo", true, 99];

const copiaSuperficial = [...original];

const copiaProfunda = original.slice();

const copia = Array.from(original);

copiaSuperficial[1] = false; // [ 'rojo', true, 99 ] [ 'rojo', false, 99 ]

/**
 * Copia superficial vs profunda
 * Si los elementos a copiar son valores compuestos, se pasarán por referencia
 */

const originales = [
  { id: 1, nombre: "rojo" },
  { id: 2, nombre: "verde" },
  { id: 3, nombre: "azul" },
  { id: 4, nombre: "amarillo" },
];

const copias = Array.from(originales);

originales[0].id = 666;

/**
 * Copia profunda
 */

const copiaProf = JSON.parse(JSON.stringify(original));

copia[0].id = 666;

console.log(original, copiaProf); // [ 'rojo', true, 99 ] [ 'rojo', true, 99 ]
