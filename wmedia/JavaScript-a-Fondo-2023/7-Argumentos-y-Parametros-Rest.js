/**
 * Parámetros rest
 *
 * Con los parámetors rest(ES2015) podemos aceptar cualquier número de parámetros en una función
 *
 * Son compatibles con los parámetros normales, pero deben declararse siempre al final
 *
 */

function checkOut(...prices) {
  Array.isArray(prices); // 💸

  const total = prices.reduce((acumulador, vrActual) => acumulador + vrActual);

  /*
  const total = prices.reduce(function(acc, curr) {
    return acc + curr
  }
  */

  console.log(total);
}

// Independiente cantidad de argumentos
checkOut(10, 33, 88);
checkOut(10, 33, 88, 55, 97);
