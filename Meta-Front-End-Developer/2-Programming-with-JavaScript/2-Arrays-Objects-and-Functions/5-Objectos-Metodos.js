/**
Como ya sabrá, un objeto consta de pares clave-valor, conocidos como propiedades.

Podemos agregar nuevos pares clave-valor a objetos existentes usando la notación de puntos y el operador de asignación.
 */

var car = {};

car.color = "red"; //update the value of a property of the car objject

/**
 Estos se conocen como propiedades y pueden tomar muchos tipos de datos, incluidas funciones.
 */

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function () {
  console.log("engine running");
};

/**
  Si la función es una propiedad de un objeto, se la denomina método.
  
  Esta es una función a la que solo se puede acceder a través del objeto JavaScript del que es miembro. Por ejemplo, solo se puede acceder al método de registro, que pertenece al objeto de la consola, a través del objeto de la consola.
  
  consola.log('Hola mundo');  
  
  Exploremos esto más a fondo ahora. Crearé un objeto usando algo conocido como la función constructora.
  */

car.mileage = 98765;
car.color = "red";
console.log(car); // { color: 'red', turnKey: [Function (anonymous)], mileage: 98765 }

/**
 Primero, construiré un nuevo objeto llamado literalmente  car . Escribo  var , space,  car , space, signo igual, space, seguido de un conjunto de llaves y, finalmente, un punto y coma.

 Ahora, extenderé el  objeto del automóvil  asignándole una propiedad denominada  kilometraje .

 Cuando inspecciono el objeto, puedo confirmar que contiene una  propiedad de kilometraje  establecida en  98765 .

 Quiero agregar otra propiedad al  objeto del automóvil  . Esta vez, agregaré una propiedad llamada  color  y la estableceré en el valor de  "red" .

 Puedo inspeccionar el objeto nuevamente escribiendo su nombre en la consola del navegador. Así que ahora, cuando escribo  console.log(car) , obtengo un objeto con dos propiedades: la   propiedad  de kilometraje , que se establece en 98765 , y la  propiedad de color  , establecida en  "red" .

 Genial, ahora he agregado dos propiedades a mi objeto.

 A continuación, quiero agregar un método a mi  objeto de automóvil  . Y este método, cuando se llama, generará un texto en la consola.

 Entonces, una vez más, agrego otra propiedad a mi  objeto de automóvil  . Después de todo, un método es solo otra propiedad del  objeto automóvil  . Es solo otro par clave-valor que contiene el objeto del automóvil.

 Lo que es único es que el valor que le estoy asignando es una función.
 */

console.log(car); // { color: 'red', turnKey: [Function (anonymous)], mileage: 98765 }

/**
 Entonces, comienzo escribiendo  car  dot  turnTheKey , equals, y luego escribo el código para mi función. Así que  función , abrir-cerrar paréntesis. Luego las dos llaves donde colocaré mi código. Finalmente, dentro de las llaves, escribo el registro de puntos de la consola seguido del mensaje  "El motor está funcionando" .

 Ahora puedo volver a inspeccionar el objeto de mi  coche  escribiendo su nombre en el método de registro de la consola. Esta vez, muestra que el  objeto del automóvil  contiene tres propiedades; la  propiedad de color  , la  propiedad de kilometraje  y la  propiedad turnTheKey  .

 Recuerde que todos los pares clave-valor en un objeto se denominan simplemente propiedades. Sin embargo, si quiero diferenciar entre las propiedades que se pueden ejecutar, me refiero a tales propiedades como métodos.

 Entonces, ahora quiero agregar otro método al  objeto del automóvil  . Llamaré a este  lightsOn .

 Una vez más, escribo  car.lightsOn y luego agrego un signo de igual y nuevamente, dado que es un método, lo estoy asignando a una función. Esta función también tendrá un registro de consola en su cuerpo, y solo estoy registrando la cadena con el texto  "Las luces están encendidas" .
 */

car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};

console.log(car);
/*
{
  color: 'red',
  turnKey: [Function (anonymous)],
  mileage: 98765,
  turnTheKey: [Function (anonymous)],
  lightsOn: [Function (anonymous)]
}
*/

car.turnTheKey(); // The engine is running
car.lightsOn(); // The lights are on.

/**
Ok, ahora he agregado cuatro propiedades a mi objeto. Y dos de ellos son métodos.

Ya me aseguré de obtener el  kilometraje  y  el color correctos  del objeto de mi  automóvil. 
Ahora, intentaré ejecutar los  métodos turnTheKey  y  lightsOn  .

Primero, invocaré el  método turnTheKey  .

Recuerde que solo se puede acceder a este método a través del  objeto del automóvil, 
por lo que primero debo escribir el nombre del objeto que contiene el  método turnTheKey. 
En otras palabras, necesito escribir la palabra  car , seguida de un punto y luego el nombre de mi método, 
que es  turnTheKey .

Recuerde que esta propiedad es un método. 
Entonces, para ejecutarlo, necesito agregar un paréntesis de apertura y cierre para que el motor 
JavaScript pueda procesar mi código JavaScript.

Tenga en cuenta que esto da como resultado la  cadena "El motor está funcionando"  registrada en la consola.

Ahora voy a probar el otro método. 
Una vez más, necesito acceder a él a través del  objeto car, así que escribo  car.lightsOn y, 
nuevamente, necesito agregar esos paréntesis para invocar el  método lightsOn. 
Presiono la tecla ENTER y noto que el texto se muestra en la consola.

¡Éxito! Es importante recordar que cuando el motor de JavaScript ejecuta esta línea de código, 
ubica el  objeto del automóvil  en su memoria. 
Luego, encuentra el  método lightsOn  en el  objeto del automóvil. 
Lee la declaración de función que está guardada en esta propiedad y la ejecuta, línea por línea.

Dado que solo hay una línea de código, el motor de JavaScript registra la cadena  "Las luces están encendidas"  
en la consola.
  */
