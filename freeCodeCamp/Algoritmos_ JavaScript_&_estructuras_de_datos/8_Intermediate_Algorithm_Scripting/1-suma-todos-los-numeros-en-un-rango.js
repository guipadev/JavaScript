/*
Suma todos los números en un rango

Te pasaremos un arreglo de dos números. 
Devuelve la suma de estos dos números más la suma de todos los números entre ellos. 
El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números 
entre 1 y 4 (ambos incluidos) es 10.

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 4])); // 10

//Solution 2
const sumAll2 = (arr) => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
