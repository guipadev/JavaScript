/*
Declarar una variable de solo lectura con la palabra clave const

La palabra clave letno es la única forma nueva de declarar variables. 
En ES6, también puede declarar variables usando la constpalabra clave.

const tiene todas las increíbles características que let tiene, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. 
Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar:

const FAV_PET = "Cats";
FAV_PET = "Dogs";

La consola mostrará un error debido a la reasignación del valor de FAV_PET.

Siempre debe nombrar las variables que no desea reasignar usando la const palabra clave. 
Esto ayuda cuando accidentalmente intenta reasignar una variable que debe permanecer constante.

Nota: es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y matrices). 
Aprenderá más sobre objetos, matrices y valores inmutables y mutables en desafíos posteriores. 
También en desafíos posteriores, verá ejemplos de identificadores de variables en mayúsculas, minúsculas o camelCase.

Cambie el código para que todas las variables se declaren usando let o const. 
Úselo let cuando desee que la variable cambie y const cuando desee que la variable permanezca constante. 
Además, cambie el nombre de las variables declaradas con const para ajustarse a las prácticas comunes. 
No cambie las cadenas asignadas a las variables.

var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
*/

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
