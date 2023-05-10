/*
Hasta ahora, solo ha podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

Aquí match volvería ["Repeat"].

Para buscar o extraer un patrón más de una vez, 
puede usar el indicador de búsqueda global: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

Y aquí matchdevuelve el valor.["Repeat", "Repeat", "Repeat"]

Usando la expresión regular starRegex, busque y extraiga ambas Twinkle palabras 
de la cadena twinkleStar.

Nota
Puede tener varias banderas en su expresión regular como/search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
