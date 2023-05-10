/*
Coincidencia de caracteres que aparecen una o más veces

A veces, necesita hacer coincidir un carácter (o grupo de caracteres) que aparece 
una o más veces seguidas. 
Esto significa que ocurre al menos una vez y puede repetirse.

Puede usar el + carácter para verificar si ese es el caso. 
Recuerde, el carácter o patrón tiene que estar presente consecutivamente. 
Es decir, el personaje tiene que repetir uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia abc y devolvería ["a"]. 
Debido a +, también encontraría una sola coincidencia aabc y regresaría ["aa"].

Si, en cambio, estuviera verificando la cadena abab, encontraría dos coincidencias y regresaría 
["a", "a"]
porque los a caracteres no están en una fila, hay una b entre ellos. 
Finalmente, dado que no hay a en la cadena bcd, no encontrará una coincidencia.

Desea encontrar coincidencias cuando la letra s aparece una o más veces en Mississippi. 
Escriba una expresión regular que use el + signo.

let quoteSample = "3 blind mice.";

let myRegex = /[^aeiou^0-9]/gi;

let result = quoteSample.match(myRegex);
*/

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
