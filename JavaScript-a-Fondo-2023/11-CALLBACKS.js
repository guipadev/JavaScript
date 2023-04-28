/**
 * Callbacks
 *
 * Es una función que se pasa a otra función como argumento para su ejecución posterior
 *
 * Existen callbacks síncronicos y asíncronos
 */

function miFuncion(fn) {
  // ...
  fn();
}

function saludar() {
  console.log("Hola Mundo");
}

// Primer forma de callback
miFuncion(saludar); // Hola Mundo

// Otra forma de callback a la anterior
miFuncion(function saludar() {
  console.log("Hola Mundo"); // Hola Mundo
});

// Forma arrow function, si no necesitamos el contexto de this
miFuncion(() => console.log("Hola Mundo")); // Hola Mundo

// Otros ejemplos como se pasa una funcion a otra funcion con argumento
function miFuncionY(fn) {
  const nombre = "JUAN";

  fn(nombre);
}

function saludo(nombre) {
  console.log(`Hola ${nombre}`);
}

miFuncionY(saludo); // Hola JUAN

/* ========================================================== */
console.log("/* ========================================================== */");

function saludarN(nombre) {
  alert(`Hola ${nombre}`);
}

function obtenerNombre() {
  const nombre = prompt("Introduce tu nombre");
  return nombre;
}

const nombre = obtenerNombre();
saludarN(nombre);

// ======================= Conversión callback SINCRONO =======================
function saludarX(fn) {
  const nombre = prompt("Introduce tu nombre");
  fn(nombre);
}

obtenerNombre(function (nombre) {
  alert(`Hola ${nombre}`);
});

// Varias formas
obtenerNombre(function (nombre) {
  console.log(`Hola ${nombre}`); // Hola nombreIngresado
});

/**
 * Un ejemplo de callback sincrono es el que usamos en el método forEach de Arrays
 */
[1, 2, 3, 4, 5].forEach(recorrer);

// Función declarada que se usa como callback
function recorrer(numero) {
  console.log(numero);
}

// Ejemplo de uso
const nums = [1, 2, 3, 4, 5];

function recorre(num) {
  console.log(num);
}

// nums.forEach(recorre()) ❌
nums.forEach(recorre); // 1 2 3 4 5

// Aunque normalmente se encuentra de esta forma
nums.forEach(function (num) {
  console.log(num);
});

// Uso con map callback
function hacerDoble(num) {
  return num * 2;
}

const doble = nums.map(hacerDoble);

console.log(doble); // [ 2, 4, 6, 8, 10 ]

// Uso con filter callback
const pares = nums.filter((num) => num % 2 === 0);

console.log(pares); // [ 2, 4 ]

// ======================= Conversión callback ASINCRONO =======================
// Una función que empieza, tarda un tiempo en terminar, pero no bloque la ejecución de JS
// Un ejemplo de callback asíncrono es el que utilizamos en el método setTimeout de Window

setTimeout(saludar, 2000);

// Función declarada que se usa como callback
function saludar() {
  console.log("HOLA");
}

function alerta() {
  console.log("Wooww");
}

setTimeout(alerta, 3000);

// Otra veces se encontraran de esta forma
setTimeout(function () {
  console.log("Auuuuu!!");
}, 3000);

// Ejemplo consumo de una API
const URL = "wmedia.es/juan.jpg";
const URL2 = "wmedia.es/julio.jpg";
const URL3 = "wmedia.es/javier.jpg";
const URL4 = "wmedia.es/jose.jpg";

const h1 = document.querySelector("h1");
h1.addEventListener("click", function () {});

// fn => callback
function descargar(url, fn) {
  console.log("Descargando..." + url);

  setTimeout(function () {
    // Finguiendo una tarea asíncrona, osea tardar un tiempo en hacer el consumo y no bloquea la ejecución
    console.log("Descargandro: " + url);
    fn(url);
  }, 3000);
}

function procesar(archivo) {
  console.log("Procesando..." + archivo);
}

descargar(URL, procesar);
// procesar(URL);

// Otra forma que se puede encontrar más resumida
descargar(URL, function (archivo) {
  console.log("Procesando..." + archivo);
});

// Procesar varias URL, este el famoso infierno Callback Hell
descargar(URL, function (archivo) {
  console.log("Procesando..." + archivo);

  descargar(URL2, function (archivo) {
    console.log("Procesando..." + archivo);
  });

  descargar(URL3, function (archivo) {
    console.log("Procesando..." + archivo);
  });

  descargar(URL4, function (archivo) {
    console.log("Procesando..." + archivo);
  });
});
