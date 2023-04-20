//Letras faltantes
/*
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.
*/

function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
    
    str
        .split("")
        .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });

    return missing;
}

console.log(fearNotLetter("abce"))  //  d