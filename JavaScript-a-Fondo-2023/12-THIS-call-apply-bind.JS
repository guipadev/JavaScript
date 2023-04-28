/**
 * Funciones y this
 *
 * El concepto de this puede ser confuso, ya que es dinámico y depende del contexto de ejecución
 *
 * En una función, en valor por defecto de this es Window (si no estamos en modo estricto)
 */

var nombre = "Juan";

function saludar() {
  console.log(this.nombre); // ❔
}

saludar();

/**
 * En una función, en valor por defecto de this es Window (si no estamos en modo estricto)
 */
("use strict"); // sera undefine

function saludo() {
  console.log(this);
}

saludo(); // undefine

/**
 * This
 *
 * Pero su valor (la referencia a un valor) se puede cambiar de forma dinámica
 */

var nombre = "Juan";

const persona = { nombre: "Andres" };

function saludando() {
  console.log(this.nombre);
}

// saludando()

// El método call() llama a una función forzando el valor de this como un argumento
saludando.call(persona); // Andres

// Acepta otros tipos de parametros
function despedida(momento) {
  console.log(`Hola ${this.nombre} ${momento}`);
}

despedida.call(persona, "hasta luego"); // Hola Andres hasta luego

// El método apply() es parecido al call(), pero los argumentos se esperan en un array o cualquier iterable
despedida.apply(persona, ["Good Morning"]);

/**
 * Podemos comprobarlo usando un objeto
 */

var name = "John";

const objeto = {
  name: "William",
  saludar() {
    console.log(this.name);
  },
};

const funcion = objeto.saludar;

funcion();

/**
 * De hecho podemos perder el contexto
 */

var lastName = "Richard";

const objetoLastName = {
  lastName: "Williams",
  saludito() {
    // Aqui se pierde el contexto
    setTimeout(function () {
      console.log(this.lastName);
    }, 1000);

    // Forma de no perder contexto con bind()
    setTimeout(
      function () {
        console.log(this.lastName);
      }.bind(this),
      1000
    );

    // Forma de no perder el contexto
    setTimeout(() => {
      console.log(this.lastName);
    }, 1000);
  },
};

objeto.saludito();
