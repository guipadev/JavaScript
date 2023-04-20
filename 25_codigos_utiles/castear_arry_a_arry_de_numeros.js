/*
 * Input Type : Array
 * Output Type: Array
 *
 * It doesn't modify the original array
 
Examples

➀ [ ] ⇨ [ ]

➁ ["1", 2, false, "3a", undefined] ⇨ [1, 2, 0, NaN, NaN]
 */

const castear = ["1", 2, false, "3a", undefined]

console.log(castToNumbers(castear))

function castToNumbers(input) {
    return input?.map(Number);
  }
  