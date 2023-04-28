/**
 * CREACIÓN DE ARRAYS
 *
 * - Estructura de datos ordenada por índices únicos
 * - Para crear un Array el método más utilizado es notación literal
 * - Usamos corchetes para delimitar la estructura y separamos cada elemento con comas
 * - Los Array son objetos de estructura de datos desordenadas
 * - Los Array son objetos, recortados
 */

const dias = ["lunes", "martes", "miercoles", "jueves"];

/**
 * Podemos acceder a los elementos de Array a través de su índice
 */

// Acceder primer elemento
console.log(dias[0]);

// Acceder último elemento
console.log(dias[dias.length - 1]);

/**
 * Como valor compuesto, las Array se pasan por referencia, no por valor
 */

const mes = ["enero", "febrero", "marzo", "abril"];

const mesCopia = mes;

console.log(mes == mesCopia); // true

console.log([] === []); // false, porque no hay 2 arrays que sean iguales, a no ser que se referencie al mismo array

// Agregar valores por lo cual esta mutando
mes[4] = "mayo";

console.log(mesCopia); // ["enero", "febrero", "marzo", "abril", "mayo"]

// Convertir a JSON
mesJSON = JSON.stringify(mes);

console.log(mesJSON);

// Devolverlo a objeto o valor nativo JS
mesOK = JSON.parse(mesJSON); // ["enero","febrero","marzo","abril","mayo"]

console.log(mesOK); // [ 'enero', 'febrero', 'marzo', 'abril', 'mayo' ]

/**
 * - Podemos cambiar los elementos del Array a través de su índice
 * - También podemos añadir al final a través de la propiedad length
 */
const tags = ["terror", "aventura", "suspense"];

tags[0] = "horror";

tags[tags.length - 1] = "scifi";

console.log(tags); // [ 'horror', 'aventura', 'scifi' ]

/**
 * Agregar propiedades al Array como si fueran objetos - PERO NO SE DEBE HACER ESTO, MALISIMA PRACTICA
 */
tags.valoracion = "Excelente";

console.log(tags); // [ 'horror', 'aventura', 'scifi', valoracion: 'Excelente' ]

/**
 * Método splice()
 * 1er parametro en que indice entro
 * 2do parametro que elimino 0 => nada 1.. => elimino cuantos?
 * 3cero parametro que adiciono al indice
 */
tags.splice(1, 0, "Gore"); // (1, 1, "Gore") [ 'horror', 'Gore', 'scifi', valoracion: 'Excelente' ]

console.log(tags); // [ 'horror', 'Gore', 'aventura', 'scifi', valoracion: 'Excelente' ]

/**
 * Podemos vacia un Array de varias formas
 */

//tags = []; // Error de reasignación si es Constante

tags.length = 0;

tags.splice(0, tags.length);

/**
 * ARRAYS MULTI DIMENSIONALES
 *
 * - Dentro de un Array pueden vivir más Arrays
 * - La clave es referirse a sus elementos a través de su índice
 */
const libros = [
  ["IT", 7],
  ["El Terror", 9],
  ["El Exorcista", 10, ["Demonio", 666, "Pazuzu"]],
];

// Acceder a "El Terror"
const titulo = libros[1][0];
const precio = libros[1][1];

// Otra forma
const libro = libros[1];
const tituloL = libro[0];
const precioL = libro[1];

// Obtener 666
console.log(libros[2][2][1]);

/**
 * DESESTRUCTURAR ARRAYS
 *
 * Gracias a JavaScript ES6 podemos extraer los elementos de un Array
 * de forma más sencilla
 */

const [it, elTerror, elExorcista] = libros;

console.log(it); // [ 'IT', 7 ]

// Extrae un dato especifico
const [, elMiedo] = libros; // ["El Terror", 9]

// Extraer titulo y precio Demonio
const [, , [tituloD, precioD]] = libros; // ["Demonio", 666]

// Extraer el Array que esta dentro el Array El exorcista
const [, , [tituloE, , losTags]] = libros; // ["Demonio", 666, "Pazuzu"]],

/**
 * DESESTRUCTURAR ARRAYS
 *
 * Incluso podemos combinarlo con los parámetros rest (tambien de ES6)
 */

const [tech, ...resto] = libros;

/**
 * Ejemplo con consumo de API
 */
/*
const API = "https://randomuser.me/api/?result=5";

async function getData() {
  const response = await fetch(API);

  const { results: users } = await response.json();

  showUsers(users);
}

function showUsers(users) {
  users.forEach((user) => {
    const picture = user.picture.medium;
    const img = document.createElement("img");
    img.src = picture;
    document.body.appendChild(img);
  });
}

// GO 💫
getData();
*/

/**
 * NO mutar el Array
 */
const numerosVarios = [1, 2, 3, 4, 5];

const numerosCubo = numerosVarios.map((numero) => {
  return Math.pow(numero, 3);
});

const numerosPares = numerosVarios.filter((numero) => numero % 2 === 0);

console.log(numerosVarios); // [ 1, 2, 3, 4, 5 ]
console.log(numerosCubo); // [ 1, 8, 27, 64, 125 ]
console.log(numerosPares); // [ 2, 4 ]
