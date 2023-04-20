/*
 * Input Type : Object
 * Output Type: Boolean
 
Examples

➀ null ⇨ true

➁ [ ] ⇨ true

➂ { } ⇨ true

➃ {x: 10} ⇨ false
 */
function isEmptyObject(input) {
    for (const key in input) {
      if (input.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  