/*
Manipulación de objetos complejos

A veces, es posible que desee almacenar datos en una estructura de datos flexible. 
Un objeto JavaScript es una forma de manejar datos flexibles. 
Permiten combinaciones arbitrarias de cadenas, números, valores booleanos, matrices, funciones y objetos.

He aquí un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

Esta es una matriz que contiene un objeto dentro. 
El objeto tiene varios metadatos sobre un álbum. 
También tiene una formats matriz anidada. 
Si desea agregar más registros de álbumes, puede hacerlo agregando registros a la matriz de nivel superior. 
Los objetos contienen datos en una propiedad, que tiene un formato de clave-valor. 
En el ejemplo anterior, "artist": "Daft Punk" es una propiedad que tiene una clave de artist y un valor de Daft Punk.

Nota: 
Deberá colocar una coma después de cada objeto de la matriz, a menos que sea el último objeto de la matriz.

Agregue un nuevo álbum a la myMusic matriz. 
Suma artist y title cadenas, release_year número y una formats matriz de cadenas.

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

*/

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "JBalvin",
        "title": "Colores",
        "release_year": 2020,
        "formats": [
            "YouTube",
            "Spotify",
            "Radio"
        ],
        "gold": true
      }
];