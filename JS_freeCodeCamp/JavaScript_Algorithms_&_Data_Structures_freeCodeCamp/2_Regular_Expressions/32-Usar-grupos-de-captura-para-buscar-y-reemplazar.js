/*
Usar grupos de captura para buscar y reemplazar

La búsqueda es útil. Sin embargo, puede hacer que la búsqueda sea aún más poderosa 
cuando también cambia (o reemplaza) el texto que busca.

Puede buscar y reemplazar texto en una cadena usando .replace() en una cadena. 
Las entradas para .replace() son primero el patrón de expresiones regulares que desea buscar. 
El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;

wrongText.replace(silverRegex, "blue");

La replace llamada devolvería la cadena The sky is blue..

También puede acceder a los grupos de captura en la cadena de reemplazo con signos de dólar ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

La replace llamada devolvería la cadena Camp Code.

Escriba una expresión regular fixRegex usando tres grupos de captura que buscarán cada palabra 
en la cadena one two three. 
Luego actualice la replaceText variable para reemplazarla one two three con la cadena three two one
y asigne el resultado a la result variable. 
Asegúrese de utilizar grupos de captura en la cadena de reemplazo mediante la $sintaxis 
del signo de dólar ( ).

let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
