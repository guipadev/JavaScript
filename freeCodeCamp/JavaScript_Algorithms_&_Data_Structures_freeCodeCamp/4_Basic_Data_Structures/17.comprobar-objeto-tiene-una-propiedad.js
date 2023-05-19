/*
Comprobar si un objeto tiene una propiedad
Ahora podemos agregar, modificar y eliminar claves de objetos. 
Pero, ¿y si solo quisiéramos saber si un objeto tiene una propiedad específica? 
JavaScript nos proporciona dos formas diferentes de hacer esto. 
Uno usa el hasOwnProperty() método y el otro usa la in palabra clave. 
Si tenemos un objeto users con una propiedad de Alan, 
podemos verificar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');

'Alan' in users;

Ambos regresarían true.
*/

/*
Termine de escribir la función para que regrese true si el objeto que se le pasó contiene 
los cuatro nombres, Alan, Jeffy Sarahregresa Ryande falselo contrario.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  );
}

/*
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}
*/

console.log(isEveryoneHere(users));
