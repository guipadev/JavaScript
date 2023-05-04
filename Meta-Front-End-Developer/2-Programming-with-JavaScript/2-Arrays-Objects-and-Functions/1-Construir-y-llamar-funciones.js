// Comencemos dando un nombre a nuestra declaración de función:

function listArrayItems(arr) {
  // ... code to be added ...
}

/*
Entonces, declaré una  función listArrayItems  y la configuré para aceptar un solo parámetro,  arr  , que representa una matriz.

Ahora, tendré que codificar un bucle for para recorrer una matriz.

Como se trató en lecciones anteriores de este curso, un bucle for necesita la siguiente información:

1. el valor del contador de ciclo inicial como una variable temporal  i 

2. la condición de salida (el valor máximo de la variable de contador de bucle  i , por encima del cual el bucle ya no se ejecuta)

3. cómo actualizar el valor de  i  después de cada ciclo

Aquí está la información que usaré en esta declaración de función: 1. El contador inicial del ciclo será  0 . La razón para establecerlo en cero se debe al hecho de que las matrices también se cuentan desde cero.

Esto significa que tendré un mapeo uno a uno del valor actual de la  variable i  en cualquier momento dado, correspondiente a la misma posición de índice de cualquier elemento en la  matriz arr  2.

La condición de salida del ciclo for es cuando el valor de  i  es igual o mayor que  arr.length .

Dado que  arr.length  cuenta la cantidad de elementos en la matriz desde uno, y los elementos de la matriz están indexados desde cero, esto significa que tan pronto como  i  sea igual a  arr.length , el ciclo terminará y cualquier otro código después de él se ejecutará.

Esto prácticamente significa que la condición de salida para este ciclo for será  i <arr.length  devolviendo  falso .

En otras palabras, siempre que  i < arr.length  sea verdadero, este ciclo for continuará ejecutándose. 3. Para asegurarme de que no se salte ninguno de los elementos de la  matriz arr  , tengo que aumentar el valor de  i  en  1  después de cada bucle.

Ahora que sé exactamente cómo debe comportarse mi ciclo for, puedo agregarlo a mi  función listArrayItems()  :
*/

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    // ... code pending here ...
  }
}

/*
Ahora todo lo que me queda por decidir es cómo quiero generar cada elemento de la  matriz arr recibida  .

Puede ser tan simple como que la consola registre el índice del elemento de la matriz del valor actual de  i :
*/

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); //display the array item where the index is euqal to i
  }
}

// Si ahora invoco la  función listArrayItems  , puedo, por ejemplo, darle la siguiente matriz de colores:

var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors); //display all items in the array at once

/*
La salida será:  

red
orange
yellow
green
blue
purple
pink
*/

/**
 * Puedo actualizar la salida como quiera. Por ejemplo, aquí están mis  artículos arr
 * con un número delante de cada artículo:
 */

//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

listArrayItems(colors);

/*
Ahora la salida del código anterior será la siguiente:  

0 'red'
1 'orange'
2 'yellow'
3 'green'
4 'blue'
5 'purple'
6 'pink'
*/

/**
 * Para comenzar el conteo desde uno en lugar de cero, puedo actualizar la declaración de mi función
 * de la siguiente manera:
 */

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}

/*
Invocar la declaración de función actualizada anterior en mi  matriz de colores, 
ahora dará como resultado el siguiente resultado:  

1 'red'
2 'orange'
3 'yellow'
4 'green'
5 'blue'
6 'purple'
7 'pink'
*/

/**
 * Incluso puedo agregar una o más condiciones, tales como:
 */

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      console.log(i * 100, "tomato!");
    } else {
      console.log(i * 100, arr[i]);
    }
  }
}

/*
Ahora estoy agregando un flujo de control dentro de mi función, en función de si un miembro específico de 
la matriz coincide con un valor específico; en este caso, la cadena  "red" .

Invocar mi última versión actualizada de la  función listArrayItems  en la  matriz de colores  ahora dará 
como resultado el siguiente resultado:

0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink'
*/
