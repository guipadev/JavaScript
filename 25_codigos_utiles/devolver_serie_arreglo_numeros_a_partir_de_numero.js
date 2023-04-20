/*
 * Input Type : Number
 * Output Type: Array
 *
 * Input shouldn't be Negative, Infinity, -Infinity, NaN
 
Ejemplos

➀ 0 ⇨ [ ]

➁ 1 ⇨ [0]

➂ 10 ⇨ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const num = 10;

console.log(series(num));

function series(limit) {
    return [... Array(limit).keys()];
  }
  