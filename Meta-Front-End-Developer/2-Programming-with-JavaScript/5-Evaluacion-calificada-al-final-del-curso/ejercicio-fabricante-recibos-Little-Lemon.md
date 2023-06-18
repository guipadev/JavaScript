## Instrucciones del laboratorio: Creador de recibos de Little Lemon
 
> ### **Consejos: Antes de comenzar**
> #### **Para ver su código e instrucciones lado a lado**, seleccione lo siguiente en la barra de herramientas de VSCode:
> - Ver -> Distribución del editor -> Dos columnas
> - Para ver este archivo en modo de vista previa, haga clic derecho en este archivo README.md y seleccione "Abrir vista previa"
> - Seleccione su archivo de código en el árbol de archivos, lo cual lo abrirá en una nueva pestaña de VSCode.
> - Arrastre los archivos de código de la evaluación a la segunda columna.
> - ¡Buen trabajo! Ahora puede ver las instrucciones y el código al mismo tiempo.
> - ¿Tiene preguntas sobre cómo usar VSCode? Consulte nuestros recursos de soporte aquí:
> [Visual Studio Code en Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **Para ejecutar su código JavaScript**
> - Seleccione su archivo JavaScript
> - Seleccione el botón "Ejecutar código" en la barra de herramientas superior derecha de VSCode.
> Ej: Tiene la forma de un botón de reproducción triangular. <br><br>

<br>

## Instrucciones de la tarea

En este ejercicio, trabajarás con datos proporcionados como una matriz de objetos, que enumeran información sobre los platos disponibles en el restaurante Little Lemon.
<br><br>

**Paso 1:** En la función `getPrices()`, dale el parámetro `taxBoolean`.

**Paso 2:** Dentro de la función `getPrices()`, codifica un bucle for que recorrerá todos los objetos dentro de la matriz `dishData`.

**Paso 3:** Dentro del bucle for, declara una variable `finalPrice` sin asignarle un valor.

**Paso 4:** Aún dentro del bucle for, agrega una condición if, verificando que `taxBoolean` esté establecido en `true`. Dentro del bloque if, multiplica lo siguiente: * el precio del objeto actualmente recorrido de la matriz `dishData`, y * el valor del impuesto. Asigna el valor multiplicado a la variable `finalPrice`.

**Paso 5:** Justo después de la condición if, agrega un else if, verificando si el valor de `taxBoolean` es falso. Dentro del bloque de esta condición, asigna el precio del plato actualmente recorrido en la propiedad de precio de la matriz `dishData` a la variable `finalPrice`.
<br><br>

**Paso 6:** Codifica el caso `else` y, dentro de él, agrega dos líneas de código:

Un console log de la cadena:  

- "¡Necesitas pasar un valor booleano a la llamada de getPrices!"  

- return (para "salir" de la ejecución adicional de la función)
<br><br>

<b>Paso 7:</b> Después de todas las declaraciones condicionales, pero aún dentro del bucle for, agrega otro console log con cuatro argumentos:

1. La cadena `"Dish: "`

2. El valor de la propiedad de nombre del objeto de plato actualmente recorrido

3. La cadena `"Price: $

"`

5. El valor de la variable `finalPrice`
<br><br>

**Paso 8:** Has terminado con la función `getPrices()` y ahora estás listo para codificar otra función. Dale a la función `getDiscount()` dos parámetros: `taxBoolean` y `guests`.

**Paso 9:** Dentro de la función `getDiscount()`, en la primera línea de su cuerpo, invoca la función `getPrices()`, pasando `taxBoolean` como argumento.

**Paso 10:** En otra línea, debes implementar tus habilidades de codificación defensiva y verificar que el tipo del parámetro `guests` sea 'number' y que el valor de la variable `guests` sea mayor que cero y menor que 30. Si todas estas condiciones devuelven true, codifica el cuerpo de la condición como se describe en el siguiente paso. Si no todas devuelven true, codifica el cuerpo del else condicional según las instrucciones del paso 12.

**Paso 11:** Dentro de la declaración if, declara una nueva variable llamada `discount` y asígnale el valor 0. En la siguiente línea, agrega otro if...else if: en el primer if, verificarás que el valor de la variable `guests` sea menor que 5. Si ese es el caso, reasigna el valor de la variable `discount` a 5; 
- Dentro de la condición else if, verifica que el valor de la variable `guests` sea mayor o igual a 5, si es así, reasigna la variable `discount` a 10.
- Después de cerrar tu else-if, muestra en la consola lo siguiente: `'Discount is: $' + discount);`


**Paso 12:** En la condición else, muestra en la consola la siguiente cadena: `'El segundo argumento debe ser un número entre 0 y 30'`. Ahora que has terminado de declarar las funciones `getPrices()` y `getDiscount()`, puedes invocar la función `getDiscount()` varias veces, con varias combinaciones de argumentos, para comprobar su comportamiento. <br>

Aquí tienes dos ejemplos: 
- `getDiscount(true, 2) `
- `getDiscount(false, 10)`

¿Qué sucede cuando no pasas ningún argumento?

¿Qué sucede cuando pasas valores que no se esperan?