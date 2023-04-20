/*
 * Input Type : String
 * Output Type: String
 */

/*
Examples

➀ "" ⇨ ""

➁ "michael" ⇨ "Michael"

➂ "michael jackson" ⇨ "Michael Jackson"
*/

function sentenceCase(input) {
  return input?.toLowerCase().replace(/(^\w)|\.\s+(\w)/gm,
                                      s => s.toUpperCase());
}


