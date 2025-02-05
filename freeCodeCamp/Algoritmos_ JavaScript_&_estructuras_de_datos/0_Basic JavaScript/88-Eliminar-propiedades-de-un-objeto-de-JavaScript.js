/*
Eliminar propiedades de un objeto de JavaScript

También podemos eliminar propiedades de objetos como este:

delete ourDog.bark;

Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

Después de la última línea que se muestra arriba, ourDog se ve así:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}

Eliminar la tails propiedad de myDog. Puede utilizar la notación de puntos o corchetes.

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

*/

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails;