/*
Acceder al contenido de una matriz mediante notación entre corchetes

La característica fundamental de cualquier estructura de datos es, por supuesto, la capacidad no solo de almacenar datos, sino también de poder recuperarlos cuando lo soliciten. Entonces, ahora que hemos aprendido cómo crear una matriz, comencemos a pensar en cómo podemos acceder a la información de esa matriz.

Cuando definimos una matriz simple como se ve a continuación, hay 3 elementos en ella:

let ourArray = ["a", "b", "c"];

En una matriz, cada elemento de la matriz tiene un índice. Este índice funciona como la posición de ese elemento en la matriz y cómo se hace referencia a él. Sin embargo, es importante tener en cuenta que las matrices de JavaScript tienen un índice cero, lo que significa que el primer elemento de una matriz está en realidad en la posición cero, no en el primero. Para recuperar un elemento de una matriz, podemos encerrar un índice entre corchetes y agregarlo al final de una matriz, o más comúnmente, a una variable que hace referencia a un objeto de matriz. Esto se conoce como notación entre corchetes. Por ejemplo, si queremos recuperar el a de ourArray y asignarlo a una variable, podemos hacerlo con el siguiente código:

Let ourVariable = ourArray[0];

Ahora ourVariable tiene el valor de a.

Además de acceder al valor asociado con un índice, también puede establecer un índice en un valor usando la misma notación:

ourArray[1] = "not b anymore";

Usando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de la cadena b, ya no b. Ahora ourArray es ["a", "not b anymore", "c"].

Para completar este desafío, establezca la segunda posición (índice 1) de myArray en lo que desee, además de la letra b.
*/

let myArray = ["a", "b", "c", "d"];

myArray[1] = "lo que desee";

console.log(myArray); //["a", "lo que desee", "c", "d"]