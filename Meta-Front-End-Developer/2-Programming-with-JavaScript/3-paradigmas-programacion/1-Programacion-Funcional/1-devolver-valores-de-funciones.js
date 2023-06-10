/*
Devolver valores de funciones
Muchas funciones, por defecto, devuelven el valor de  undefined .

Un ejemplo es la  función console.log()  .

*/

console.log("Hello");

// Hello
// undefined

// Debido a que la  función console.log()  está diseñada para no tener el valor de retorno establecido explícitamente,
// obtiene el valor de retorno predeterminado de  undefined

/*
Ahora codificaré mi propia implementación de  console.log() , que no devuelve el valor de  undefined :
*/

function consoleLog(val) {
  console.log(val);
  return val;
}

/*
Estoy usando la   función  console.log() dentro de mi declaración de función consoleLog personalizada. 
Y lo estoy especificando para devolver el valor de su argumento.

Ahora, cuando ejecuto mi   función consoleLog() personalizada:
*/

console.log("Perro");

// Perro
// 'Perro'

// Entonces, el valor se genera en la consola, pero también se devuelve.

/*
¿Por qué es útil?

Es útil porque puedo usar valores de retorno de una función dentro de otra función.

Aquí hay un ejemplo.

Primero codificaré una función que devuelva el doble de un número que recibió:
*/
function doubleIt(num) {
  return num * 2;
}

// Ahora codificaré otra función que construye un objeto con un valor específico:

function objectMaker(val) {
  return {
    prop: val,
  };
}

// Puedo llamar a la  función objectMaker()  con cualquier valor que desee, como:
objectMaker(20); // { prop: 20 } El valor devuelto será un objeto con una sola  clave de apoyo  establecida en  20 :

doubleIt(10).toString(); // 20 El código anterior devuelve el número  20  como una cadena, es decir:  "20" .

// Incluso puedo combinar mis llamadas a funciones personalizadas de la siguiente manera:
objectMaker(doubleIt(100)); // {prop: 200}

/*
¿Qúe significa todo esto?

Significa que al permitirme JavaScript usar la  palabra clave de retorno  como se describe anteriormente, 
puedo tener múltiples llamadas a funciones, devolver datos y manipular valores, 
en función de cualquier desafío de codificación que tenga frente a mí.

Ser capaz de devolver valores personalizados es una de las bases que hace posible la programación funcional.
*/
