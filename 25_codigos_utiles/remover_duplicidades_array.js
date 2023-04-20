/*
 * Input Type : Array
 * Output Type: Array
 *
 * It doesn't modify the original array
 
Examples

➀ [ ] ⇨ [ ]

➁ [1, 2, 1, 3, 2, 4] ⇨ [1, 2, 3, 4]


 */

const repetidos = [1, 2, 1, 3, 2, 4]

console.log(removeDuplicates(repetidos))

function removeDuplicates(input) {
    return [... new Set(input)];
  }
  