/*
Implementa el método filter en un prototipo

Puedes aprender mucho sobre el método filter si implementas tu propia versión. 
Se recomienda utilizar un bucle for o Array.prototype.forEach().
---------------------------------------------------------------------------------------------------------------
Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). 
No debes utilizar el método incorporado filter. 
Se puede acceder a la instancia Array en el método myFilter usando this.
*/

// La variable global
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)  // [23, 65, 5]