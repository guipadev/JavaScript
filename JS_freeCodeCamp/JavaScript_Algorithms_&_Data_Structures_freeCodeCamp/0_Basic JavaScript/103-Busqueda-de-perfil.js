/*
Búsqueda de perfil

Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una lookUpProfile función que toma name y una propiedad() como argumentos. prop

La función debe verificar si name es un contacto real firstName y si la propiedad dada (prop) 
es una propiedad de ese contacto.

Si ambos son verdaderos, devuelva el "valor" de esa propiedad.

Si name no corresponde a ningún contacto, devuelva la cadena No such contact.

Si prop no corresponde a ninguna propiedad válida de un contacto que coincida, name devuelva la cadena No such property.

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

*/

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
//La función debe verificar si name es un contacto real firstName y si la propiedad dada (prop) 
//es una propiedad de ese contacto. 
function lookUpProfile(name, prop) {

    for (let i = 0; i < contacts.length; i++) {
        
        //Si ambos son verdaderos, devuelva el "valor" de esa propiedad.
        if (contacts[i].firstName === name) {
          if (prop in contacts[i]) {
            return contacts[i][prop];
          } else {
            //Si name no corresponde a ningún contacto, devuelva la cadena No such contact.
            return "No such property";
          }
        }
    }    
    //Si prop no corresponde a ninguna propiedad válida de un contacto que coincida, name devuelva la cadena No such property.
    return "No such contact";
}
  
lookUpProfile("Akira", "likes");