/*
Factoriza un número

Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto 
de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.

function factorialize(num) {
  return num;
}

factorialize(5);
*/

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log(factorialize(5)); // 120

// Solution 2
function factorialize2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize2(num - 1);
}

console.log(factorialize2(5)); // 5

// Solution 3
function factorialize3(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  } else {
    return factorialize3(num - 1, factorial * num);
  }
}

console.log(factorialize3(5)); // 4
