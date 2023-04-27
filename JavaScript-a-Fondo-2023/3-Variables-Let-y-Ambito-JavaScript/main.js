/**
 * Ámbito y let
 *
 * Hasta ahora hemos creado variables con var.
 * Estas tienen ámbito de función: pueden ser accedidas desde la función donde fueron declaradas
 * (y funciones interiores).
 */

// Ambito global
var nombre = "Juan";

function saludar() {
  // Ambito local
  var nombre = "Andres";

  console.log("Hola " + nombre);
}

saludar(); // Hola Andres

/**
 * Sin embargo, si declaramos variables con let(ES2015), tenemos ámbito de bloque, es decir, solo pueden
 * ser accedidos desde el bloque en el que se declaran, o bloques inferiores
 *
 * Este ámbito de bloque tiene sus ventajas. Por ejemplo al utilizarlo con estructuras de control y de flujo
 */

{
  let apellido = "Parra";
}

console.log(apellido); // nombre is not defined

/**
 * Además, al usar let tenemos un comportamiento mucho más estricto en el alzado (hosting),
 * algo que para muchos es otra ventaja
 */

// Cannot access 'fruta' before initialization
console.log(fruta);

let fruta = "Pera";
