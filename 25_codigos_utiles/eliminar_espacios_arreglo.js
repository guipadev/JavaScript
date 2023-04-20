/*
 * Input Type : Array
 * Output Type: Array
 *
 * It doesn't modify the original array

Ejemplos

➀ [1, 2, 3] ⇨ [1, 2, 3]

➁ [1, 2, fale, 3] ⇨ [1, 2, false, 3]

➂ [1, 2, null, 3] ⇨ [1, 2, null, 3]

➃ [1, 2, undefined, 3] ⇨ [1, 2, undefined, 3]

➄ [1, 2, , 3] ⇨ [1, 2, 3]
*/

let ejemplo = [1, 2, , 3]

console.log(removeHoles(ejemplo))

function removeHoles(input) {
    return input?.flat(0);
}
  