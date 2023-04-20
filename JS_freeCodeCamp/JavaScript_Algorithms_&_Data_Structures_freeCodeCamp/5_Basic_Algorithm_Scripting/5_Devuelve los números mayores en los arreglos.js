/*
Devuelve los números mayores en los arreglos

Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. 
Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder 
a cada miembro del arreglo con la sintaxis arr[i].
*/

function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])) // [5, 27, 39, 1001]


// Solution 2
function largestOfFour2(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
}

// Other Solution 3
function largestOfFour3(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
}

// Other Solution 4
function largestOfFour4(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
} 