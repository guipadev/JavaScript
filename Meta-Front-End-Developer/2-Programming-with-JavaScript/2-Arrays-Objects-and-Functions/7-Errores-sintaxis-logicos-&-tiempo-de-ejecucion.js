/*
Estos son algunos de los errores más comunes en JavaScript:

Error de referencia

Error de sintaxis

Error de tecleado

RangeError

Hay algunos otros errores en JavaScript. Estos otros errores incluyen:

Error agregado

Error

Error interno

URIError

Sin embargo, en esta lectura me centraré en los errores de referencia, sintaxis, tipo y rango.
*/

/*
ReferenceError
Se lanza un ReferenceError cuando, por ejemplo, uno intenta usar variables que no han sido declaradas en ninguna parte.

Un ejemplo puede ser, digamos, intentar consolar el registro de una variable que no existe:
*/

console.log(nombre de usuario) // Uncaught RefereceError: username is not defined

/*
SyntaxError
Cualquier tipo de código JavaScript no válido provocará un SyntaxError.
*/

var a "aqui no hay operador asignado" // Uncaught SyntaxError: Unexpected string

// Hay una advertencia interesante con respecto a SyntaxError en JavaScript: no se puede detectar con el  bloque try-catch  .  

/*
TypeError
Se genera un TypeError cuando, por ejemplo, se intenta ejecutar un método en un tipo de datos no compatible.

Un ejemplo simple es intentar ejecutar el  método pop()  en una cadena:
*/

"hola".pop() // Uncaught TypeError: "hola".pop is not a function

/*
RangeError
Se lanza un RangeError cuando estamos dando un valor a una función, pero ese valor está fuera del rango permitido 
de valores de entrada aceptables.

Aquí hay un ejemplo simple de cómo convertir un  número de Base 10 cotidiano (un número del sistema decimal común) 
a un  número de Base 2  (es decir, un número binario).
*/

(10).toSTring(2) // '1010'

/*
El valor de  2  cuando se pasa al  método toString()  , es como decirle a JavaScript: "convierte el valor de  10  del sistema numérico Base 10, a su contraparte en el sistema numérico Base 2".

JavaScript obliga y "traduce" el número 10 "regular" a su contraparte binaria.

Además de usar el sistema numérico Base 2, también puedo usar el Base 8, así:
*/

(10).toSTring(8) // 12 Obtengo este valor que es el número simple 10, escrito en el sistema numérico Base 8.


/*
Sin embargo, si trato de usar un sistema numérico inexistente, como un  Base 100 imaginario, 
ya que este sistema numérico efectivamente no existe en JavaScript, obtendré el RangeError, 
porque un sistema  Base 100 inexistente está fuera de rango  de los sistemas numéricos que 
están disponibles para el  método toString()  :
*/

(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36