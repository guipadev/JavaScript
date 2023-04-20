/*
 * Input Type : Non-Negative Integer
 * Output Type: Array
 
Examples

➀ 0 ⇨ [0]

➁ 123 ⇨ [1, 2, 3]

➂ 753289 ⇨ [7, 5, 3, 2, 8, 9]
 */

a = 0;
b = 123;
c = 753289;

console.log(digits(c));

function digits(input) {
    return [... `${input}`].map(d => parseInt(d));
  }
  