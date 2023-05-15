/*
Sobrescribir métodos heredados

En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) 
de otro objeto al referenciar su prototype:

ChildObject.prototype = Object.create(ParentObject.prototype);
Luego, el ChildObject recibió sus propios métodos al encadenarlos a su prototype:

ChildObject.prototype.methodName = function() {...};
Es posible sobreescribir un método heredado. 
Se hace de la misma manera: agregando un método a ChildObject.prototype usando el mismo 
nombre de método que el que se va a sobrescribir. 
Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

function Animal() { }

Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

Si tienes una instancia de let duck = new Bird(); y llamas a duck.eat(), 
así es como JavaScript busca el método en la cadena prototype de duck:

duck => ¿Está eat() definido aquí? No.
Bird => ¿Está eat() definido aquí? => Sí. Ejecútala y detén la búsqueda.
Animal => eat() también está definido, pero JavaScript dejó de buscar antes de llegar a este nivel.
Object => JavaScript dejó de buscar antes de llegar a este nivel.
------------------------------------------------------------------------------------------------------
Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, 
this is a flightless bird.
*/

function Bird() { }

Bird.prototype.fly = function() { 
    return "I am flying!"; 
};

function Penguin() { }

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;


Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
};



let penguin = new Penguin();
console.log(penguin.fly()); // I am flying!