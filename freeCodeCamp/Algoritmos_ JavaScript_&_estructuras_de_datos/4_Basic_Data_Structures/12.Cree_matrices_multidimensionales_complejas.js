/*
Create complex multi-dimensional arrays

�Incre�ble! �Acaba de aprender mucho sobre matrices! 
Esta ha sido una descripci�n general de bastante alto nivel, 
y hay mucho m�s que aprender sobre c�mo trabajar con matrices, mucho de lo cual ver� 
en secciones posteriores. 
Pero antes de pasar a los objetos, echemos un vistazo m�s y veamos c�mo las matrices pueden 
volverse un poco m�s complejas de lo que hemos visto en desaf�os anteriores.

Una de las caracter�sticas m�s poderosas cuando se piensa en matrices como estructuras 
de datos, es que las matrices pueden contener o incluso estar completamente formadas 
por otras matrices. 
Hemos visto matrices que contienen matrices en desaf�os anteriores, pero bastante simples. 
Sin embargo, las matrices pueden contener una profundidad infinita de matrices que pueden 
contener otras matrices, cada una con sus propios niveles arbitrarios de profundidad, etc. 

De esta manera, una matriz puede convertirse muy r�pidamente en una estructura de datos 
muy compleja, conocida como matriz multidimensional o anidada. 

Considere el siguiente ejemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

La matriz profunda est� anidada a 2 niveles de profundidad. 
Las matrices m�s profundas tienen 3 niveles de profundidad. 
Las matrices m�s profundas tienen 4 niveles, �y las m�s profundas? es 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, 
ni siquiera inusual, cuando se trata de grandes cantidades de datos. 
Sin embargo, todav�a podemos acceder muy f�cilmente a los niveles
m�s profundos de una matriz de este complejo con notaci�n de corchetes:

console.log(nestedArray[2][1][0][0][0]);  //deepest-est?

Esto registra la cadena -deepest-est ?. 
Y ahora que sabemos d�nde est� ese dato, podemos restablecerlo si es necesario:

nestedArray[2][1][0][0][0] = 'deeper still';  

console.log(nestedArray[2][1][0][0][0]); //deeper still

Ahora registra a�n m�s profundo.
*/

/*
Hemos definido una variable, myNestedArray, igual a una matriz. 
Modifique myNestedArray, utilizando cualquier combinaci�n de cadenas, n�meros y 
valores booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles
de profundidad (recuerde, la matriz m�s externa es el nivel 1). 
En alg�n lugar del tercer nivel, incluya string deep, en el cuarto nivel, 
incluya la string deeper, y en el quinto nivel, incluya string deepest.

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
*/

/*
Sugerencia 1
El primer string -deep- debe insertarse a tres niveles de profundidad. Esto significa exactamente dentro de tres conjuntos de [corchetes].

let threeLevelArray = [
  "first level",
  ["Two levels deep", ["Three levels deep"]]
];

Usando esta l�gica, inserte las cadenas deep, deeper y deepest en la matriz de tres niveles de profundidad, cuatro niveles de profundidad y cinco niveles de profundidad respectivamente.
*/

//Solutcion 1
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]], //tercer nivel, incluya string deep
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]], //cuarto nivel, incluya la string deeper
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]], //quinto nivel, incluya string deepest
];

//Solution 2
let myNestedArray2 = [
  "level 1" /* myNestedArray[0]             */,
  ["level 2"] /* myNestedArray[1][0]          */,
  [["level 3", "deep"]] /* myNestedArray[2][0][0]       */,
  [[["level 4", "deeper"]]] /* myNestedArray[3][0][0][0]    */,
  [[[["level 5", "deepest"]]]] /* myNestedArray[4][0][0][0][0] */,
];
