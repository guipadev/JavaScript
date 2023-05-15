/*
Dónde pertenezco

Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado 
en un arreglo (primer argumento) una vez que éste haya sido ordenado. 
El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande
que 1 (índice 0), pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo
éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).
*/
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

console.log(getIndexToIns([40, 60], 50)) // 1


//Solution 2
function getIndexToIns2(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num)
        return i;
    }
  
    return arr.length;
}

//Solution 3
function getIndexToIns3(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
  }
  
console.log(getIndexToIns3([40, 60], 500)) // 2

//Solution 4
function getIndexToIns4(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
}

console.log(getIndexToIns4([1, 3, 4], 2)) // 1