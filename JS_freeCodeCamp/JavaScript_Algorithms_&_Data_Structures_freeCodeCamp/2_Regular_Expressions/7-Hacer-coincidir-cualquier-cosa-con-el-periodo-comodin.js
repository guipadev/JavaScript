/*
Hacer coincidir cualquier cosa con el período comodín

A veces no conocerá (o no necesitará) los caracteres exactos de sus patrones. 

Pensar en todas las palabras que coincidan, por ejemplo, con una falta de ortografía 
llevaría mucho tiempo. 
Afortunadamente, puedes ahorrar tiempo usando el carácter comodín:.

El carácter comodín . coincidirá con cualquier carácter. 
El comodín también se llama dot y period. 
Puede usar el carácter comodín como cualquier otro carácter en la expresión regular.

Por ejemplo, si desea hacer coincidir hug, huh, hut y hum, 
puede usar la expresión regular /hu./ para hacer coincidir las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

Ambas test llamadas regresarían true.

Complete la expresión regular un Regex para que coincida con las cadenas run, sun, fun, pun, nuny bun. 
Su expresión regular debe usar el carácter comodín.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
