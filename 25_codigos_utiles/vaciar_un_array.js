/*
 * Input Type : Array
 * Output Type: Array
 *
 * ⚠️ It empties the original array
 
Examples

➀ [ ] ⇨ [ ]

➁ [1, 2, 3, 4, 5] ⇨ [ ]


*/
function emptyArray(input) {
    input?.length = 0;
    return input;
  }
  