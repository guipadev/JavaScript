/*
Ejemplos de literales de plantilla
El objetivo de esta lectura es ayudarlo a comprender cómo funcionan los literales de plantilla.

¿Qué son los literales de plantilla?
Los literales de plantilla son una forma alternativa de trabajar con cadenas, que se introdujo en la incorporación de ES6 al lenguaje JavaScript.

Hasta ES6, la única forma de crear cadenas en JavaScript era delimitarlas con comillas simples o dobles:
 */

'Hello, World!'
"Hello, World!"

// Junto con las formas anteriores de crear cadenas, ES6 introdujo el uso de caracteres de acento grave como delimitadores:  

`Hello, World!`

/*
El fragmento de código anterior es un ejemplo de una cadena de plantilla, que también se conoce como literal de plantilla.

Nota: En la mayoría de los teclados, el carácter de acento grave se puede ubicar sobre la tecla TAB, a la izquierda de la tecla número 1.
*/

/*
Diferencias entre una plantilla y una cadena regular
Hay varias formas en las que una cadena de plantilla es diferente de una cadena normal.

Primero, permite la  interpolación de variables :
*/

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

// El registro de la consola anterior generará:  
Hello World !

/*
Esencialmente, el uso de literales de plantilla permite a los programadores incrustar variables directamente
 entre los acentos graves, sin necesidad de usar el  operador +  y las comillas simples o dobles para delimitar
  los literales de cadena de las variables. En otras palabras, en ES5, el ejemplo anterior tendría que escribirse 
  de la siguiente manera:  
*/

var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals

/*
Además de la interpolación de variables, las cadenas de plantillas pueden abarcar varias líneas.

Por ejemplo, esta es una sintaxis perfectamente buena:
*/

`Hello,
World
!
`
/*
Tenga en cuenta que esto no se puede hacer usando  cadenas literales 
(es decir, cadenas delimitadas entre comillas simples o dobles):  
*/
"Hello,
World"

/*
El código anterior, cuando se ejecuta, generará un error de sintaxis.

En pocas palabras, los literales de plantilla permiten cadenas de varias líneas, 
algo que simplemente no es posible con los literales de cadena.

Además, la razón por la que es posible interpolar variables en los literales de plantilla 
es porque esta sintaxis en realidad permite la  evaluación de expresiones .

En otras palabras, esto:
*/

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

/*
El ejemplo anterior registrará en la consola la siguiente cadena: ¡  5 estrellas! .

Esto abre un sinfín de posibilidades. Por ejemplo, es posible evaluar una expresión ternaria dentro de un literal de plantilla.


Algunos casos de uso adicionales de los literales de plantilla son  los literales de plantilla anidados  y 
 las plantillas etiquetadas . Sin embargo, están un poco más involucrados y están más allá del alcance de esta lectura.

Si tiene curiosidad acerca de cómo funcionan, consulte la lectura adicional proporcionada al final de esta lección.
*/