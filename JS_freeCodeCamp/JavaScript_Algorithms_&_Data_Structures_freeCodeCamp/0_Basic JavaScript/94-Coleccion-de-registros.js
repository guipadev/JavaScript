/*
Colección de registros

Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. 
La colección está organizada como un objeto que contiene varios álbumes que también son objetos. 
Cada álbum está representado en la colección con un único id como nombre de propiedad. 
Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. 
No todos los álbumes tienen información completa.

La updateRecords función toma 4 argumentos representados por los siguientes parámetros de función:

records - un objeto que contiene varios álbumes individuales
id - un número que representa un álbum específico en el records objeto
prop - una cadena que representa el nombre de la propiedad del álbum para actualizar
value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum

Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el records objeto completo.
Si value es una cadena vacía, elimine la prop propiedad dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigne el value al de ese álbum prop.
Si prop es tracks y el valor no es una cadena vacía, agregue al value final de la matriz del álbum tracks. 
Primero debe crear esta matriz si el álbum no tiene una tracks propiedad.

Nota:
RecordCollection Se utiliza una copia del objeto para las pruebas. 
No debe modificar directamente el recordCollection objeto.

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

*/
/*
Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el records objeto completo.
Si value es una cadena vacía, elimine la prop propiedad dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigne el value al de ese álbum prop.
Si prop es tracks y el valor no es una cadena vacía, agregue al value final de la matriz del álbum tracks. 
Primero debe crear esta matriz si el álbum no tiene una tracks propiedad.

Nota:
RecordCollection Se utiliza una copia del objeto para las pruebas. 
No debe modificar directamente el recordCollection objeto.
*/
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  //records - un objeto que contiene varios álbumes individuales
  //id - un número que representa un álbum específico en el records objeto
  //prop - una cadena que representa el nombre de la propiedad del álbum para actualizar
  //value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum
 function updateRecords(records, id, prop, value) {
    
    //Si value es una cadena vacía, elimine la prop propiedad dada del álbum.
    if (value === "") 
        delete records[id][prop];

    //Si prop no es tracks y value no es una cadena vacía, asigne el value al de ese álbum prop.    
    else if (prop !== "tracks" && value !== "") 
        records[id][prop] = value;
    
    //Primero debe crear esta matriz si el álbum no tiene una tracks propiedad.    
    else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) 
        records[id][prop] = [value];
    
    //Si prop es tracks y el valor no es una cadena vacía, agregue al value final de la matriz del álbum tracks.    
    else if (prop === "tracks" && value !== "") 
        records[id][prop].push(value);
    
    //Su función siempre debe devolver el records objeto completo.
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');