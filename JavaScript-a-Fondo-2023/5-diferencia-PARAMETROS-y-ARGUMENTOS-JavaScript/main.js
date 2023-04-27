/**
 * Parámetros y argumentos
 *
 * Todas las funciones pueden tener parámetros para hacerlas ań más polivalentes
 *
 * Los parámetros son accesibles como variables en el cuerpo de la función
 *
 * Al invocar la función, pasamos valores como argumentos que son aceptados
 * como parámetros
 */

function saludar(nombre) {
  console.log("Me llamo " + nombre);
}

saludar("Luis"); // Me llamo Luis
saludar(); // Me llamo undefined

/**
 * Podemos establecer valores por defecto para los parámetros, en el caso de que no se satisfagan en la invcación
 */

function saludo(nombre, apellido = "Perez") {
  console.log(`Soy ${nombre} ${apellido}`);
}

saludo("Rigo"); // Soy Rigo Perez
saludo("Tavo", "Muñoz"); // Soy Tavo Muñoz
