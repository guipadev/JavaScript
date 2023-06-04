/*
Comprender las diferencias entre freeCodeCamp y la consola del navegador

Es posible que haya notado que algunos desafíos de freeCodeCamp incluyen su propia consola. 
Esta consola se comporta de forma un poco diferente a la consola del navegador.

Hay muchos métodos para usar con console los mensajes de salida. 
log, warn, y clear por nombrar algunos. 
La consola de freeCodeCamp solo generará log mensajes, mientras que la consola 
del navegador generará todos los mensajes. 
Cuando realice cambios en su código, se ejecutará automáticamente y mostrará los registros. 
La consola de freeCodeCamp se borra cada vez que se ejecuta su código.

Primero, abra la consola de su navegador para que pueda ver los registros. 
Para hacerlo, puede hacer clic derecho en la barra de navegación de freeCodeCamp 
en la parte superior y hacer clic inspecten la mayoría de los navegadores. 
Luego busque la console pestaña en la ventana que se abre.

Después de eso, use console.log para registrar la output variable. 
Vea las dos consolas para ver el registro. 
Finalmente, use console.clear después de su registro para borrar la consola del navegador. 
Ver la diferencia en las dos consolas.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

*/

let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);

console.clear();
