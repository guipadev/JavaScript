/*
 * Input Type : String
 * Output Type: String
 
Examples

➀ "" ⇨ ""

➁ "i am bored" ⇨ "I am bored"

➂ "i am bored. let's play." ⇨ "I am bored. Let's play."
 */
function sentenceCase(input) {
    return input?.toLowerCase().replace(/(^\w)|\.\s+(\w)/gm,
                                        s => s.toUpperCase());
  }
  