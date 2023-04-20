/*
 * Input Type : Array
 * Output Type: Array
 *
 * It doesn't modify the original array
 
Ejemplos

➀ [1] ⇨ [1]

➁ [[[1, 2]], 3] ⇨ [1, 2, 3]

➂ [[[1, 2], 3], [[4]], 5] ⇨ [1, 2, 3, 4, 5]
 */

let matrices = [[[1, 2], 3], [[4]], 5]

console.log(flatCompletely(matrices))

function flatCompletely(input) {
    return input?.flat(Infinity);
  }
  