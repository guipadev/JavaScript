// 1-Dado un array de números, escribir una función que encuentre el número más grande.
const mayor = [1, 2, 3].reduce((acc, element) =>
  element > acc ? element : acc
);
