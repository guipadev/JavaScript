/*
Use la palabra clave delete para eliminar las propiedades del objeto

Ahora ya sabes qué son los objetos y sus características y ventajas básicas. 
En resumen, son almacenes de clave-valor que proporcionan una forma flexible e intuitiva de estructurar datos 
y proporcionan un tiempo de búsqueda muy rápido. 
A lo largo del resto de estos desafíos, describiremos varias operaciones comunes que puede realizar en los objetos 
para que se sienta cómodo aplicando estas estructuras de datos útiles en sus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. 
Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.

Revisemos nuestro foods ejemplo de objeto por última vez. 
Si quisiéramos eliminar la apples clave, podemos eliminarla usando la delete palabra clave como esta:

delete foods.apples;
*/

/*
Utilice la palabra clave delete para eliminar las claves oranges, plums y strawberries del foods objeto.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
