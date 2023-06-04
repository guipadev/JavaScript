/*
Construir objetos de JavaScript

Es posible que haya escuchado el término object antes.

Los objetos son similares a arrays, excepto que en lugar de usar índices para acceder y modificar sus datos, 
accede a los datos en los objetos a través de lo que se llama properties.

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, 
como un gato.

Aquí hay un objeto gato de muestra:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legs y tails. 
Sin embargo, también puede usar números como propiedades. 
Incluso puede omitir las comillas para las propiedades de cadena de una sola palabra, de la siguiente manera:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

Sin embargo, si su objeto tiene propiedades que no son cadenas, JavaScript las encasillará automáticamente como cadenas.

Cree un objeto que represente a un perro llamado myDog que contenga las propiedades name(una cadena), legs, tails y friends.

Puede establecer estas propiedades de objeto en los valores que desee, siempre que name sea una cadena, 
legs sean tails números y friends sea una matriz.

const myDog = {
  // Only change code above this line
};
*/

const myDog = {
    "name": "Luna",
    "legs": 4,
    "tails": 1,
    "friends": ["Water", "Lina"]
  };