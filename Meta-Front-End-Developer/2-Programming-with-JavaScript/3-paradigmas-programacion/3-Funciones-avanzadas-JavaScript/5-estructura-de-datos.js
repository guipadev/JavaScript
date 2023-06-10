/*
En esta lectura, aprenderá sobre algunos de los ejemplos más comunes de estructuras de datos.

El enfoque será trabajar con las estructuras de datos Object, Array, Map y Set en JavaScript, a través de una serie de ejemplos.

Tenga en cuenta que esta lectura no incluirá una discusión de algunas estructuras de datos que existen en otros lenguajes, 
como colas o listas enlazadas. Aunque estas estructuras de datos (¡y otras estructuras de datos también!) se pueden codificar
 de forma personalizada en JavaScript, la naturaleza avanzada de estos temas y la dificultad para implementar ejercicios
  relacionados significa que están fuera del alcance de esta lectura.

Trabajando con arreglos en JavaScript
Anteriormente, cubrió una gran cantidad de conceptos relacionados con cómo trabajar con matrices de JavaScript.

Sin embargo, todavía hay algunos temas importantes que se pueden cubrir, y uno de ellos es, por ejemplo, 
trabajar con algunos métodos integrados.

En esta lectura, la atención se centra en tres métodos específicos que existen en las matrices:

 para cada 

filtrar

 mapa

Exploremos estos métodos.

El  método forEach()
Las matrices en JavaScript vienen con un método útil que le permite recorrer cada uno de sus miembros.

Aquí está la sintaxis básica:
*/

const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

/*
El resultado de ejecutar el código anterior es este:  
0. kiwi
1. mango
2. apple
3. pear
*/

/*
Para explicar la sintaxis, el  método forEach()  acepta  una función que funcionará en cada elemento de la matriz . 
El primer parámetro de esa función es el propio elemento de matriz actual, y el segundo parámetro (opcional) es el índice.

Muy a menudo, la función que necesita usar el  método forEach()  se pasa directamente a la llamada al método, así:
*/

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${fruit}`);
});

/*
Esto hace que el código sea más compacto, pero quizás un poco más difícil de leer. Para aumentar la legibilidad, 
a veces se utilizan funciones de flecha. Puede obtener más información sobre las funciones de flecha en la lectura adicional.

El   método de filtro()
Otro método muy útil en la matriz es el  método filter()  . Filtra sus matrices  en función de una prueba específica . 
Se devuelven los elementos de la matriz que pasan la prueba.

Aquí hay un ejemplo:
*/
const nums = [0, 10, 20, 30, 40, 50];

nums.filter(function (num) {
  return num > 20; // [30,40,50]
});

/*
Similar al  método forEach() , el  método filter()  también acepta una función y esa función realiza algún trabajo 
en cada uno de los elementos de la matriz.

El  método del mapa
Finalmente, hay un  método de mapa muy útil  .

Este método se usa para asignar cada elemento de la matriz a otro elemento de la matriz, según el trabajo que se 
realice dentro de la función que se pasa al mapa como parámetro.

Por ejemplo:
*/

[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10; // [0,1,2,3,4,5]
});

/*
Como ya se discutió, elegir una estructura de datos adecuada afecta el mismo código que puede escribir. 
Esto se debe a que la estructura de datos en sí viene con alguna funcionalidad integrada que facilita la 
realización de ciertas tareas o las hace más difíciles o incluso imposibles sin convertir su código a una estructura 
de datos adecuada.

Ahora que ha cubierto los métodos, exploremos cómo trabajar con diferentes estructuras de datos integradas en JavaScript.
*/

/*
Trabajar con objetos en JavaScript
Mucha de la información sobre cómo trabajar con objetos en JavaScript ya se ha cubierto en este curso.

El siguiente ejemplo demuestra cómo usar la estructura de datos del objeto para completar una tarea específica. 
Esta tarea es convertir un objeto en una matriz:
*/

const result = [];

const drone = {
  speed: 100,
  color: "yellow",
};

const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});

console.log(result); // ['speed',100,'color','yellow']

/*
Aunque esto es posible y funciona, tener que hacer algo como esto puede significar que no ha elegido la
estructura de datos correcta para trabajar en su código.

Por otro lado, a veces no puede elegir la estructura de datos con la que está trabajando. 
Quizás esos datos provienen de un proveedor de datos de terceros y todo lo que puede hacer es codificar 
su programa para que los consuma. 
Aprenderá más sobre el intercambio de datos en la web cuando aprenda sobre JSON (Notación de objetos de JavaScript).
*/

// Trabajar con mapas en JavaScript
// Para hacer un nuevo mapa, puede usar el  constructor de mapas  :
new Map();

/*
Un mapa puede sentirse muy similar a un objeto en JS.

Sin embargo, no tiene herencia. ¡Sin prototipos! Esto lo hace útil como almacenamiento de datos.

Por ejemplo:
*/

let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// Para obtener un valor específico, debe usar el  método get()  . Por ejemplo:
bestBoxers.get(1); // 'The Champion'

/*
Trabajar con conjuntos en JavaScript
Un conjunto es una colección de valores únicos.

Para construir un nuevo conjunto, puede usar el   constructor Conjunto :
*/
new Set();

/*
El  constructor Set  puede, por ejemplo, aceptar una matriz.

Esto significa que podemos usarlo para filtrar rápidamente una matriz en busca de miembros únicos.
*/
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];

const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits); // {'apple', 'pear', 'plum'}

/*
Otras estructuras de datos en JavaScript
Además de las estructuras de datos integradas en JavaScript, es posible crear estructuras de 
datos personalizadas no nativas.

Estas estructuras de datos vienen integradas de forma nativa en algunos otros lenguajes de programación
o incluso esos otros lenguajes de programación no las admiten de forma nativa.

Algunas estructuras de datos más avanzadas que no se han cubierto incluyen:

- Cruz
- Listas enlazadas (enlazadas simple y doblemente enlazadas)
- Árboles
- gráficos

Para obtener recursos sobre la construcción de estas estructuras de datos, consulte la lectura adicional.


*/
