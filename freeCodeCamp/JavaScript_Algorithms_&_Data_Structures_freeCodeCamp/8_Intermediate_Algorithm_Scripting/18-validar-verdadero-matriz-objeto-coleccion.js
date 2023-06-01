/*
todo sea verdad
Comprueba si el predicado (segundo argumento) es verdadero en todos los elementos 
de una colección (primer argumento).

En otras palabras, se le proporciona una colección de matriz de objetos. 
El predicado preserá una propiedad de objeto y deberá devolver true si su valor es truthy. 
De lo contrario, regresa false.

En JavaScript, truthy los valores son valores que se traducen truecuando se evalúan 
en un contexto booleano.

Recuerde, puede acceder a las propiedades de los objetos a través de la notación 
de puntos o [] la notación.

function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
*/

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
