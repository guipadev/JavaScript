/*
Utilice una matriz para almacenar una colección de datos

El siguiente es un ejemplo de la implementación más simple de una estructura de datos de matriz. Esto se conoce como una matriz unidimensional, lo que significa que solo tiene un nivel o que no tiene ninguna otra matriz anidada dentro de ella. Tenga en cuenta que contiene valores booleanos, cadenas y números, entre otros tipos de datos JavaScript válidos:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); //7

Todas las matrices tienen una propiedad de longitud, a la que, como se muestra arriba, se puede acceder muy fácilmente con la sintaxis Array.length. A continuación se puede ver una implementación más compleja de una matriz. Esto se conoce como matriz multidimensional o matriz que contiene otras matrices. Tenga en cuenta que esta matriz también contiene objetos JavaScript, que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesita saber es que las matrices también son capaces de almacenar objetos complejos.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
*/

/*
Explicación del problema

En JS, las matrices son una de las estructuras de datos más utilizadas. A diferencia de otros lenguajes, las matrices en JS pueden almacenar diferentes tipos de datos y también pueden cambiar su tamaño en tiempo de ejecución y, por lo tanto, también se denominan "matrices dinámicas". También están indexados en 0.

- Las matrices se pueden inicializar de diferentes formas:
1. Literales de matriz
2. Constructores de matrices

- En este desafío, nos centraremos en los literales de matriz. Para inicializar una matriz simplemente dejamos
arr = [];

- Podemos agregar valores a esta matriz accediendo a su índice, ejemplo
let arr = [];
arr[0] = "hello";
console.log(arr); // ["hello"]

- 
También podemos inicializar los valores en la matriz cuando la declaramos, ejemplo:
let arr = [1, 2, 3, "John"];

En este desafío, debe crear una matriz con al menos 5 elementos y al menos una cadena, un número y un booleano.
*/

*/
Hemos definido una variable llamada yourArray. Complete la declaración asignando una matriz de al menos 5 elementos de longitud a la variable yourArray. Su matriz debe contener al menos una cadena, un número y un booleano.
*/

let yourArray = [
  "cadena", 
  8, 
  false,
  [
    {
      position: 1,
      name: "tom"
    }
  ],
  [
    {
      apellido: "Loza",
      animal: "dog"
     }
  ]
];
    