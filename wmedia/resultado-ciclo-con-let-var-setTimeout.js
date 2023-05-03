for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // 3 3 3

/**
 * Bucle creado con var por lo cual tienen ambito global y setTimeout es asincrono
 * cuando se termina las 3 interacciones del bucle, empezara a salir el resultado
 * del console.log(), y este punto i = 3
 */

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // 0 1 2

/**
 * Con let no ocurre por ser de ambito de bloque
 * y contexto no se comparte
 */
