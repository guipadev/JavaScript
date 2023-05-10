/*
Atrapa paréntesis, corchetes, llaves y comillas sin cerrar

Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, 
corchetes, llaves y comillas tienen un par de cierre. 
Olvidar una pieza tiende a ocurrir cuando está editando código existente e insertando 
elementos con uno de los tipos de pares. 
Además, tenga cuidado al anidar bloques de código en otros, como agregar una función 
de devolución de llamada como argumento a un método.

Una forma de evitar este error es tan pronto como se escribe el carácter de apertura, 
incluir inmediatamente la coincidencia de cierre, luego mover el cursor entre ellos 
y continuar con la codificación. 
Afortunadamente, la mayoría de los editores de código modernos generan la segunda mitad 
del par automáticamente.

Solucione los errores de dos pares en el código.

let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

let myArray = [1, 2, 3];

let arraySum = myArray.reduce((previous, current) => previous + current);

console.log(`Sum of array values is: ${arraySum}`); // Sum of array values is: 6
