/**
Objetos literales y la notación de corchetes

Hay una sintaxis alternativa a la notación de puntos que usé hasta este momento.

Esta sintaxis alternativa se conoce como  notación de corchetes.

Para entender cómo funciona, es mejor usar un ejemplo, así que pasaré por el proceso de codificar 
el  objeto house2  nuevamente, de la misma manera que lo hice con la notación de puntos, 
solo que esta vez usaré los corchetes. notación.
 */

var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

/**
Tenga en cuenta que, al usar la notación de corchetes, simplemente envuelvo la clave de cada propiedad  
como una cadena , dentro de las comillas simples o dobles, al igual que con las cadenas normales.

Luego envuelvo toda la clave de propiedad en un corchete de apertura y cierre.

Eso es esencialmente todo lo que hay que hacer.

Puedo acceder y actualizar las propiedades de los objetos utilizando la notación de puntos, 
la notación de corchetes o una combinación de ambas, como en el siguiente ejemplo:
 */

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

/**
Por el momento, esta es probablemente suficiente información sobre la creación de objetos.

Antes de discutir el tema de las matrices y los objetos, déjame darte otra información importante sobre 
la notación de corchetes.

Con la notación de corchetes, puedo agregar caracteres de espacio dentro de los nombres de propiedades, 
como este:  
 */

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

// Además, puedo agregar números (como el tipo de datos de cadena) como claves de propiedad:
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

/**
Sin embargo, se desaconseja hacer esto, debido a las razones obvias de tener una clave de propiedad 
como una cadena de números que en realidad no transmite mucha información útil.

Finalmente, hay una cosa realmente útil que tiene la notación de corchetes pero que no está disponible
en la notación de puntos: puede evaluar expresiones.

Para entender lo que eso significa, considere el siguiente ejemplo:
 */

var arrOfKeys = ["speed", "altitude", "color"];

var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};

for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}

/*
El código anterior dará como resultado el siguiente resultado:  

100
200
red
*/

/**
 * Usando el hecho de que la notación de corchetes puede evaluar expresiones,
 * accedí a la  propiedad arrOfKeys[i]  en el  objeto drone.
 *
 * Este valor cambió en cada bucle mientras se ejecutaba el bucle for.
 *
 * Específicamente, la primera vez que se ejecutó, se evaluó así:
 *
 * - El valor de  i  era  0
 * - El valor de  arrOfKeys[i]  era  arrOfKeys[0] , que era  "velocidad"
 * - Por lo tanto,  drone[arrOfKeys[i]]  se evaluó como  drone["speed"], que es igual a  100
 *
 * Esto me permitió recorrer cada uno de los valores almacenados dentro del  objeto del dron,
 * en función de cada una de las claves de sus propiedades.
 */
