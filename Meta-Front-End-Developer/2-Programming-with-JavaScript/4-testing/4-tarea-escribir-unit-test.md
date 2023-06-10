# Instrucciones del laboratorio: Pruebas unitarias

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

## Tarea 1: Agregar Jest como una devDependency

Abra la terminal. Asegúrese de que esté apuntando al directorio `jest-testing`.
Instale el paquete npm `jest` usando el comando `npm install` y la bandera `--save-dev`.
Verifique que la instalación se haya completado correctamente abriendo el archivo `package.json` y confirmando que la entrada `"devDependencies"` enumera `jest` similar a lo siguiente:

```
"devDependencies": {
    "jest": "^28.0.0"
}
```
<br>

## Tarea 2: Actualizar la entrada de prueba

En el archivo `package.json`, localice la entrada `"scripts"` y, dentro de ella, actualice la entrada `"test"` a `jest`.
<br><br>

## Tarea 3: Codificar la función timesTwo

Abra el archivo `timesTwo.js` y agregue una función llamada `timesTwo`. La función debe tomar un número como entrada y devolver el valor obtenido al multiplicar el número por 2.
Exporte la función `timesTwo` como un módulo.
<br><br>

## Tarea 4: Escribir la primera prueba

Escriba una llamada de `test` con los siguientes argumentos:
1. La descripción que dice: "returns the number times 2" (devuelve el número multiplicado por 2).
2. El segundo argumento debe `expect` (esperar) que la llamada a la función `timesTwo`, cuando se le pase el número `10`, sea igual a `20`.
<br><br>

## Tarea 5: Ejecutar la primera prueba

Con la terminal apuntando al directorio `jest-testing`, ejecute el script `test` usando `npm`.