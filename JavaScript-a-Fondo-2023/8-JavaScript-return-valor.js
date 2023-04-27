/**
 * Retornar valores
 *
 * A no ser que seamos explícitos, las funciones JavaScript retorna undefined(implicit return)
 *
 * Si especificamos algo que retornar, la función finalizará su ejecucción y devolverá ese valor
 */

function checkOut(name, ...prices) {
  const total = prices.reduce((acc, curr) => acc + curr);

  /*
  const total = prices.reduce((acc, curr) => { return acc + curr})
  */

  return total;
}

const total = checkOut("Juan", 13, 343, 123, 432); // 911

console.log(total);
