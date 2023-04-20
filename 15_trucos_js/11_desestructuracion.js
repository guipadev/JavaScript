/*
11. Desestructuración
La técnica de desglosar los elementos de la matriz y las propiedades del objeto como variables se llama destructuring. Veámoslo con algunos ejemplos,

Formación
Aquí tenemos una variedad de emojis,

*/
let emojis = ['🔥', '⏲️', '🏆', '🍉'];

//Para desestructurar, usaríamos una sintaxis como la siguiente,

let [fire, clock, , watermelon] = emojis;

// Esto es lo mismo que hacer, let fire = emojis[0];pero con mucha más flexibilidad. ¿Te has dado cuenta de que acabo de ignorar el emoji del trofeo usando un espacio vacío en el medio? Entonces, ¿cuál será el resultado de esto?

console.log(fire, clock, watermelon);

//Permítanme presentarles algo llamado rest operador aquí. Si desea desestructurar una matriz de modo que desee asignar uno o más elementos a las variables y colocar el resto en otra matriz, puede hacerlo usando ...restcomo se muestra a continuación.

let [fruit, ...rest] = emojis;
console.log(rest);

/*
Objeto
Al igual que las matrices, también podemos desestructurar objetos.
*/

let shape = {
  name: 'rect',
  sides: 4,
  height: 300,
  width: 500
};

// Desestructurando de tal manera que obtenemos el nombre, los lados en un par de variables y el resto en otro objeto.


let {name, sides, ...restObj} = shape;
console.log(name, sides);
console.log(restObj);

// Lea más sobre este tema desde aquí .
// https://javascript.info/destructuring-assignment