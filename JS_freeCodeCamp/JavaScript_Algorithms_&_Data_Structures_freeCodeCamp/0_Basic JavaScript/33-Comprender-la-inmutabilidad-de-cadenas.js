/*
Comprender la inmutabilidad de cadenas

En JavaScript, String los valores son inmutables, lo que significa que no se pueden modificar una vez creados.

Por ejemplo, el siguiente código generará un error porque la letra B de la cadena Bob no se puede cambiar a la letra J:

let myStr = "Bob";
myStr[0] = "J";

Tenga en cuenta que esto no significa que myStr no se pueda reasignar. 
La única forma de cambiar myStr sería asignarle un nuevo valor, así:

let myStr = "Bob";
myStr = "Job";

Corrija la asignación para myStr que contenga el valor de cadena del Hello World uso del enfoque que se muestra

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
*/

let myStr = "Jello World";

myStr = "Hello World";
