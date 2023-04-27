/**
 * IIFE's
 *
 * Son las siglas de "Inmediately Invoked Function Expression"
 *
 * La parte más importante es inmediatamente
 */

(function () {
  // ...
});

/**
 * Para crear un IIFE debemos envolver una función con el operador de agrupación
 *
 * De esta forma, indicamos que es una expresión que debe ser evaluada
 *
 * Como la expresión es evaluada como una función, podemos añadir uno paréntisis
 * al final para auto ejecutarla inmediatamente
 */

(function () {
  console.log("Hi");
})();

// Con parametro

(function (name) {
  console.log(`Hi I'm ${name}`);
})("Andres");

/**
 * La principal utilidad de un IIFE es la auto-creación de un ámbito funcional nuevo e independiente.
 *
 * Un ejemplo útil típico es su uso con bucles for.
 */
for (let i = 0; i < 10; i++) {
  // Con var da un resultado diferente
  console.log(i);

  setTimeout(function () {
    console.log(`El número es ${i}`);
  }, 1000);
}

// Uso con var
console.log("----------------- uso con var -----------------");

for (var i = 0; i < 10; i++) {
  console.log(i);

  (function (i) {
    setTimeout(function () {
      console.log(`El número es ${i}`);
    }, 1000);
  })(i);
}

/**
 * Otro ejemplo es el patrón de módulo
 *
 */
console.log("------------ Otro ejemplo es el patrón de módulo ------------");

const Person = (function () {
  const name = "Camilo";
  let distance = 0;

  function greet() {
    console.log(`Hola me llamo ${name}`);
  }

  function run() {
    distance++;
    console.log(`${name} ran ${distance} km`);
  }

  return {
    greet,
    run,
  };
})();

Person.greet();
Person.run();

const Persona = (function (persona) {
  const nombre = persona || "Camilo";
  let distancia = 0;

  function saludo() {
    console.log(`Hola me llamo ${nombre}`);
  }

  function corre() {
    distancia++;
    console.log(`${nombre} corrio ${distancia} km`);
  }

  return {
    saludo,
    corre,
  };
})("Jacob");

Persona.saludo("Jaime");
Persona.corre();
