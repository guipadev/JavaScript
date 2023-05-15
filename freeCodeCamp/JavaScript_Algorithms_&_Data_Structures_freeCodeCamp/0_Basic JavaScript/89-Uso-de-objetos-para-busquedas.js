/*
Uso de objetos para búsquedas

Los objetos se pueden considerar como un almacenamiento de clave/valor, como un diccionario. 
Si tiene datos tabulares, puede usar un objeto para buscar valores en lugar de una switch declaración o una if/else cadena. 
Esto es más útil cuando sabe que sus datos de entrada están limitados a un cierto rango.

Este es un ejemplo de un objeto de artículo:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];

const articleLink = article["link"];

const value = "title";

const valueLookup = article[value];

articleAuthores la cadena Kaashan Hussain, articleLinkes la cadena https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/y valueLookupes la cadena How to create objects in JavaScript.

Convierta la declaración de cambio en un objeto llamado lookup. 
Úselo para buscar val y asignar la cadena asociada a la result variable.

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

*/

function phoneticLookup(val) {
    let result = "";
  
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val];
  
    return result;
  }
  
  phoneticLookup("charlie");