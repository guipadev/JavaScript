/*
Itera sobre todas las propiedades

Ahora has visto dos tipos de propiedades: 

propiedades directas y propiedades prototype. 

Las propiedades directas se definen directamente en la propia instancia del objeto. 
Y las propiedades prototype se definen en el prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

A continuación, se explica cómo se agregan las propiedades directas de duck 
al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:

let ownProps = [];

let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // ["name"]
console.log(prototypeProps); // ["numLegs"]

--------------------------------------------------------------------------------------------------------------
Agrega todas las propiedades directas de beagle al arreglo ownProps. 
Agrega todas las propiedades prototype de Dog al arreglo prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];

let prototypeProps = [];

for (let propiedades in beagle) {
  if (Dog.hasOwnProperty(propiedades)) {
    ownProps.push(propiedades);
  } else {
    prototypeProps.push(propiedades);
  }
}
