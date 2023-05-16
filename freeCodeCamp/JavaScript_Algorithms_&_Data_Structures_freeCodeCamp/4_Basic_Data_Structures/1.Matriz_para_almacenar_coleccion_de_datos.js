/*
Utilice una matriz para almacenar una colecci�n de datos

El siguiente es un ejemplo de la implementaci�n m�s simple de una estructura de datos de matriz. Esto se conoce como una matriz unidimensional, lo que significa que solo tiene un nivel o que no tiene ninguna otra matriz anidada dentro de ella. Tenga en cuenta que contiene valores booleanos, cadenas y n�meros, entre otros tipos de datos JavaScript v�lidos:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); //7

Todas las matrices tienen una propiedad de longitud, a la que, como se muestra arriba, se puede acceder muy f�cilmente con la sintaxis Array.length. A continuaci�n se puede ver una implementaci�n m�s compleja de una matriz. Esto se conoce como matriz multidimensional o matriz que contiene otras matrices. Tenga en cuenta que esta matriz tambi�n contiene objetos JavaScript, que examinaremos muy de cerca en la siguiente secci�n, pero por ahora, todo lo que necesita saber es que las matrices tambi�n son capaces de almacenar objetos complejos.

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
Explicaci�n del problema

En JS, las matrices son una de las estructuras de datos m�s utilizadas. A diferencia de otros lenguajes, las matrices en JS pueden almacenar diferentes tipos de datos y tambi�n pueden cambiar su tama�o en tiempo de ejecuci�n y, por lo tanto, tambi�n se denominan "matrices din�micas". Tambi�n est�n indexados en 0.

- Las matrices se pueden inicializar de diferentes formas:
1. Literales de matriz
2. Constructores de matrices

- En este desaf�o, nos centraremos en los literales de matriz. Para inicializar una matriz simplemente dejamos
arr = [];

- Podemos agregar valores a esta matriz accediendo a su �ndice, ejemplo
let arr = [];
arr[0] = "hello";
console.log(arr); // ["hello"]

- 
Tambi�n podemos inicializar los valores en la matriz cuando la declaramos, ejemplo:
let arr = [1, 2, 3, "John"];

En este desaf�o, debe crear una matriz con al menos 5 elementos y al menos una cadena, un n�mero y un booleano.

Hemos definido una variable llamada yourArray. 
Complete la declaraci�n asignando una matriz de al menos 5 elementos de longitud 
a la variable yourArray. 
Su matriz debe contener al menos una cadena, un n�mero y un booleano.
*/

let yourArray = [
  "cadena",
  8,
  false,
  [
    {
      position: 1,
      name: "tom",
    },
  ],
  [
    {
      apellido: "Loza",
      animal: "dog",
    },
  ],
];
