/*
 * Input Type : None
 * Output Type: Boolean
 
Ejemplos

➀ 1.ª ejecución ⇨ verdadero

➁ 2ª Ejecución ⇨ falso

➂ 3 ra Ejecución ⇨ falso

➃ 4 a Ejecución ⇨ verdadero

➄ 5ª Ejecución ⇨ falso

✩ Los resultados pueden variar cuando corres tú mismo.
 */

console.log(randomBoolean())

function randomBoolean() {
    return Math.random() >= 0.5;
  }
  