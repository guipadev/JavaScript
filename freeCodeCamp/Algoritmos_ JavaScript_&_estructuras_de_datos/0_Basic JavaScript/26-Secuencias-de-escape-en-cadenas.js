/*
Secuencias de escape en cadenas

Las comillas no son los únicos caracteres que se pueden escapar dentro de una cadena. 
Las secuencias de escape le permiten usar caracteres que de otro modo no podría usar en una cadena.
 ______      __________
|Código|	|Producción|
 ------      ----------
\'	        una frase
\"	        comillas dobles
\\	        barra invertida
\n	        nueva línea
\t	        pestaña
\r	        retorno de carro
\b	        retroceso
\f	        alimentación de formulario

Tenga en cuenta que la barra invertida en sí debe tener escape para que se muestre como una barra invertida.

Asigne las siguientes tres líneas de texto a la única variable myStr usando secuencias de escape.

Primera linea
    \Segunda linea
Tercera Línea

Deberá usar secuencias de escape para insertar caracteres especiales correctamente. 
También deberá seguir el espaciado como se ve arriba, sin espacios entre secuencias de escape o palabras.

Nota: La sangría para SecondLine se logra con el carácter de escape de tabulación, no con espacios.

const myStr = ""; // Change this line
*/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
