/*
Modificar una matriz almacenada en un objeto

Ahora ha visto todas las operaciones básicas para los objetos de JavaScript. 
Puede agregar, modificar y eliminar pares clave-valor, 
verificar si existen claves e iterar sobre todas las claves en un objeto. 
A medida que continúe aprendiendo JavaScript, verá aplicaciones de objetos aún más versátiles. 
Además, las lecciones de Estructuras de datos ubicadas en la sección Preparación para la entrevista 
de codificación del plan de estudios también cubren los objetos ES6 Map y Set, 
los cuales son similares a los objetos ordinarios pero brindan algunas características adicionales. 
Ahora que ha aprendido los conceptos básicos de matrices y objetos, 
¡está completamente preparado para comenzar a abordar problemas más complejos usando JavaScript!

Eche un vistazo al objeto que hemos proporcionado en el editor de código. 
El user objeto contiene tres llaves. 
La data clave contiene cinco claves, una de las cuales contiene una matriz de friends. 
A partir de esto, puede ver cuán flexibles son los objetos como estructuras de datos. 
Hemos comenzado a escribir una función addFriend. 
Termine de escribirlo para que tome un user objeto y agregue el nombre del friend argumento 
a la matriz almacenada user.data.friends y devuelva esa matriz.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
*/

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete")); // [ 'Sam', 'Kira', 'Tomo', 'Pete' ]
