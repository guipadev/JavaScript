/*
Considere el siguiente ejemplo: trabaja como desarrollador para una tienda en línea.

La tienda vende cubos de letras para niños pequeños, y toda la sección "Comprar ahora" del sitio está organizada en un diseño en el que cada cubo en venta se muestra en un componente de tarjeta simple, con una imagen del cubo, la letra que enseña, una breve descripción, y el precio.

Las cartas están organizadas en filas, de modo que cada fila contiene tres cartas, tres letras diferentes.

Cada tarjeta es una vista previa de ese cubo de letras específico a la venta, y también es un enlace a una página completa, dedicada a brindar más información sobre los cubos, su valor didáctico y brindar al visitante una forma de completar su proceso de pago.

Ahora, aquí hay una pregunta rápida: ¿dónde encajarían los bucles para mostrar esta cuadrícula de tarjetas que muestran los cubos de letras a la venta?

Para entender cómo funciona esto, permítanme codificar un prototipo básico de cómo podría funcionar.

Dado que aún no tiene los conocimientos suficientes para mostrar diseños de sitios web en el navegador con la ayuda de JavaScript, por ahora tendré que conformarme con usar una cadena simple y la consola.
*/

var cubes = "ABCDEFG";

//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

/*
Nota: Para que se apliquen los estilos, intente ejecutar este fragmento de código en la consola de su navegador.

Eso es todo, con este código simple, la salida en la consola muestra cada letra en una línea separada, con el estilo de un cubo de letras para niños pequeños.

El código en sí debería ser familiar en su mayor parte, excepto por la  sintaxis cubes.length  y  cubes[i]  .

Sin entrar en demasiados detalles, aquí hay dos fragmentos de código explicados de la manera más simple posible.

cubes.length   devuelve un número . Dado que  cubes  es una cadena de caracteres,  cubes.length  me da la longitud de la cadena guardada en la variable.

Así que esto me da el número 7, haciendo que mi ciclo for se vea así:
*/

var cubes = "ABCDEFG";

//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

/*
El segundo fragmento de código que es nuevo aquí es el  fragmento cubes[i]  .

Esto simplemente apunta a cada letra individual en el ciclo, según el valor actual de la  variable i  .

En otras palabras,  cubes[i] , cuando  i  es igual a  0 , es:  A .

Entonces,  cubes[i] , cuando  i  es igual a  1 , es:  B .

Esto continúa durante tantos bucles como se ejecuta el bucle for, y esto está determinado por el   valor cubes.length .

También es muy versátil, ya que, si yo, por ejemplo, decidiera cambiar la longitud de la  cadena de cubos  , no tendría que actualizar la condición de  i < cubes.length , porque se actualiza automáticamente cuando cambio la longitud de la cadena.  cadena de cubos  .

Hay otras formas de almacenar datos en aplicaciones de JavaScript de las que no ha oído hablar.

Pero podemos usar el mismo enfoque con esos otros tipos de datos, para lograr resultados que esencialmente funcionan con el mismo principio que el que acabamos de describir.

El uso de bucles es la esencia del enfoque adoptado en el desarrollo de muchas piezas diferentes de funcionalidad en el software de hoy.

Algunos ejemplos adicionales
Si estoy codificando un cliente de correo electrónico, obtendré algunos datos estructurados sobre los correos electrónicos que se mostrarán en la bandeja de entrada, luego usaré un bucle para mostrarlos con un formato agradable.

Si estoy codificando un sitio de comercio electrónico que vende autos, obtendré una fuente de datos bien estructurados en cada uno de los autos, luego recorreré esos datos para mostrarlos en la pantalla.

Si estoy codificando un calendario en línea, recorreré los datos contenidos en cada uno de los días para mostrar un calendario con un formato agradable.

Hay muchos, muchos otros ejemplos del uso de bucles en el código.

El uso de bucles con datos que tienen el formato adecuado para una tarea determinada es un componente crucial de la creación de software.

En las lecciones que siguen, aprenderemos sobre diferentes formas de agrupar datos relacionados y mostrarlos en la pantalla usando JavaScript.

Cuando se combina con lo que ya aprendió sobre los bucles, esto le brinda las habilidades para crear varios tipos de interfaces de usuario donde hay información repetitiva.

Algunos ejemplos más específicos incluyen:

recorrer títulos de publicaciones de blog en algunos datos estructurados y mostrar cada título de publicación de blog en una página de inicio de blog

recorrer las publicaciones de las redes sociales en algunos datos estructurados y mostrar cada publicación de las redes sociales en función de algunas condiciones

recorrer algunos datos estructurados sobre ropa disponible para la venta en una tienda de ropa en línea y mostrar datos relevantes para cada prenda de vestir

Ahora comprende la importancia de saber cómo trabajar con bucles en JavaScript. En las próximas lecciones, aprenderemos otra información relevante que le permitirá hacer esto.
*/
