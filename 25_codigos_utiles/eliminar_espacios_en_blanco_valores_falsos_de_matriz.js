/*
 * Input Type : Array
 * Output Type: Array
 *
 * It doesn't modify the original array
 
Examples

➀ [ ] ⇨ [ ]

➁ [1, 2, null, false, 3, undefined] ⇨ [1, 2, 3]
*/

let matriz = [1, 2, null, false, 3, undefined]

console.log(removeBlanks(matriz))

function removeBlanks(input) {
    return input?.filter(Boolean);
  }
  