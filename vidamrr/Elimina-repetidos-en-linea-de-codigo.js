const valores = [1, 1, 3, 3, 5, 6, 1, 3, 2];

// Usar set ya que el principio es no tener valores repetidos
const unicos = [...new Set(valores)];

console.log(unicos); // [ 1, 3, 5, 6, 2 ]
