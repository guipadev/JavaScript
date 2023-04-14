/*
Iterar con JavaScript Do...While Loops

El siguiente tipo de bucle que aprenderá se llama do...while bucle. 
Se llama un do...while ciclo porque primero pasará do el código dentro del ciclo sin importar qué, 
y luego continuará ejecutando el ciclo while que la condición especificada evalúa true.

const ourArray = [];

let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

El ejemplo anterior se comporta de manera similar a otros tipos de bucles, 
y la matriz resultante se verá como [0, 1, 2, 3, 4]. 
Sin embargo, lo que do...while diferencia de otros bucles es cómo se comporta cuando la condición falla 
en la primera verificación. Veamos esto en acción. 
Aquí hay un ciclo regular while que ejecutará el código en el ciclo siempre que i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

En este ejemplo, inicializamos el valor de ourArray en una matriz vacía y el valor de i en 5. 
Cuando ejecutamos el while ciclo, la condición se evalúa false porque i no es menor que 5, 
por lo que no ejecutamos el código dentro del ciclo. 
El resultado es que ourArray terminará sin valores agregados y aún se verá como [] 
cuando todo el código en el ejemplo anterior haya terminado de ejecutarse. 
Ahora, eche un vistazo a un do...while bucle:

const ourArray = []; 

let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

En este caso, inicializamos el valor de i a 5, tal como lo hicimos con el while bucle. 
Cuando llegamos a la siguiente línea, no hay ninguna condición para evaluar, 
así que vamos al código dentro de las llaves y lo ejecutamos. 
Agregaremos un solo elemento a la matriz y luego lo incrementaremos i antes de llegar a la verificación de condición. 
Cuando finalmente evaluamos la condición i < 5 en la última línea, vemos que i ahora es 6, 
lo que falla en la verificación condicional, así que salimos del ciclo y terminamos. 
Al final del ejemplo anterior, el valor de ourArray es [5]. 
Esencialmente, un do...while ciclo asegura que el código dentro del ciclo se ejecutará al menos una vez. 
Intentemos hacer que do...while funcione un bucle insertando valores en una matriz.

Cambie el while ciclo en el código a un do...while ciclo para que el ciclo empuje solo el número 10 a myArray,
y iserá igual a 11 cuando su código haya terminado de ejecutarse.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}

*/

const myArray = [];

let i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);