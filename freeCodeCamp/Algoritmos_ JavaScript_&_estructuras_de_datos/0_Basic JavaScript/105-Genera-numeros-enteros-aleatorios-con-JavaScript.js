/*
Genera números enteros aleatorios con JavaScript

Es genial que podamos generar números decimales aleatorios, 
pero es aún más útil si lo usamos para generar números enteros aleatorios.

Se usa Math.random() para generar un decimal aleatorio.

Multiplica ese decimal aleatorio por 20.

Use otra función Math.floor() para redondear el número hacia abajo a su número entero más cercano.

Recuerde que Math.random() nunca puede devolver a 1 y, debido a que estamos redondeando hacia abajo, 
es imposible obtener 20. Esta técnica nos dará un número entero entre 0 y 19.

Poniendo todo junto, así es como se ve nuestro código:

Math.floor(Math.random() * 20);

Estamos llamando Math.random(), multiplicando el resultado por 20, 
luego pasando el valor a Math.floor() la función para redondear el valor al número entero más cercano.

Utilice esta técnica para generar y devolver un número entero aleatorio entre 0 y 9.

function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}

*/

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}