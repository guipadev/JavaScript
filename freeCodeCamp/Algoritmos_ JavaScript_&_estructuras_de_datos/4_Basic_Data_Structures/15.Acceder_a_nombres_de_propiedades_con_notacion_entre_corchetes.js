/*
Access Property Names with Bracket Notation

En el primer desafio de objetos mencionamos el uso de la notación entre corchetes 
como una forma de acceder a los valores de propiedad mediante la evaluación de una variable. 

Por ejemplo, imagine que nuestro objeto foods se utiliza en un programa para la caja 
registradora de un supermercado. 

Tenemos alguna función que establece el alimento seleccionado y queremos verificar nuestro 
objeto alimentos para la presencia de ese alimento. Esto podría verse así:

let selectedFood = getCurrentFood(scannedItem);

let inventory = foods[selectedFood];

Este código evaluará el valor almacenado en la selectedFood variable y devolverá el 
valor de esa clave en el foods objeto, o undefined si no está presente. 
La notación de corchetes es muy útil porque a veces las propiedades de los objetos 
no se conocen antes del tiempo de ejecución o necesitamos acceder a ellos de una manera 
más dinámica.
*/

/*
Hemos definido una función, checkInventory, que recibe un elemento escaneado como argumento. 
Devuelve el valor actual de la scannedItem clave en el foods objeto. 
Puede suponer que solo se proporcionarán claves válidas como argumento para checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));
