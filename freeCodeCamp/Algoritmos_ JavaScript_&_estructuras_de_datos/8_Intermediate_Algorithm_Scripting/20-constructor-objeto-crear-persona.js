/*
hacer una persona
Complete el constructor de objetos con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Ejecute las pruebas para ver el resultado esperado para cada método. 
Los métodos que toman un argumento deben aceptar solo un argumento y 
tiene que ser una cadena. 
Estos métodos deben ser los únicos medios disponibles para interactuar con el objeto.


const Person = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
*/

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");

console.log(bob.getFullName()); // Bob Ross
