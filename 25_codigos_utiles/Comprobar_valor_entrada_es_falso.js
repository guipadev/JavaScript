/*
 * Input Type : Any
 * Output Type: Boolean
 
Examples

➀ undefined ⇨ true

➁ null ⇨ true

➂ { } ⇨ false

➃ [ ] ⇨ false

➄ "" ⇨ true

➅ 0 ⇨ true

➆ false ⇨ true
 */
function isFalsy(input) {
    return !input;
  }
  