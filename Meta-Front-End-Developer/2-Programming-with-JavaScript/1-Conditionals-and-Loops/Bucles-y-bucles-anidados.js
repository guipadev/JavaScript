/**
Digamos que quiero generar una tabla de multiplicación personalizada.

Este es un escenario de caso de uso perfecto para bucles anidados.

La variable de contador del bucle exterior actuará como el primer número que se multiplicará, 
y la variable de contador del bucle interior actuará como el segundo número que se multiplicará.
 */

for (var firstNum = 0; firstNum < 2; firstNum++) {
  console.log(firstNum); // 0 1
}

/**
Esto significa que mi ciclo for comienza en 0 y se detiene después de 1.

Así que ahora puedo codificar lo que luego se convertirá en el ciclo interno, 
cuya variable de contador será el segundo número en esta multiplicación:
 */
for (var secondNum = 0; secondNum < 10; secondNum++) {
  console.log(secondNum); // 0 1 2 3 4 5 6 7 8 9
}

// Ahora es el momento de combinar el primer y el segundo ciclo:

for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + ", " + secondNum); // 0, 0 0, 1 0, 2 0, 3 0, 4 0, 5 0, 6 0, 7 0, 8 0, 9 1, 0 1, 1 1, 2 1, 3 1, 4 1, 5 1, 6 1, 7 1, 8 1, 9
  }
}

/*
Ahora que estoy anidando el segundo bucle for dentro del primero, 
y que estoy registrando en la consola los valores de ambas variables de contador a medida que avanzan los bucles, 
el resultado se ve así:
 
 0, 0 0, 1 0, 2 0, 3 0, 4 0, 5 0, 6 0, 7 0, 8 0, 9 1, 0 1, 1 1, 2 1, 3 1, 4 1, 5 1, 6 1, 7 1, 8 1, 9
*/

/**
 * Ahora que tengo una lista de todos los números que se multiplicarán,
 * obtener el resultado real de esta multiplicación es tan fácil como actualizar la   llamada a console.log() :
 */
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " times " + secondNum + " equals " + firstNum * secondNum
    );
  }
}

/*
La salida ahora es:

0 por 0 es igual a 0 0 por 1 es igual a 0 0 por 2 es igual a 0 0 por 3 es igual a 0 0 por 4 es igual a 0 0 por 5 es igual a 0 0 por 6 es igual a 0 0 por 7 es igual a 0 0 por 8 es igual a 0 0 por 9 es igual a 0 1 por 0 es igual a 0 1 por 1 es igual a 1 1 por 2 es igual a 2 1 por 3 es igual a 3 1 por 4 es igual a 4 1 por 5 es igual a 5 1 por 6 es igual a 6 1 por 7 es igual a 7 1 por 8 es igual a 8 1 por 9 es igual a 9
*/

/**
 * Esto hace algunas combinaciones muy interesantes.
 * Por ejemplo, puedo hacer una tabla de división personalizada:
 */
for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}

/*
100 dividido por 10 es igual a 10 100 dividido por 5 es igual a 20 90 dividido por 10 es igual a 9 90 dividido por 5 es igual a 18 80 dividido por 10 es igual a 8 80 dividido por 5 es igual a 16 70 dividido por 10 es igual a 7 70 dividido por 5 es igual a 14 60 dividido por 10 es 6 60 dividido por 5 es igual a 12 50 dividido por 10 es igual a 5 50 dividido por 5 es igual a 10 40 dividido por 10 es igual a 4 40 dividido por 5 es igual a 8 30 dividido por 10 es igual a 3 30 dividido por 5 es igual a 6 20 dividido por 10 es igual a 2 20 dividido por 5 es igual a 4
*/
