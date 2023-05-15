/*
Recuerda establecer la propiedad "constructor" al cambiar el prototipo

Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. 
¡Elimina la propiedad constructor! 
Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. 
Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
En orden, estas expresiones se evaluarían como false, true y true.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, 
recuerda definir la propiedad constructor:

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
*/

function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};