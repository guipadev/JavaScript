/*
 * Input Type : String
 * Output Type: String
 
Examples

➀ "" ⇨ ""

➁ "Hello" ⇨ "olleH"

➂ "Hello, World!" ⇨ "!dlroW ,olleH"
 */
function reverseString(input) {
    return input?.split('').reverse().join('');
  }
  