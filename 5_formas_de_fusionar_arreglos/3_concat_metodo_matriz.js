/*
El objeto JavaScript Arraytiene varios métodos prácticos. Uno de ellos es el 
concat()método. 
El uso principal del método concat es fusionar dos matrices.
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// Merge arrays
const merged = arr1.concat(arr2);

console.log(merged); // [1,2,3,4,5,6]
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]

/*
En el código anterior, fusionamos dos matrices usando el concat()método. 
Sin embargo, no es mi sintaxis favorita en la fusión de matrices. 
Podemos malinterpretar la sintaxis arr1.concat(arr2)ya que estamos 
fusionando arr2el elemento arr1y cambiando la propia matriz array1. 
Sin embargo, ese no es el hecho.

Como usamos el spreadoperador, el concatmétodo no cambiará las matrices de 
entrada. Más bien, crea una nueva matriz que fusiona todas las matrices de 
entrada y la devuelve. 
Entonces, una mejor manera de escribir el concat()método para fusionar matrices 
es:
*/

const merged2 = [].concat(arr1, arr2);

/*
Aquí, está claro que podemos concatenar varias matrices en una matriz vacía y 
devolver la matriz fusionada como resultado. 
Puede pasar tantas matrices como argumentos de entrada al concat()método.
*/

/*
Genial, pero ¿cuál usar? ¿ El spreadoperador o el concat()método?
Si está seguro de que las entradas son todas matrices, utilice el spreadoperador. 
Es una forma muy sencilla y moderna de fusionar matrices. 
Pero si no está seguro del tipo de elemento de entrada, use el concat()método.

Por ejemplo, tomemos una cadena tapasy usemos el operador de propagación en ella 
con los literales de la matriz
*/

[...'tapas']

/*
¿Cuál crees que será la salida? 
La cadena tapasse desestructurará en una matriz de caracteres de la que está hecha

Entonces, cuando lo fusiona con otras matrices, el resultado final puede no ser 
el que esperaba
*/

const arrX = [1,2,3];
const nameX = 'tapas';

const merged3 = [...arrX, ...nameX];
console.log(merged3); // [ 1,   2,   3,   't', 'a', 'p', 'a', 's'  ]

// En tales casos, utilice el concat()método en su lugar,

const arrZ = [1,2,3];
const nameZ = 'tapas';

const merged4 = [].concat(arrZ, nameZ);
console.log(merged4); // [ 1, 2, 3, 'tapas' ]
