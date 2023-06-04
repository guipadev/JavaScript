/*
Devuelve un arreglo ordenado sin cambiar el arreglo original

Un efecto secundario del método sort es que cambia el orden de los elementos en el arreglo original. 

En otras palabras, muta el arreglo en su sitio. 

Una forma de evitar esto es concatenar primero un arreglo vacío al que está siendo ordenado 
(recuerda que slice y concat devuelven un nuevo arreglo), luego ejecutar el método sort.
--------------------------------------------------------------------------------------------------
Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo 
en orden ascendente. 
La función debe devolver un nuevo arreglo y no mutar la variable globalArray.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
}

nonMutatingSort(globalArray);
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [].concat(arr).sort(function (a, b) {
    return a - b;
  });
}

console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]

//comprobación que variable no fue modificada
console.log(globalArray); // [5, 6, 3, 2, 9]
