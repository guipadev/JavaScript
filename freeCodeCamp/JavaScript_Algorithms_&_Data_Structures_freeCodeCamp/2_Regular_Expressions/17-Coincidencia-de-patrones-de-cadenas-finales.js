/*
Coincidencia de patrones de cadenas finales

En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones 
al comienzo de las cadenas. 
También hay una forma de buscar patrones al final de las cadenas.

Puede buscar el final de las cadenas utilizando el carácter de signo de dólar $ al final 
de la expresión regular.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

La primera test llamada regresaría true, mientras que la segunda regresaría false.

Utilice el carácter ancla ($) para hacer coincidir la cadena caboose al final de la cadena caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
