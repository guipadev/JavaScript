/**
 * Constantes
 *
 * Como ahora ya sabes, var y let permiten declarar variables dinámicas: puedes re-asociarlas a otro valor.
 *
 * Si queremos crear una asociación constante a un valor, podemos usar const para la creación de variables
 *
 * Al utilizar const nos aseguramos que no ocurrirá ninguna re-asociación a otro valor en esa variable
 *
 * Las variables creadas con const no son alzadas
 */

const edad = 77;

edad = 99; // ❌

const persona = "Jose";

persona += " Nuñez"; // ❌

/**
 * Eso sí, usar constantes no significa que sean inmutables.
 * Podemos mutar propiedades del valor asociado a la constante
 */
const people = { name: "Erika" };

people.name = "John";

console.log(people.name); // John

// En cuanto a su acceso, igual que con let disponemmos de ámbito de bloque
{
  const apodo = "Mono";
}

console.log(apodo); // undefined
