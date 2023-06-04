/*
Añade metodos despues de la herencia

Una función constructor que hereda su objeto prototype de una función constructor 
"supertype" puede seguir teniendo sus propios métodos además de los heredados.

Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

function Animal() { }

Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;

Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea 
exclusivo de los objetos Bird. 

Aquí, Bird obtendrá una función fly(). 

Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función 
constructor:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

let duck = new Bird();
duck.eat(); // nom nom nom
duck.fly(); // I'm flying!.
----------------------------------------------------------------------------------------------------------
Añade el código necesario para que el objeto Dog herede de Animal y el constructor 
prototype de Dog sea establecido en Dog. 

A continuación agrega el método bark() al objeto Dog, para que beagle pueda 
"comer" eat() y "ladrar" bark(). 

El método bark() debe imprimir Woof! por consola.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

let beagle = new Dog();
*/

function Animal() {}

Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

let beagle = new Dog();

beagle.eat(); // nom nom nom
beagle.bark(); // Woof!
