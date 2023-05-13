/**
 * Ejemplo de responsabilidad única mal aplicado
 */
const numbers = [1, 2, 3, 4, 5];

function showArr(arr) {
  const order = [...arr].sort((a, b) => a - b);
  const op = [...order].map((item) => item * 2);

  for (let i = 0; i < op.length; i++) {
    console.log(op[i]); // 2, 4, 6, 8, 10
  }
}

showArr(numbers);

/**
 * Ejemplo responsabilidad única aplicada
 */
const numeros = [1, 3, 2, 5, 4];

function ordenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 2, 4, 6, 8, 10
  }
}

function orden(arr) {
  return [...arr].sort((a, b) => a - b);
}

function aplicarOperacion(arr) {
  return [...arr].map((item) => item + 2);
}

ordenArray(orden(aplicarOperacion(numeros)));
