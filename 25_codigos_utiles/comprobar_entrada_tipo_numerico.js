/*
 * Input Type : Any
 * Output Type: Boolean
 * 

Ejemplos

➀ 10 ⇨ verdadero

➁ Number(10) ⇨ verdadero

➂ nuevo Número(10) ⇨ verdadero

➃ "10" ⇨ falso 
 */

function isOfNumberType(input) {
    return typeof input === 'number' ||
           input instanceof Number;
  }


console.log(isOfNumberType(Number(10)))