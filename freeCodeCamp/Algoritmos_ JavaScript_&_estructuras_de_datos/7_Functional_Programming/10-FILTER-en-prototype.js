/*
Implementa el método filter en un prototipo

Puedes aprender mucho sobre el método filter si implementas tu propia versión. 
Se recomienda utilizar un bucle for o Array.prototype.forEach().
---------------------------------------------------------------------------------------------------------------
Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). 
No debes utilizar el método incorporado filter. 
Se puede acceder a la instancia Array en el método myFilter usando this.
*/

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
