//Busca y reemplaza
/*
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. 
Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
*/


function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        // Change the after word to be uncapitalized before we use it.
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
    
    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")) // A quick brown fox leaped over the lazy dog