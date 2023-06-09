// 1. ¿Qué se imprimirá cuando se ejecute el siguiente código?

class Cake {
  constructor(lyr) {
    this.layers = lyr + 1;
  }
}

var result = new Cake(1);
console.log(result.layers); // 2

// 2. Cuando una clase extiende otra clase, esto se llama ____________.
// Herencia

// 3. ¿Qué se imprimirá cuando se ejecute el siguiente código?
class Animal {
  constructor(lg) {
    this.legs = lg;
  }
}

class Dog extends Animal {
  constructor() {
    super(4);
  }
}

var result = new Dog();
console.log(result.legs); // 4

// 4. ¿Qué se imprimirá cuando se ejecute el siguiente código?
class Animal {}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise); // undefined

// 5. ¿Qué se imprimirá cuando se ejecute el siguiente código?
class Person {
  sayHello() {
    console.log("Hello");
  }
}

class Friend extends Person {
  sayHello() {
    console.log("Hey");
  }
}

var result = new Friend();
result.sayHello(); // Hey
