/*
Monito Fornido

Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size 
(segundo argumento) y los devuelva como un arreglo bidimensional.

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [['a', 'b'], ['c', 'd']]

// Solution 2
function chunkArrayInGroups2(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// Solution 3
function chunkArrayInGroups3(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups3(["a", "b", "c", "d"], 2));

// Solution four
function chunkArrayInGroups4(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups4(["a", "b", "c", "d"], 2));

// Solution 5
function chunkArrayInGroups5(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups5(arr.slice(size), size)
    );
  }
}
