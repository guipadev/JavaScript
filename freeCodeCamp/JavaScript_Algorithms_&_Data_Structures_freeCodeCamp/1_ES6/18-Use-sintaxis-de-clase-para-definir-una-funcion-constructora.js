/*
ES6 proporciona una nueva sintaxis para crear objetos, utilizando la palabra clave class.

En ES5, se puede crear un objeto definiendo una constructor función y usando la new palabra
clave para instanciar el objeto.

En ES6, una class declaración tiene un constructor método que se invoca con la new palabra clave. 
Si el constructor método no está definido explícitamente, entonces está definido implícitamente 
sin argumentos.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
Cabe señalar que la class palabra clave declara una nueva función, a la que se agrega un constructor. 
Este constructor se invoca cuando new se llama para crear un nuevo objeto.

Nota: UpperCamelCase debe usarse por convención para los nombres de clase de ES6, 
como se SpaceShuttle usó anteriormente.

El constructor método es un método especial para crear e inicializar un objeto creado con una clase. 
Aprenderá más al respecto en la sección de Programación Orientada a Objetos de la Certificación de 
Estructuras de Datos y Algoritmos de JavaScript.

Use la class palabra clave y escriba a constructor para crear la Vegetable clase.

La Vegetable clase le permite crear un objeto vegetal con una propiedad name que se pasa al constructor.

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
*/

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");

console.log(carrot.name); // Should display 'carrot'
