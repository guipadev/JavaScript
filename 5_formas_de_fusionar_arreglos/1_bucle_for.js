/*
Usar el forbucle para fusionar dos o más elementos de matriz puede ser la 
forma más viable. La mayoría de nosotros sabemos cómo usar bucles for en la 
programación. Así que es la opción más fácil para empezar. 
Sin embargo, puede que no sea la mejor solución para el problema en cuestión.

Para fusionar elementos de una matriz a otra, primero debemos iterar (bucle) 
a través de todos los elementos de la matriz. 
En el bucle, recuperaremos cada elemento de una matriz y lo insertaremos 
(utilizando el push()método de matriz) en otra matriz.

Aquí hay una función de JavaScript que hace lo mismo,
*/

const merge = (first, second) => {
    for(let i=0; i<second.length; i++) {
      first.push(second[i]);
    }
    return first;
  }
  
// Ahora, podemos llamar a la merge()función y pasar dos matrices 
// como argumentos para la fusión.

console.log(merge([1,2,3], [4,5,6]));

/*
Muy bien, pero ¿cómo fusionamos más de dos matrices usando la 
misma merge() función? 
Bueno, puede que no sea una forma muy amigable, pero podemos hacer algo 
como esto:
*/

console.log(merge(merge([1,2,3], [4,5,6]), [7,8,9]))

/*
Como puede adivinar, a medida que crece nuestro requisito de la cantidad de
matrices de entrada para la fusión, será una forma menos amigable de 
administrarlo. Por lo tanto, usar el ciclo for para fusionar dos o más 
matrices está bien, para empezar, pero puede no ser un método excelente 
para usar en la práctica.
*/










