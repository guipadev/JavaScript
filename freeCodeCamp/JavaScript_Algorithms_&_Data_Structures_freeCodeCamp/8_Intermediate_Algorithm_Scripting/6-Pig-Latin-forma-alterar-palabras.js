/*
Jerga
Pig Latin es una forma de alterar palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, 
muévala al final de la palabra y añádala ay.

- Si una palabra comienza con una vocal, solo agregue wayal final.

Traduce la cadena provista a Pig Latin. 
Se garantiza que las cadenas de entrada son palabras en inglés en minúsculas.

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

let rta = translatePigLatin("consonant");

console.log(rta); // onsonantcay
