/*
En algunas situaciones que involucran la desestructuración de arreglos, 
es posible que deseemos recopilar el resto de los elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];

console.log(a, b);

console.log(arr);

La consola mostraría los valores 1, 2 y [3, 4, 5, 7].

Variables a y b toman el primer y segundo valor de la matriz. 
Después de eso, debido a la presencia de la sintaxis rest, 
arr obtiene el resto de los valores en forma de matriz. 
El elemento rest solo funciona correctamente como última variable de la lista. 
Como en, no puede usar la sintaxis de descanso para capturar un subarreglo que omite 
el último elemento del arreglo original.

Use una asignación de desestructuración con la sintaxis rest para emular el 
comportamiento de Array.prototype.slice(). removeFirstTwo()
debe devolver un subarreglo del arreglo original list con los primeros dos elementos omitidos.

function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
*/

function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;

  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
