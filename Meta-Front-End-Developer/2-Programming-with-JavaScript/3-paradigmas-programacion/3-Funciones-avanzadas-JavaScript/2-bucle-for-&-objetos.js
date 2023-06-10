/*
En esta lectura, aprenderá cómo funciona conceptualmente el bucle for of.

Para empezar, es importante saber que un bucle for of no puede funcionar en un objeto directamente, 
ya que  un objeto no es iterable . Por ejemplo:
*/

const car = {
  speed: 100,
  color: "blue",
};

for (prop of car) {
  console.log(prop);
}

// Ejecutar el fragmento de código anterior generará el siguiente error:
// Uncaught TypeError: car is not iterable

// A diferencia de los objetos, las matrices  son  iterables. Por ejemplo:

const colors = ["red", "orange", "yellow"];

for (var color of colors) {
  console.log(color); // red orange yellow
}

/*
Afortunadamente, puede usar el hecho de que un bucle for of se puede ejecutar en matrices  para recorrer objetos .

¿Pero cómo?

Antes de que pueda responder correctamente a esta pregunta, primero debe revisar tres métodos integrados:  
Object.keys() ,  Object.values() y  Object.entries() .

Métodos incorporados
El   método Object.keys()
El  método Object.keys()  recibe un objeto como su parámetro. Recuerde, este objeto es  el objeto que desea recorrer . 
Todavía es demasiado pronto para explicar cómo recorrerá el objeto en sí; por ahora, concéntrese en la matriz de
propiedades devuelta cuando llame al  método Object.keys()  .

Aquí hay un ejemplo de cómo ejecutar el  método Object.keys()  en un nuevo  objeto car2  :
*/

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // ['speed','color']

/*
Entonces, cuando ejecuto  Object.keys()  y le paso mi   objeto  car2 , el valor devuelto es una matriz de cadenas, 
donde cada cadena es una clave de propiedad de las propiedades contenidas en mi   objeto car2 .

El método Object.values()
Otro método útil es  Object.values() :
*/

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

/*
El método Object.entries()
Finalmente, hay otro método útil,  Object.entries() , que devuelve una matriz que enumera tanto las claves como los valores.  
*/

const car4 = {
    speed: 400,
    color: 'magenta'
}

console.log(Object.entries(car4));

// Lo que se devuelve de la invocación del  método Object.entries()  es lo siguiente:  

[ ['speed', 400], ['color', 'magenta'] ]

/*
Esta vez, los valores que se devuelven son matrices de 2 miembros anidadas dentro de una matriz. 
En otras palabras, obtiene una matriz de matrices, donde cada elemento de la matriz tiene dos miembros, 
el primero es la clave de una propiedad y el segundo es el valor de una propiedad.

Efectivamente, es como si estuviera enumerando todas las propiedades de un objeto determinado, algo así:
*/

[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]

/*
Para resumir, aprendió que puede realizar un bucle sobre matrices utilizando el  bucle for of  .
También aprendió que puede extraer claves, valores o ambos de un objeto, utilizando la   sintaxis Object.keys() ,
 Object.values() y  Object.entries() .

Ejemplos
Ahora tiene todos los ingredientes que necesita para  recorrer las claves y valores de propiedad de cualquier objeto .

Aquí hay un ejemplo muy simple de hacer precisamente eso:
*/


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

/*
La parte más difícil de entender en esta sintaxis es probablemente  clothingItem[key] .

Afortunadamente, esto no es demasiado difícil de comprender, especialmente porque ya cubriste el concepto 
anteriormente cuando estabas aprendiendo  cómo acceder al miembro de un objeto usando la notación de corchetes .

Recuerde que también aprendió cómo puede acceder dinámicamente a un nombre de propiedad.

Para revisar este concepto y mostrar una demostración práctica de cómo funciona, codifiquemos una declaración 
de función que asigne aleatoriamente la  velocidad de la cadena  o el  color de la cadena  a un nombre de variable,
y luego construyamos un objeto que tenga solo dos teclas: una  tecla de velocidad  y una  clave de color  .

Después de esta configuración, podrá acceder dinámicamente a cualquiera de esas propiedades en un nuevo  objeto de dron, 
utilizando la notación de corchetes.

Aquí está el código del ejemplo:
*/


function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();


/*
Este ejemplo puede parecer un poco complicado, pero su propósito es demostrar el hecho de que está obteniendo 
uno u otro valor de la clave de un objeto, según la cadena que se asignó a la variable dynamicKey y se accedió 
sin problemas  ,  usando la notación de corchetes.

Siéntete libre de ejecutar la  función testBracketsDynamicAccess()  varias veces, y notarás que a veces el valor 
que se obtiene es  15 y, a veces,  naranja , aunque siempre accedo a la   tecla drone[dynamicKey] . 
Dado que el valor de dynamicKey  se completa en la  invocación Math.random()  , a veces esa expresión se evalúa como
  drone["speed"] , y otras veces esa expresión se evalúa como  drone["color"] .


Ahora ha aprendido acerca de los componentes básicos que hacen que el bucle for of sea útil para iterar sobre objetos, 
aunque los objetos no son iterables.

A continuación, probará un ejemplo práctico de cómo trabajar con el bucle for of y for in. 
Cada bucle tiene su lugar y puede considerarse útil en diferentes situaciones.
*/