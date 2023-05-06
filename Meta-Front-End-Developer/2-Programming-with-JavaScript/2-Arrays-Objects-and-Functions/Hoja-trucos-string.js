/*
Al final de esta lectura, usted podrá:

Identificar ejemplos de funciones de cadena y explicar cómo llamarlas

En esta hoja de trucos, enumeraré algunas de las propiedades y métodos más comunes y útiles disponibles en las cadenas.

Para todos los ejemplos, usaré una o ambas de las siguientes variables:
*/

var greet = "Hello, ";

var place = "World";

/*
Tenga en cuenta que, independientemente de las propiedades y los métodos de cadena que 
demuestre en los siguientes ejemplos, podría haberlo ejecutado en esas cadenas directamente, 
sin guardarlas en una variable como las que nombré  greeting  y  place.

En algunos de los ejemplos que siguen, en aras de la claridad, en lugar de usar un nombre de
variable, usaré la cadena misma.

Todas las cadenas tienen a su disposición varias propiedades integradas, pero hay una sola 
propiedad que es realmente útil: la  propiedad de longitud  , que se usa así:
*/

greet.length; // 7

/*
Para leer cada carácter individual en un índice específico en una cadena, comenzando desde cero, 
puedo usar el   método   charAt() :
*/

greet.charAt(0); // 'H'

/*
El  método concat()  une dos cadenas:  
*/

"Wo".concat("rl").concat("d"); // 'World'

/*
indexOf devuelve la ubicación de la primera posición que coincide con un carácter :
*/

"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".indexOf("o"); // 1
"ho-ho-ho".indexOf("-"); // 2

/*
lastIndexOf  encuentra la última coincidencia; de lo contrario ,  funciona igual que  indexOf .

El  método de división  corta la cadena en una matriz de subcadenas:
*/

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

/*
También hay algunos métodos para cambiar la carcasa de las cuerdas. Por ejemplo:  
*/

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

/*
Aquí hay una lista de todos los métodos cubiertos en esta hoja de trucos:

- charAt() 

- concat() 

- indexOf() 

- lastIndexOf() 

- split() 

- toUpperCase() 

- toLowerCase()  
*/
