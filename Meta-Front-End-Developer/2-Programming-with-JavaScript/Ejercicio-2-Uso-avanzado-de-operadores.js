/**
Tarea 1: Usar el operador lógico &&
Estás programando un juego de rol, donde cada personaje tiene ciertos niveles de habilidad en función 
del valor guardado en su puntuación.

Cree una variable llamada puntuación y configúrela en 8

Use console.log() que incluye la cadena "Habilidades de nivel medio:" y compara la variable de 
puntaje con más de 0 y menos de 10 usando el operador &&

El resultado esperado en la consola debería ser: "Habilidades de nivel medio: verdadero" .
 */

let score = 8;

console.log("Mid-level skills:", score > 0 && score < 10);

/**
Tarea 2: Usar el || lógico operador
Imagina que estás programando un videojuego. Actualmente, está a punto de codificar algunos fragmentos relacionados con la condición de finalización del juego.

Debe codificar una nueva variable llamada timeRemaining y establecerla en 0 . También debe codificar una nueva variable denominada energía y establecerla en 10 .

A continuación, debe escribir un fragmento de código que podría usarse para determinar si el juego ha terminado, en función de si el valor de la variable timeRemaining es 0 o el valor de la variable energy es 0 .

Complete la tarea siguiendo los siguientes pasos:

1. Declare la variable timeRemaining y asígnele el valor 0 .

2. Declare la variable energía y asígnele el valor de 10 .

3. La consola registra los siguientes parámetros: "Game over: " y timeRemaining == 0 || energía == 0

Tenga en cuenta que el resultado esperado en la consola debe ser: "Game over: true" .

Intente cambiar la variable timeRemaining a cualquier cosa por encima de 0 y luego vea cómo afecta el resultado.
 */

let timeRemaining = 0;

let energy = 10;

console.log("Game over: ", timeRemaining == 0 || energy == 0);

/**
Tarea 3: Usar el operador de módulo, % , para probar si un número dado es impar
Necesita codificar un pequeño programa que tome un número y determine si es un número par (como 2, 4, 6, 8, 10).

Para lograr esta tarea, debe declarar seis variables, de la siguiente manera:

1. A la primera variable, denominada num1, se le debe asignar un valor numérico de 2 .

2. A la segunda variable, denominada num2 , se le debe asignar un valor numérico de 5 .

3. A la tercera variable, denominada prueba1 , se le debe asignar el cálculo de num1 % 2 . Nota : ejecutar este código devolverá un número.

4. A la cuarta variable, denominada prueba2 , se le debe asignar el cálculo de num2 % 2 . Nota : ejecutar este código también devolverá un número.

5. A la quinta variable, denominada result1 , se le debe asignar el resultado de comparar si el número almacenado en la variable test1 no es igual a 0 , es decir, esto: test1 == 0 .

6. A la sexta variable, denominada resultado2 , se le debe asignar el resultado de la comparación si el número almacenado en la variable prueba2 no es igual a 0 , en otras palabras, prueba2 == 0 .

Ejecute el registro de la consola dos veces después de configurar las variables:

1. El primer registro de la consola debe tener el siguiente código entre paréntesis: 
"Is", num1, "an even number?", result1

2. El segundo registro de la consola debe tener el siguiente código entre paréntesis: 
"Is", num2, "an even number?", result2

Nota : La salida a la consola debe ser la siguiente:

¿el 2 es un numero par? verdadero

¿5 es un número par? FALSO
 */

let num1 = 2;

let num2 = 5;

let test1 = num1 % 2;

let test2 = num2 % 2;

let result1 = test1 == 0;

let result2 = test2 == 0;

console.log("Is " + num1 + " an even number? " + result1);

console.log("Is " + num2 + " an even number? " + result2);

/**
Tarea 4: Agregar números usando el operador +
Consola registra el resultado de sumar dos números, 5 y 10 , usando el operador + .

Nota : esta tarea debe completarse en una sola línea de código. La salida en la consola debe ser 15 .
 */

console.log(5 + 10);

/**
Tarea 5: Concatenar números y cadenas usando el operador +
Codifique tres variables:

La primera variable debe ser una cadena con el siguiente valor: "Ahora en" . Nombra la variable ahora .

La segunda variable debe ser un número con el valor: 3 . Nombra la variable tres .

La tercera variable debe ser una cadena con el siguiente valor: "D!" . Nombra la variable d .

Consola registra el siguiente código: now + three + d .

Nota : El resultado esperado debería ser: "¡Ahora en 3D!" .
 */

let now = "Now in ";

let three = 3;

let d = "D!";

console.log(now + three + d);

/**
Tarea 6: Usar el operador += para acumular valores en una variable

Codifique una nueva variable y asígnele el nombre contador , asignándole el valor de 0 .

En la siguiente línea, use el operador += para aumentar el valor de contador en 5 .

En la siguiente línea, use el operador += para aumentar el valor de contador en 3 .

En la cuarta línea, la consola registra el valor de la variable contador .

Nota : el valor de salida debe ser 8 .
 */

let counter = 0;

counter += 5;

counter += 3;

console.log(counter);
