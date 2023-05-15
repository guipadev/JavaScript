/*
ES6 hace que la desestructuración de matrices sea tan fácil como 
la desestructuración de objetos.

Una diferencia clave entre el operador de distribución y la desestructuración 
de la matriz es que el operador de distribución desempaqueta todo el contenido 
de una matriz en una lista separada por comas. 
En consecuencia, no puede elegir qué elementos desea asignar a las variables.

Desestructurar una matriz nos permite hacer exactamente eso:

const [a, b] = [1, 2, 3, 4, 5, 6];

console.log(a, b);

La consola mostrará los valores de a y b como 1, 2.

A la variable a se le asigna el primer valor de la matriz y b 
se le asigna el segundo valor de la matriz. 

También podemos acceder al valor en cualquier índice en una matriz con 
desestructuración usando comas para alcanzar el índice deseado:

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];

console.log(a, b, c);

La consola mostrará los valores de a, b y c como 1, 2, 5.

Use la asignación de desestructuración para intercambiar los valores de a
y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a.
*/

let a = 8,
  b = 6;

[a, b] = [b, a];
