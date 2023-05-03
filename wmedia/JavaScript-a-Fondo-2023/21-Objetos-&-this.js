/**
 * this y métodos de objetos
 *
 * Como sabes, es MUY común querer acceder al interior de un objeto desde un método.
 * Para ello tenemos this.
 *
 * El valor de this es dinamico
 */

const person = {
  name: "Juan",
  sayHello, // cuando el metodo asociado tiene el mismo nombre no hay necesidad especificarlo sayHello: sayHello
};

let person2 = {
  name: "Laura",
};

function sayHello() {
  console.log(`Hi, I'm ${this.name}`);
}

person.sayHello(); // this === user    Hi, I'm Juan

var name = "Pedro";

sayHello(); // this === window  Hi, I'm undefined, si le pusieramos sayHello(name) => Hi, I'm Pedro

// Recordar que ademas de call, esta apply, bind para forzar a obtener un valor especifico
sayHello.call(person2); // this === window  Hi, I'm Laura
