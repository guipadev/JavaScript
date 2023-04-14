/*
Reemplazar bucles usando recursividad

La recursividad es el concepto de que una función puede expresarse en términos de sí misma. 
Para ayudar a entender esto, comience pensando en la siguiente tarea: 
multiplique los primeros n elementos de una matriz para crear el producto de esos elementos. 
Usando un for bucle, podrías hacer esto:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

Sin embargo, observe que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
Eso significa que puede reescribir multiply en términos de sí mismo y nunca necesita usar un ciclo.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

La versión recursiva de multiplyse descompone así. En el caso base, donde n <= 0, devuelve 1. 
Para valores mayores de n, se llama a sí mismo, pero con n - 1. 
Esa llamada de función se evalúa de la misma manera, llamando multiply de nuevo hasta n <= 0. 
En este punto, todas las funciones pueden volver y el original multiply devuelve la respuesta.

Nota: 
Las funciones recursivas deben tener un caso base cuando regresan sin volver a llamar a la función 
(en este ejemplo, cuando n <= 0), de lo contrario, nunca pueden terminar de ejecutarse.

Escriba una función recursiva, sum(arr,n), que devuelva la suma de los primeros n elementos de una matriz arr.

function sum(arr, n) {
  // Only change code below this line
}

*/

function sum(arr, n) {
    if(n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
}