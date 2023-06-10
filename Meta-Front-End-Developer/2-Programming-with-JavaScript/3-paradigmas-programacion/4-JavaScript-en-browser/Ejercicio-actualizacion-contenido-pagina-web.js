/*
Ejercicio: actualización del contenido de la página web
En esta lectura, aprenderá cómo capturar la entrada del usuario y procesarla. 
Se le presentará un ejemplo simple que demuestra cómo manipular la información que se muestra
en función de la entrada del usuario.

Para capturar la entrada del usuario, puede usar el método incorporado de  aviso ()  , como este:
*/

let answer = prompt("What is your name?");

/*
Una vez que tenga la entrada proporcionada por el usuario dentro de la  variable de respuesta, 
puede manipularla de la forma que necesite.

Por ejemplo, puede mostrar la información escrita en la pantalla, como un   elemento HTML <h1> .

Así es como lo harías:
*/

if (typeof answer === "string") {
  var h1 = document.createElement("h1");
  h1.innerText = answer;
  document.body.innerText = "";
  document.body.appendChild(h1);
}

/*
Esta es probablemente la forma más rápida y fácil de capturar la entrada del usuario en un sitio web, 
pero hacerlo de esta manera no es el enfoque más eficiente, especialmente en escenarios más complejos.

Aquí es donde entran los formularios HTML.

Puede codificar un script que tomará una entrada de un formulario HTML y 
mostrará el texto que un usuario escribe en la pantalla.

Así es como se hace esto.

Comenzará codificando una "solución de prueba" para la tarea en cuestión
*/

var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

/*
Entonces, esencialmente está haciendo lo mismo que hizo antes, solo que esta vez también está agregando dinámicamente
el  elemento de entrada  y está configurando su   atributo  de tipo HTML en texto. 
De esa manera, cuando comience a escribir en él, las letras se mostrarán en el  elemento h1  de arriba.

Sin embargo, todavía no estás allí. En este punto, el código anterior, cuando se ejecuta en un sitio web en vivo, 
agregará el  elemento h1  con el texto "Escriba en la entrada para hacer que este texto cambie",
y un campo de formulario de entrada vacío debajo.

Puede probar este código usted mismo, por ejemplo, dirigiendo su navegador al  sitio web example.com  
y ejecutando el código anterior en la consola.

Recuerda que puedes acceder a la consola desde las herramientas para desarrolladores de tu navegador.

Otra cosa obstinada que hiciste en el código anterior es: configurar mis variables usando la  palabra clave var.

Aunque es mejor usar  let  o  const , solo está ejecutando un experimento rápido en un sitio web en vivo 
y desea usar la palabra clave variable más indulgente, la que no se quejará de que ya configuró el h1  
o  la  entrada  variables

Si tuviera un proyecto completo con una configuración moderna de herramientas de JavaScript, 
usaría  let  o  const , pero esta es solo una demostración rápida, por lo que usar  var  en este caso está bien.

Lo siguiente que debe hacer es: configurar un detector de eventos. El evento que está escuchando 
es el  evento de cambio. 
En este caso, el evento de cambio se activará después de que haya ingresado y presionado la tecla ENTER.

Aquí está su código actualizado:
*/

var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", function () {
  console.log(input.value);
});

/*
Esta vez, cuando ejecuta el código anterior en dicho  sitio web example.com, 
luego escribe algo de texto en el campo de entrada y presiona la tecla Intro, 
obtendrá el valor del texto ingresado registrado en la consola.

Ahora, lo único que aún debe hacer para completar mi código es actualizar el contenido 
de texto del  elemento h1  con el valor que obtuvo del  campo de entrada  .

Aquí está el código completo y actualizado:
*/

var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", function () {
  h1.innerText = input.value;
});

/*
Después de esta actualización, lo que escriba en la entrada, después de presionar la tecla ENTER, 
se mostrará como texto dentro del   elemento h1 .

Aunque esto completa este elemento de la lección, es importante tener en cuenta que la combinación
de la manipulación de DOM y el manejo de eventos permite algunos sitios web interactivos verdaderamente notables.
*/
