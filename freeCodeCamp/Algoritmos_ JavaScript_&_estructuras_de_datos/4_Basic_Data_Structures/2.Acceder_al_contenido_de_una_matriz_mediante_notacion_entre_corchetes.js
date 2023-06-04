/*
Acceder al contenido de una matriz mediante notaci�n entre corchetes

La caracter�stica fundamental de cualquier estructura de datos es, por supuesto, 
la capacidad no solo de almacenar datos, sino tambi�n de poder recuperarlos cuando 
lo soliciten. 
Entonces, ahora que hemos aprendido c�mo crear una matriz, comencemos a pensar en 
c�mo podemos acceder a la informaci�n de esa matriz.

Cuando definimos una matriz simple como se ve a continuaci�n, hay 3 elementos en ella:

let ourArray = ["a", "b", "c"];

En una matriz, cada elemento de la matriz tiene un �ndice. 
Este �ndice funciona como la posici�n de ese elemento en la matriz y c�mo se hace 
referencia a �l. 
Sin embargo, es importante tener en cuenta que las matrices de JavaScript tienen 
un �ndice cero, lo que significa que el primer elemento de una matriz est� en 
realidad en la posici�n cero, no en el primero. 
Para recuperar un elemento de una matriz, podemos encerrar un �ndice entre corchetes 
y agregarlo al final de una matriz, o m�s com�nmente, a una variable que hace referencia 
a un objeto de matriz. 
Esto se conoce como notaci�n entre corchetes. 
Por ejemplo, si queremos recuperar el a de ourArray y asignarlo a una variable, 
podemos hacerlo con el siguiente c�digo:

Let ourVariable = ourArray[0];

Ahora ourVariable tiene el valor de a.

Adem�s de acceder al valor asociado con un �ndice, tambi�n puede establecer un �ndice 
en un valor usando la misma notaci�n:

ourArray[1] = "not b anymore";

Usando la notaci�n de corchetes, ahora hemos restablecido el elemento en el �ndice 1 
de la cadena b, ya no b. 
Ahora ourArray es ["a", "not b anymore", "c"].

Para completar este desaf�o, establezca la segunda posici�n (�ndice 1) de myArray en 
lo que desee, adem�s de la letra b.
*/

let myArray = ["a", "b", "c", "d"];

myArray[1] = "lo que desee";

console.log(myArray); //["a", "lo que desee", "c", "d"]
