/*
Acceso a objetos anidados

Se puede acceder a las subpropiedades de los objetos encadenando la notación de punto o corchete.

Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 sería la cadena secrets, y 
ourStorage.desk.drawer sería la cadena stapler.

Accede al myStorage objeto y asigna el contenido de la glove box propiedad a la gloveBoxContents variable. 
Siempre que sea posible, use la notación de puntos para todas las propiedades; de lo contrario, 
use la notación de corchetes.

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;

*/

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];