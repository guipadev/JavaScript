/*
Create complex multi-dimensional arrays

¡Increíble! ¡Acaba de aprender mucho sobre matrices! Esta ha sido una descripción general de bastante alto nivel, 
y hay mucho más que aprender sobre cómo trabajar con matrices, mucho de lo cual verá en secciones posteriores. 
Pero antes de pasar a los objetos, echemos un vistazo más y veamos cómo las matrices pueden volverse un poco 
más complejas de lo que hemos visto en desafíos anteriores.

Una de las características más poderosas cuando se piensa en matrices como estructuras de datos, es que las matrices 
pueden contener o incluso estar completamente formadas por otras matrices. 
Hemos visto matrices que contienen matrices en desafíos anteriores, pero bastante simples. Sin embargo, las matrices 
pueden contener una profundidad infinita de matrices que pueden contener otras matrices, cada una con sus propios niveles
 arbitrarios de profundidad, etc. 
De esta manera, una matriz puede convertirse muy rápidamente en una estructura de datos muy compleja, 
conocida como matriz multidimensional o anidada. 
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


La matriz profunda está anidada a 2 niveles de profundidad. Las matrices más profundas tienen 3 niveles de profundidad. 
Las matrices más profundas tienen 4 niveles, ¿y las más profundas? es 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, 
cuando se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles
más profundos de una matriz de este complejo con notación de corchetes:

console.log(nestedArray[2][1][0][0][0]);  //deepest-est?

Esto registra la cadena -deepest-est ?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:

nestedArray[2][1][0][0][0] = 'deeper still';  

console.log(nestedArray[2][1][0][0][0]); //deeper still

Ahora registra aún más profundo.
*/

/*
Hemos definido una variable, myNestedArray, igual a una matriz. 
Modifique myNestedArray, utilizando cualquier combinación de cadenas, números y valores booleanos para los elementos de datos, 
de modo que tenga exactamente cinco niveles de profundidad (recuerde, la matriz más externa es el nivel 1). 
En algún lugar del tercer nivel, incluya string deep, en el cuarto nivel, incluya la string deeper, y en el quinto nivel, incluya string deepest.
*/

/*
Sugerencia 1
El primer string -deep- debe insertarse a tres niveles de profundidad. Esto significa exactamente dentro de tres conjuntos de [corchetes].

let threeLevelArray = [
  "first level",
  ["Two levels deep", ["Three levels deep"]]
];

Usando esta lógica, inserte las cadenas deep, deeper y deepest en la matriz de tres niveles de profundidad, cuatro niveles de profundidad y cinco niveles de profundidad respectivamente.
*/

//Solutcion 1
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]], 			//tercer nivel, incluya string deep
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]], 	  	//cuarto nivel, incluya la string deeper
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]	//quinto nivel, incluya string deepest
];

//Solution 2
let myNestedArray = [
  'level 1',                   		/* myNestedArray[0]             */
  ['level 2'],	               	/* myNestedArray[1][0]          */
  [['level 3','deep']],	       	/* myNestedArray[2][0][0]       */
  [[['level 4','deeper']]],	/* myNestedArray[3][0][0][0]    */
  [[[['level 5','deepest']]]]	/* myNestedArray[4][0][0][0][0] */
];