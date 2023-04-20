/*
 * Input Type : Any
 * Output Type: Boolean

Examples

➀ undefined ⇨ true

➁ null ⇨ true

➂ "" ⇨ false

➃ false ⇨ false 
*/
function isNullish(input) {
    return input == undefined;
  }
  