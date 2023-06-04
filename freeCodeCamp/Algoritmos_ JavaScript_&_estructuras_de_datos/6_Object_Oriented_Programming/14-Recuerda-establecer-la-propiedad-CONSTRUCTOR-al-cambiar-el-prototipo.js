/*
Recuerda establecer la propiedad "constructor" al cambiar el prototipo

Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. 
¡Elimina la propiedad constructor! 
Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. 
Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

duck.constructor === Bird; // false

duck.constructor === Object; // true

duck instanceof Bird; // true

Para solucionar esto, cada vez que un prototipo se establece de forma manual 
a un nuevo objeto, recuerda definir la propiedad constructor:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
-----------------------------------------------------------
Define la propiedad constructor en el Dog prototype.

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
