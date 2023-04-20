/*
Implementa map en un prototipo

Como has visto anteriormente, al aplicar Array.prototype.map(), o simplemente map(), 
el método map devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado. 
Esto tampoco altera el arreglo original, siempre y cuando su función callback no lo haga.

En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas. 
Además, toma otra función como argumento.

Puedes aprender mucho sobre el método map si implementas tu propia versión. 
Se recomienda utilizar un bucle for o Array.prototype.forEach().
-----------------------------------------------------------------------------------------------------------
Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). 
No debes utilizar el método incorporado map. 
Se puede acceder a la instancia de Array en el método myMap usando this.
*/

// La variable global
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
    return i < this.length
      ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
      : arr;
  };

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s) // [46, 130, 196, 10]