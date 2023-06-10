# Instrucciones de laboratorio: creación de un programa funcional

En este ejercicio obtendrá práctica práctica con conceptos de programación funcional.

Nota: Lo mejor es seguir estas instrucciones en la pestaña Vista previa en el lado derecho.

> ### **Consejos: Antes de comenzar**
> #### Para ver su código e instrucciones en paralelo, seleccione lo siguiente en la barra de herramientas de VSCode:
> - Ver -> Diseño del editor -> Dos columnas
> - Para ver este archivo en el modo de vista previa, haga clic derecho en este archivo README.md y `Abrir vista previa`
> - Seleccione su archivo de código en el árbol de código, que lo abrirá en una nueva pestaña de VSCode.
> - Arrastre sus archivos de código de evaluación a la segunda columna.
> - Gran trabajo! Ahora puede ver las instrucciones y el código al mismo tiempo.
> - ¿Preguntas sobre el uso de VSCode? Consulte nuestros recursos de soporte aquí:
     [Código de Visual Studio en Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **Para ejecutar tu código JavaScript**
> - Seleccione su archivo JavaScript
> - Seleccione el botón "Ejecutar código" en la barra de herramientas superior derecha de VSCode. Ejemplo: parece un botón triangular de "Reproducir". <br><br>

<br>

## Tarea 1: Cree un generador de mensajes de registro de consola basado en funciones
En este ejercicio, su tarea es codificar una función llamada `consoleStyler`, que acepta cuatro parámetros:
- `color`
- `fondo`
- `tamaño de fuente`
- `txt`

Dentro del cuerpo de la declaración de la función consoleStyler(), debe hacer lo siguiente:

1. Cree una nueva variable llamada mensaje y asígnele lo siguiente en la primera línea dentro del cuerpo de la función consoleStyler().:
     ```
     "%c" + texto;
     ```

     Sugerencia: no copie las 3 marcas posteriores. Estos se utilizan para dar formato a este documento en la pestaña Vista previa.

2. Cree una variable de estilo y asígnele lo siguiente en la siguiente línea:
     ```
     `color: ${color};`
     ```

Sugerencia: debe incluirse el único acento grave antes del color y después del punto y coma.

3. A continuación, actualice la variable de estilo (usando el operador +=) con el siguiente código:
     ```
     `fondo: ${fondo};`
     ```

Sugerencia: debe incluirse el único acento grave antes del fondo y después del punto y coma.

4. Luego, actualice la variable de estilo (nuevamente, usando el operador +=) con el siguiente código:
     ```
     `tamaño de fuente: ${tamaño de fuente};`
     ```

Sugerencia: Debe incluirse el único acento grave antes del tamaño de fuente y después del punto y coma.

5. Finalmente, la consola registra el mensaje y las variables de estilo dentro de la declaración de la función `consoleStyler`.

Sugerencia: asegúrese de usar acentos graves (``) cuando actualice sus estilos de variables y no comillas simples ('') o dobles ("").

<br>

## Tarea 2: Cree otro generador de mensajes de registro de consola.

Tu tarea es codificar otra función y llamarla `celebrateStyler()`. La función acepta un solo parámetro, razón, que debe ser del tipo de datos de cadena.

Dentro del cuerpo de la declaración de la función, codifique lo siguiente:

1. Una nueva variable, llamada fontStyle, asignándole este código:
     ```
     "color: tomate; tamaño de fuente: 50px";
     ```

2. En la siguiente línea, una sentencia if, verificando que `motivo == "cumpleaños"`.

3. Dentro del cuerpo del bloque if, codifique lo siguiente:
     ```
     console.log(`%cFeliz cumpleaños`, fontStyle);
     ```

4. En la siguiente línea, agregue un else if, y dentro de los paréntesis, verifique que
     ```
     motivo == "campeones"
     ```

5. Dentro del bloque else if, agregue este código:
     ```
     console.log(`%c¡Felicidades por el título!`, fontStyle);
     ```

6. Agregue un bloque else, con el siguiente código dentro:
     ```
     console.log(mensaje, estilo);
     ```

<br>

## Tarea 3: Ejecute las funciones de consoleStyler y celebrityStyler

1. Invoque la función consoleStyler(), con los siguientes argumentos:

     - `'#1d5c63'`

     - `'#ede6db'`

     - `'40 píxeles''

     - ``¡Felicidades!``

2. A continuación, invoque la función enjoyStyler(), con el siguiente argumento:

     - `'cumpleaños'`


## Tarea 4: Insertar un mensaje de felicitación y personalizado

1. Codifique otra función, llamada `styleAndCelebrate()`.
El cuerpo de la declaración de función debe constar de dos invocaciones de función:
     ```
     consoleStyler(color, fondo, tamaño de fuente, txt);
     celebrarStyler(motivo);
     ```


2. A continuación, invoque la nueva función utilizando los siguientes argumentos:

     - `'ef7c8e'`
     - `'fae8e0'`
     - `'30px'`
     - ``¡Lo lograste!``
     - `'campeones'`

<br>

## Paso final: ¡Enviemos su código!
¡Buen trabajo! Para completar esta evaluación:
1. Guarde su archivo a través de Archivo -> Guardar
2. Seleccione "Enviar tarea" en la barra de herramientas de su laboratorio.

Su código se calificará automáticamente y devolverá comentarios en breve en la pestaña "Calificaciones".
También puede ver su puntaje en la pestaña "Mi envío" de su tarea de programación.
<br> <br>

### ¡Gran trabajo! Continúe con la siguiente lección.