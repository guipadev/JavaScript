/*
 * Input Type : Array
 * Output Type: Array
 *
 * ⚠️ It modifies the original array
 
Ejemplos

➀ [1, 2, 3, 4, 5] ⇨ [4, 1, 3, 2, 5]

➁ [1, 2, 3, 4, 5] ⇨ [5, 2, 1, 4, 3]
 */


let arreglo = [1, 2, 3, 4, 5]

console.log(shuffle(arreglo))

function shuffle(input) {
    return input.sort(() => Math.random() - 0.5);
  }
  