/*
 * Input Type : None
 * Output Type: Random 6 Characters HEX Code
 
Ejemplos

➀ 1.ª ejecución ⇨ "#c67cbb"

➁ 2ª Ejecución ⇨ "#4ffded"

✩ Los resultados pueden variar cuando corres tú mismo.
 */

console.log(randomHex());

function randomHex() {
    return `#${(0x1000000 + Math.random() * 0xffffff).
      toString(16).slice(1, 7)}`;
}  