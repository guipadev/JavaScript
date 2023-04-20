/*
 * Input Type : None
 * Output Type: Random Characters (0-9, A-Z, a-z)

Ejemplos

➀ 1ra Ejecución ⇨ "gpr0pu9hb38 "

➁ 2ª Ejecución ⇨ "dva09gsdp9e"

✩ Los resultados pueden variar cuando corres tú mismo.
*/

console.log(randomID()); 

function randomID() {
    return Math.random().toString(36).substring(2) || '0';
}
  