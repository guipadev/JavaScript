/*
 * Input Type(s): Array(s) [Zero to Many]
 * Output Type  : Array
 *
 * It doesn't modify the original arrays

Ejemplos

➀ [1, 2] ⇨ [1, 2]

➁ [1, 2] | [3] ⇨ [1, 2, 3]

➂ [1, 2] | [3] | [4, [5]] ⇨ [1, 2, 3, 4, [5]]
*/

let a = [1, 2] 
let b = [3] 
let c = [4, [5]]

console.log(mergeArrays(a, b, c))

function mergeArrays(...input) {
    return input?.flat(1);
  }
  