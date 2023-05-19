/*
Haz que la primera letra de una palabra este en mayúscula

Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. 
Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras 
como the y of.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
*/

String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot

//Solutcion 2
function titleCase2(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

// Solution 3
function titleCase3(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
