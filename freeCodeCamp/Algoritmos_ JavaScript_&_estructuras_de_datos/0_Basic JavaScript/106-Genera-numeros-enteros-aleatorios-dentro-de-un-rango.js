/*
Genera números enteros aleatorios dentro de un rango

En lugar de generar un número entero aleatorio entre cero y un número dado como hicimos antes, 
podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.

Para ello, definiremos un número mínimo min y un número máximo max.

Esta es la fórmula que usaremos. Tómese un momento para leerlo e intente comprender qué está haciendo este código:

Math.floor(Math.random() * (max - min + 1)) + min

Cree una función llamada randomRange que tome un rango myMiny myMax devuelva un número entero aleatorio que sea mayor
o igual que myMin, y menor o igual que myMax, inclusive.

function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}

*/

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}