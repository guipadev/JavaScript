/*
Usando expresiones regulares como /coding/, puede buscar el patrón coding en otra cadena.

Esto es poderoso para buscar cadenas individuales, pero está limitado a un solo patrón. 
Puede buscar varios patrones utilizando el operador alternation o :. OR |

Este operador coincide con los patrones anteriores o posteriores. 
Por ejemplo, si desea hacer coincidir las cadenas yes o no, la expresión regular que 
desea es /yes|no/.

También puede buscar más de dos patrones. Puede hacer esto agregando más patrones con más 
OR operadores separándolos, como /yes|no|maybe/.

Complete la expresión regular petRegex para que coincida con las mascotas dog, cat, bird o fish.

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
*/

let petString = "James has a pet cat.";

let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petString);
