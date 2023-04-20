/*
5. El valor predeterminado con OR
Si alguna vez desea establecer un valor predeterminado para una variable, 
puede hacerlo usando el operador OR(||) fácilmente.
*/

let person = {name: 'Jack'};
let age = person.age || 35; // sets the value 35 if age is undefined
console.log(`Age of ${person.name} is ${age}`);

/*
Pero espera, tiene un problema. ¿Qué pasa si la edad de la persona es 0 
(un bebé recién nacido, tal vez). La edad se computará como 35 ( 0 || 35 = 35). 
Este es un comportamiento inesperado.

Ingresa el nullish coalescing operator (??). Es un operador lógico que devuelve 
su operando del lado derecho cuando su operando del lado izquierdo es null o 
undefinedy de lo contrario devuelve su operando del lado izquierdo.

Para reescribir el código anterior con el ??operador
*/

let person2 = {name: 'Jack'};
let age2 = person2.age2 ?? 35; // sets the value 0 if age 0, 35 in case of undefined and null
console.log(`Age of ${person2.name} is ${age2}`);

