/*
Cambia el prototipo a un nuevo objeto

Hasta ahora, has estado agregando propiedades al prototype (prototipo) individualmente:

Bird.prototype.numLegs = 2;

Esto se vuelve tedioso después de varias propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

Una forma más eficiente es establecer el prototype a un nuevo objeto 
que ya contenga las propiedades. 
De esta forma, las propiedades son añadidas todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
--------------------------------------------------------------------------------------
Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog,
estableciendo prototype a un nuevo objeto.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
