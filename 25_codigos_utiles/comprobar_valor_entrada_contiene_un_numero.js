/*
 * Input Type : Any
 * Output Type: Boolean
 
Examples

➀ 10 ⇨ true

➁ Number(10) ⇨ true

➂ new Number(10) ⇨ true

➃ "10" ⇨ true

➄ "10ABC" ⇨ false

➅ "10.01" ⇨ true

➆ "10e+14" ⇨ true 
 */
function isOfNumberType(input) {
    return typeof input === 'number' ||
           input instanceof Number;
  }


function isNumber(input) {
    return isOfNumberType(input) ||
           !isNaN(Number(input));
  }

console.log(isNumber("10"))
  