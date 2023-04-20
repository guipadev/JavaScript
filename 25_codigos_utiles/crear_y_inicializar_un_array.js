/*
 * Input Type : Number [Length of Array]
 * Input Type : Any    [ Default Value]
 *
 * Output Type: Array
 
Examples

➀ 5 | 0 ⇨ [0, 0, 0, 0, 0]

➁ 0 | 5 ⇨ [ ]


 */
function initialiseArray(length, value) {
    return Array(length).fill(value);
  }
  
console.log(initialiseArray(5, 1));