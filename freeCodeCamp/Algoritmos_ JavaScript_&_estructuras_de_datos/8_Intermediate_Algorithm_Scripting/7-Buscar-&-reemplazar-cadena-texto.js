/*
Buscar y reemplazar
Realice una búsqueda y reemplace en la oración utilizando los argumentos proporcionados 
y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazar.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es con lo que reemplazará el segundo argumento (después).

Nota: 
Preserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando lo reemplace. 
Por ejemplo, si desea reemplazar la palabra Book con la palabra dog, debe reemplazarse como Dog

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
let rta = myReplace(
  "A quick brown fox jumped over the lazy dog",
  "jumped",
  "leaped"
);

console.log(rta); // A quick brown fox leaped over the lazy dog
