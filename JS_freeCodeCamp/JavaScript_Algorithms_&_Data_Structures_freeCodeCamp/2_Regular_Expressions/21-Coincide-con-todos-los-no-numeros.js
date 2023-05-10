/*
Coincide con todos los no números

El último desafío mostró cómo buscar dígitos usando el atajo \d con minúsculas d. 
También puede buscar elementos que no sean dígitos usando un atajo similar que 
usa mayúsculas D en su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. 
Esto es igual a la clase de caracteres [^0-9], que busca un solo carácter que no sea 
un número entre cero y nueve.

Use la clase de caracteres abreviados para no dígitos \D
para contar cuántos no dígitos hay en los títulos de las películas.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

console.log(result); // 17
