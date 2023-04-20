/*
 * Input Type : None
 * Output Type: Number
 
Ejemplos

Para las entradas 3 (como mínimo) y 10 (como máximo),

➀ 1.ª carrera ⇨ 5

➁ 2ª Carrera ⇨ 7

➂ 3ra carrera ⇨ 4

➃ 4ª Carrera ⇨ 3

➄ 5ª Carrera ⇨ 9

✩ Los resultados pueden variar cuando corres tú mismo.
 */

console.log(randomInteger(2, 10));

function randomInteger(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}  