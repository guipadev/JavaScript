/*
Add Key-Value Pairs to JavaScript Objects

En su forma más básica, los objetos son solo colecciones de pares clave-valor. 
En otras palabras, son piezas de datos (valores) asignados a identificadores únicos 
llamados propiedades (claves). Mira un ejemplo:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

El código anterior define un objeto de personaje de videojuego de Tekken llamado 
tekkenCharacter. 
Tiene tres propiedades, cada una de las cuales se asigna a un valor específico. 
Si desea agregar una propiedad adicional, como "origen", 
puede hacerlo asignando origen al objeto:

tekkenCharacter.origin = 'South Korea';

Esto usa notación de puntos. 
Si observara el objeto tekkenCharacter, ahora incluira la propiedad de origen. 
Hwoarang también tenia un cabello anaranjado distinto. 
Puede agregar esta propiedad con notación de corchetes haciendo:

tekkenCharacter['hair color'] = 'dyed orange';

Se requiere la notación entre corchetes si su propiedad tiene un espacio 
o si desea usar una variable para nombrar la propiedad. 
En el caso anterior, la propiedad se incluye entre comillas para denotarla como una cadena
y se agregara exactamente como se muestra. 
Sin comillas, se evaluara como una variable y el nombre de la propiedad sera el valor que 
tenga la variable. 

Aquí tienes un ejemplo con una variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

Después de agregar todos los ejemplos, el objeto se vera así:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
*/

/*
Se ha creado un objeto foods con tres entradas. 
Usando la sintaxis de su elección, agregue tres entradas más: 
bananas con un valor de 13,
grapes con un valor de 35, 
y strawberries con un valor de 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods["grapes"] = 35;

const fruta = "strawberries";
foods[fruta] = 27;

console.log(foods);

//Result{apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35}
