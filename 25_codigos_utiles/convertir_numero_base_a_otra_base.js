/*
 * Input Type(1): String
 * Input Type(2): Number
 * Input Type(3): Number
 *
 * Output Type  : String
 * 
 Examples

➀ "15" | 10 | 2 ⇨ "1111"

➁ "F076" | 16 | 8 ⇨ "170166"
 */
function convertBase(input, base1, base2) {
    return parseInt(input, base1).toString(base2);
  }
  