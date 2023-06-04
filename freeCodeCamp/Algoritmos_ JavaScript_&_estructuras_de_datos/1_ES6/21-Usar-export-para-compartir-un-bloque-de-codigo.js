/*
Imagine un archivo llamado math_functions.js que contiene varias funciones relacionadas con 
operaciones matemáticas. 
Uno de ellos se almacena en una variable, add que toma dos números y devuelve su suma. 
Desea utilizar esta función en varios archivos JavaScript diferentes. 
Para compartirlo con estos otros archivos, primero debe hacerlo export.

export const add = (x, y) => {
  return x + y;
}

Lo anterior es una forma común de exportar una sola función, pero puede lograr lo mismo así:

const add = (x, y) => {
  return x + y;
}

export { add };

Cuando exporta una variable o función, puede importarla en otro archivo y usarla sin tener que 
volver a escribir el código. 
Puede exportar varias cosas repitiendo el primer ejemplo para cada cosa que desee exportar o 
colocándolas todas en la declaración de exportación del segundo ejemplo, así:

export { add, subtract };

Hay dos funciones relacionadas con cadenas en el editor. 
Exporte ambos usando el método de su elección.

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
*/

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString };
