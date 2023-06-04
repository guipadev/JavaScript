/*
Buscadores guardianes

Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase 
un "detector de verdad". 
Esto significa que dado un elemento x, el "detector de verdad" es pasado si func(x) es true. 
Si ningún elemento pasa la prueba. la función debería devolver undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
*/

function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0)); // 2

// Solution 2
function findElement2(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

//Solution 3
function findElement3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

//Solution 4
function findElement4(arr, func) {
  return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}
