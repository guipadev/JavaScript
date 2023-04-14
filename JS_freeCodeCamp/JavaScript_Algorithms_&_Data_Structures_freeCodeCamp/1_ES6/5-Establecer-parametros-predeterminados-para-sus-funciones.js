/*
Establecer parámetros predeterminados para sus funciones

Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros predeterminados para las funciones.

Mira este código:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));

console.log(greeting());

La consola mostrará las cadenas Hello Johny Hello Anonymous.

El parámetro predeterminado se activa cuando no se especifica el argumento (no está definido). 
Como puede ver en el ejemplo anterior, el parámetro name recibirá su valor predeterminado Anonymous
cuando no proporcione un valor para el parámetro. 
Puede agregar valores predeterminados para tantos parámetros como desee.

Modifique la función increment agregando parámetros predeterminados para que agregue 1 number 
si value no se especifica.

const increment = (number, value) => number + value;

*/

const increment = (number, value = 1) => number + value;