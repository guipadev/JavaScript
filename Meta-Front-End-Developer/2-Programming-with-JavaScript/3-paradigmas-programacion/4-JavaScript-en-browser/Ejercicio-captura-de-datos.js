/*
Ejercicio: captura de datos
Descripción
El objetivo de este ejercicio es acceder al contenido de un elemento, específicamente usar un clic de botón 
para reemplazar texto.

Tarea 1: El sitio web example.com
Abre el ejemplo.com sitio web en su navegador. Abra las herramientas para desarrolladores y céntrese en la pestaña Consola.

Example.com es un dominio que se puede utilizar como ejemplo en documentos, artículos y sitios web.

Si navega en su navegador a 
http://www.ejemplo.com
  verá una página web con un mensaje simple:

Dominio de ejemplo

Este dominio se establece para ser utilizado para ejemplos ilustrativos en documentos. 
Puede usar este dominio en ejemplos sin coordinación previa o sin pedir permiso.
*/

/*
Tarea 2: Obtener h1 en una variable
Utilice el método document.querySelector() para consultar el elemento h1 en la página y asignarlo a la variable denominada h1 .
*/
const h1 = document.querySelector("h1");

/*
Tarea 3: codificar una matriz
Declare una nueva variable, asígnele el nombre arr y guarde la siguiente matriz en ella:
*/

let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

/*
Tarea 4: escribir una función de manejo de clics
Escribe una nueva declaración de función, denominada handleClicks. 
No debe aceptar ningún parámetro.

Dentro de él, codifique una declaración de cambio y pásele un único parámetro, h1.innerText .

El cuerpo de la instrucción switch debe tener un total de 4 casos (siendo el cuarto el caso predeterminado).

El primer caso debe comenzar con case arr[0]: 
Debería establecer h1.innerText en arr[1] 
En otras palabras, debería asignar el valor de arr[1] a la propiedad h1.innerText 
La siguiente línea debe tener solo la palabra clave break .

El segundo caso debe comenzar con case arr[1]:
Debería establecer h1.innerText en arr[2]. 
En otras palabras, debería asignar el valor de arr[2] a la propiedad h1.innerText
La siguiente línea debe tener solo la palabra clave break .

El tercer caso debe comenzar con case arr[2]:
Debería establecer h1.innerText en arr[3]
En otras palabras, debería asignar el valor de arr[3] a la propiedad h1.innerText 
La siguiente línea debe tener solo la palabra clave break .

El caso predeterminado debería establecer el valor de la propiedad h1.innerText en arr[0] .
*/
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}

/*
Tarea 5: agregar un detector de eventos
Ha creado una variable h1 en la Tarea 2. Ahora, use esa variable para ejecutar el método addEventListener() en ella. 
Pase dos argumentos al método addEventListener() : 'click' y handleClicks .
*/
h1.addEventListener("click", handleClicks);
