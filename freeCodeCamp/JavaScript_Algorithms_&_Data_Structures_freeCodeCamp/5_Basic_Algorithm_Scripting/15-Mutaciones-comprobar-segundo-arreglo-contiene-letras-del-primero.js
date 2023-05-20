/*
Mutaciones

Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene 
todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la 
segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están 
presentes en Alien.

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
*/

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }

  return true;
}

console.log(mutation(["hello", "hey"])); // false

// Solution 2
function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

//Solution 3
function mutation3([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutation([target, test], i + 1);
}
