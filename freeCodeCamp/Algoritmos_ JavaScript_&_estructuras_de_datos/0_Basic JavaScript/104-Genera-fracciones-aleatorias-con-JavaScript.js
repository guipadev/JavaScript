/*
Genera fracciones aleatorias con JavaScript

Los números aleatorios son útiles para crear un comportamiento aleatorio.

JavaScript tiene una Math.random() función que genera un número decimal aleatorio entre 0 (inclusivo) y 1 (exclusivo). 
Por lo tanto Math.random(), puede devolver un 0 pero nunca devolver un 1.

Nota: Al igual que el almacenamiento de valores con el operador de asignación, 
todas las llamadas a funciones se resolverán antes de que se returnejecuten, 
por lo que podemos determinar return el valor de la Math.random() función.

Cambie randomFraction para devolver un número aleatorio en lugar de devolver 0.

function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}

*/

function randomFraction() {
    let result = Math.random();

    return result;
}