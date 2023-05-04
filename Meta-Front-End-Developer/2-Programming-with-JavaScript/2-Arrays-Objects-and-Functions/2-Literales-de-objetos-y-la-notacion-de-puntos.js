/**
Objetos literales y la notación de puntos

Una de las formas más comunes de construir un objeto en JavaScript es usar la sintaxis literal del objeto:  {} .

Para poder acceder a este objeto literal, es muy común asignarlo a una variable, como por ejemplo:
 */

let usuario = {};

/**
Ahora se asigna un objeto literal a la variable  usuario, lo que significa que el objeto al que está vinculado
puede extenderse y manipularse de innumerables maneras.

A veces, un objeto completo se puede construir de inmediato, usando la sintaxis literal del objeto, 
especificando las propiedades del objeto, delimitadas como pares clave-valor, usando la sintaxis que 
ya se trató en un elemento de lección anterior en esta lección.

Aquí hay uno de esos objetos construidos previamente:
 */

var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};

/**
La belleza de esta sintaxis es que es muy fácil de leer.

Básicamente consta de dos pasos:

1. Declarar una nueva variable y asignarle un objeto literal; en otras palabras, esto:  
var AssistantManager = {} 

2. Asignando los valores a cada una de las claves del objeto, usando el operador de asignación,  =

Tenga en cuenta que es muy fácil construir cualquier tipo de objeto en JavaScript utilizando esta 
sintaxis de ejemplo.

Por ejemplo, aquí hay un   objeto de tabla :
 */

var tabla = {
  piernas: 3,
  color: "brown",
  precioUSD: 100,
};

// Para acceder al  objeto de la tabla, simplemente puedo consolar el registro de todo el objeto:
console.log(tabla); // {legs: 3, color: 'brown', priceUSD: 100}

// Además, puedo consolar el registro de cualquier propiedad individual, como esta:
console.log(table.color); // 'brown'

/**
 * Ahora que tengo esta "receta de sintaxis", puedo construir cualquier otro objeto de manera similar:
 */

var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};

/**
 Un enfoque alternativo para crear objetos es guardar primero un literal de objeto vacío en una variable, 
 luego usar la notación de puntos para declarar nuevas propiedades sobre la marcha y usar el operador 
 de asignación para agregar valores a esas propiedades; Por ejemplo:
 */
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

// Además, nada me impide combinar los dos enfoques. Por ejemplo:
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

// Esta flexibilidad también significa que puedo actualizar las propiedades ya existentes, no solo agregar otras nuevas:
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
