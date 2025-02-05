/*
Hasta ahora, ha visto expresiones regulares para hacer coincidencias literales de cadenas. 
Pero a veces, es posible que también desee hacer coincidir las diferencias 
de mayúsculas y minúsculas.

Mayúsculas (o, a veces, mayúsculas y minúsculas) es la diferencia entre letras mayúsculas 
y minúsculas. Ejemplos de mayúsculas son A, B y C. Ejemplos de minúsculas son a, b y c.

Puede hacer coincidir ambos casos usando lo que se llama una bandera. 
Hay otras banderas, pero aquí se centrará en la bandera que ignora las mayúsculas y minúsculas: 
la i bandera. 
Puede usarlo agregándolo a la expresión regular. 
Un ejemplo del uso de esta bandera es /ignorecase/i. 
Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase y IgnoreCase.

Escriba una expresión regular fccRegex para que coincida freeCodeCamp, sin importar su caso. 
Su expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.

let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
*/

let myString = "freeCodeCamp";

let fccRegex = /freeCodeCamp/i;

let result = fccRegex.test(myString);
