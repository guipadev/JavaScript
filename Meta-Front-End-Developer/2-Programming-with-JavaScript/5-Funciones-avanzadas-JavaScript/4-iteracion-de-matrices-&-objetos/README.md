# Instrucciones de laboratorio: funciones avanzadas de JS
 
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

<br>


## Tarea: iterar sobre una matriz

En este ejercicio, utilizará el ciclo for....of para iterar sobre una matriz y para iterar sobre las propiedades propias de un objeto.
<br><br>
**Paso 1.** Se le da una variedad de productos lácteos:

    
     var lácteos = ['queso', 'crema agria', 'leche', 'yogur', 'helado', 'batido']
    


Cree una función llamada `logDairy`. Dentro de él, la consola registra cada uno de los elementos en la matriz de productos lácteos, utilizando el bucle for...of.

Después de crear esta función, llámela como `logDairy()` para ver el resultado en la consola.

El resultado esperado debe ser:

```
queso
cCrea agria
leche
yogur
helado
batido
```

<br>
<b>Paso 2.</b> Se le proporciona el siguiente código de inicio:

```
constante animal = {

puede saltar: cierto

};

const ave = Object.create(animal);

pájaro.puedeVolar = verdadero;

pájaro.tieneplumas = verdadero;
```

Cree una función llamada `birdCan`, dentro de ella, recorra las propiedades del objeto pájaro y registre en la consola cada una, usando el bucle for...of. Finalmente llame a la función como `birdCan()` para ver el resultado en la consola.
Recuerde, debe registrar en la consola tanto la clave como el valor de cada una de las propiedades del objeto pájaro.

<br/>
El resultado esperado debe ser:

```
puede volar: cierto
tiene plumas: cierto
```


<br>
<b>Paso 3.</b>
     Usando el mismo código de inicio que en la tarea 2, cree una función llamada `animalCan` y dentro de ella, recorra todas las propiedades tanto en el objeto pájaro como en su prototipo, el objeto animal, usando el bucle for...in. Finalmente llame a la función como `animalCan()` para ver el resultado en la consola.

<br/><br/>
La salida esperada debe ser:

```
puede volar: cierto
tiene plumas: cierto
puede saltar: cierto
```
<br><br>
## Paso final: ¡Enviemos su código!
¡Buen trabajo! Para completar esta evaluación:
- Guarde su archivo a través de Archivo -> Guardar
- Seleccione "Enviar tarea" en la barra de herramientas de su laboratorio.

Su código se calificará automáticamente y devolverá comentarios en breve en la pestaña "Calificaciones".
También puede ver su puntaje en la pestaña "Mi envío" de su tarea de programación.
<br> <br>