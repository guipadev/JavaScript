# Instrucciones de laboratorio: Programación orientada a objetos
 
> ### **Consejos: Antes de comenzar**
> #### **Para ver su código e instrucciones en paralelo**, seleccione lo siguiente en la barra de herramientas de VSCode:
> - Ver -> Diseño del editor -> Dos columnas
> - Para ver este archivo en el modo de vista previa, haga clic derecho en este archivo README.md y `Abrir vista previa`
> - Seleccione su archivo de código en el árbol de código, que lo abrirá en una nueva pestaña de VSCode.
> - Arrastre sus archivos de código de evaluación a la segunda columna.
> - Gran trabajo! Ahora puede ver las instrucciones y el código al mismo tiempo.
> - ¿Preguntas sobre el uso de VSCode? Consulte nuestros recursos de soporte aquí:
> [Código de Visual Studio en Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
> #### **Para ejecutar tu código JavaScript**
> - Seleccione su archivo JavaScript
> - Seleccione el botón "Ejecutar código" en la barra de herramientas superior derecha de VSCode.
> Ej: Parece un botón triangular de "Reproducir". <br><br>

## Tarea 1: codificar una clase de persona

Codifique una clase Person, con tres parámetros en el constructor: nombre, edad y energía.

Establezca los parámetros predeterminados en la clase Person de la siguiente manera:

```
nombre = "Tom"

edad = 20

energía = 100
```

Codifique dos métodos en la clase `Person`. Nombre esos métodos `sleep()` y `doSomethingFun()`.

El método `sleep()` debería tomar el nivel de energía existente y aumentarlo en 10.

El método doSomethingFun() debe tomar el nivel de energía existente y disminuirlo en 10.
<br><br>

## Tarea 2: codificar una clase de trabajador

Codifique una subclase heredada de la clase `Persona` y asígnele el nombre `Trabajador`.

La clase `Worker` tiene dos parámetros adicionales en el constructor:
- xp (para "puntos de experiencia")
- salario por hora.

Estas propiedades se establecen en los siguientes valores predeterminados:
```
x = 0

salario por hora = 10
```
La clase `Worker` tiene todos los parámetros y métodos de su superclase.

Además, tiene el método `goToWork()`, que, cada vez que se ejecuta, aumenta el valor de la propiedad `xp` en 10.
<br><br>

## Tarea 3: codificar un objeto interno

Dentro de la función interna, cree una instancia de la clase 'Trabajador' para codificar un nuevo objeto interno.

El pasante debe tener las siguientes características:
```
nombre: Bob

edad: 21

energía: 110

xp: 0

salario por hora: 10
```

Ejecute el método `goToWork()` en el objeto interno. Luego `devuelve` el objeto interno.

<br><br>


## Tarea 4: codificar un objeto administrador

Dentro de la función de administrador, crea una instancia de la clase "Trabajador" para codificar un nuevo objeto "administrador".

El objeto administrador debe tener las siguientes características:
```
nombre: alicia

edad: 30

energía: 120

experiencia: 100

salario por hora: 30
```

Ejecute el método `doSomethingFun()` en el objeto administrador. Luego `devuelve` el objeto administrador.

<br><br>

### ¡Buen trabajo!