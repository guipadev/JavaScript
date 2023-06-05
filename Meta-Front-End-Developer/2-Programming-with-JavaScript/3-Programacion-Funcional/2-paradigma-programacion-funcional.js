/*
El paradigma de la programación funcional
Objetivos de aprendizaje
Ser capaz de explicar que existen varios paradigmas de programación.

Ser capaz de explicar la diferencia básica entre los dos paradigmas de programación predominantes: 
la programación funcional y la programación orientada a objetos.

Comprender, a un nivel muy alto, cómo funciona el paradigma de programación funcional.

"En realidad, hay varios estilos de codificación, también conocidos como  paradigmas. 
Un estilo común se llama  programación funcional , o FP para abreviar.

En la programación funcional, usamos muchas funciones y variables.
*/
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

/*
Al escribir código FP, mantenemos los datos y la funcionalidad separados y pasamos datos a funciones 
solo cuando queremos que algo se calcule.
*/

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

/*
En la programación funcional, las funciones devuelven nuevos valores y luego usan esos valores en otra parte del código.
*/

function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

/*
Otro estilo es  la programación orientada a objetos (POO). 
En este estilo, agrupamos los datos y la funcionalidad como propiedades y métodos dentro de los objetos.

Por ejemplo, si tengo un  objeto virtualPet, puedo darle una  propiedad sleepy  y un método nap():
*/

var virtualPet = {
  sleepy: true,
  nap: function () {},
};

/*
En OOP, los métodos  actualizan las propiedades  almacenadas en el objeto en lugar de generar nuevos valores de retorno.

Por ejemplo, si verifico la  propiedad sleepy  en el  objeto virtualPet  , puedo confirmar que está configurado en  true .

Sin embargo, una vez que ejecuté el   método  nap() en el objeto virtualPet  ,   ¿cambiará el valor de la propiedad sleepy ?
*/

//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

/*
OOP nos ayuda a modelar objetos de la vida real. 
Funciona mejor cuando la agrupación de propiedades y datos en un objeto tiene sentido lógico, es decir, 
las propiedades y los métodos "pertenecen juntos".

Tenga en cuenta que el objetivo aquí no es analizar la programación orientada a objetos en profundidad; 
en cambio, solo quiero mostrarles la explicación más simple de qué es y cómo funciona, 
para poder hacer la distinción más importante entre FP y OOP.

Para resumir este punto, podemos decir que el paradigma de la Programación Funcional funciona manteniendo 
separados los datos y la funcionalidad. 
Su contraparte, OOP, funciona manteniendo los datos y la funcionalidad agrupados en objetos significativos.

Hay muchos más conceptos e ideas en la programación funcional.

Estos son algunos de los más importantes:

- Funciones de primera clase
- función de orden superior
- Funciones puras y efectos secundarios

Hay muchos otros conceptos y principios en la programación funcional, pero por ahora, atengámonos a estos tres.
*/

/*
Funciones de primera clase
A menudo se dice que las funciones en JavaScript son "ciudadanos de primera clase". ¿Qué significa eso?

Significa que una función en JavaScript es solo otro valor que podemos:

- pasar a otras funciones
- guardar en una variable
- regreso de otras funciones

En otras palabras, una función en JavaScript es solo un valor; desde este punto de vista, 
casi no es diferente de una cadena o un número. Por ejemplo, en JavaScript, es perfectamente normal 
pasar la invocación de una función a otra función. 
Para explicar cómo funciona esto, considere el siguiente programa.
*/

function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

/*
Comienzo el programa con la función addTwoNums() cuya definición ya he usado anteriormente en varias variaciones.
La razón por la que esta función es un ejemplo recurrente es porque es tan simple que ayuda a explicar conceptos 
que de otro modo podrían ser un poco más difíciles de comprender. 
A continuación, codifico una función llamada randomNum() que devuelve un número aleatorio entre 0 y 10. 
Luego codifico otra función llamada specificNum() que devuelve un número específico, el número 42. A continuación, 
guardo una variable llamada useRandom y establézcalo en el valor booleano de true. 
Declaro otra variable, llamada getNumber. 
Aquí es donde las cosas se ponen interesantes. 
En las próximas líneas, tengo una declaración if else. 
La condición if se ejecuta cuando el valor de useRandom se establece en true. 
Si ese es el caso, la declaración completa de la función randomNum() se guarda en la variable getNumber. 
De lo contrario, estoy guardando toda la declaración de la función specificNum() en la variable getNumber. 
En otras palabras, en función de que useRandom se establezca en true o false , a la variable getNumber se 
le asignará la declaración de la función randomNum() o el specificNum()declaración de función. 
Con todo este conjunto de códigos, puedo invocar la función addTwoNums() , pasándole la invocación de las 
variables getNumber() como su primer y segundo argumento.

Esto funciona porque las funciones en JavaScript son realmente ciudadanos de primera clase, 
que pueden asignarse a nombres de variables y pasarse como si pasara una cadena, un número, un objeto, etc. 
Nota: la mayor parte del código 

dentro de randomNum( ) la declaración de la función proviene de una lección anterior, es decir, 
la lección que discutió el objeto Math en JavaScript. Esto me lleva al segundo concepto fundamental 
de la programación funcional, que es el concepto de funciones de orden superior.
*/

/*
Funciones de orden superior

Una función de orden superior es una función que tiene una o ambas de las siguientes características:

Acepta otras funciones como argumentos.

Devuelve funciones cuando se invoca


No hay una "forma especial" de definir funciones de orden superior en JavaScript. 
Es simplemente una característica del lenguaje. 
El lenguaje en sí me permite pasar una función a otra función o devolver una función desde otra función. 
Continuando con la sección anterior, considere el siguiente código, en el que estoy redefiniendo la función addTwoNums() 
para que sea una función de orden superior:
*/

function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}

/*
Puede pensar en la declaración de función anterior de addTwoNums como una descripción de cómo tratará 
las entradas getNumber1 y getNumber2: 
una vez que las reciba como argumentos, intentará invocarlas y concatenar los valores devueltos por esas invocaciones. 
Por ejemplo:
*/

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number

/*
Funciones puras y efectos secundarios
Otro concepto de la programación funcional son las funciones puras.

Una función pura devuelve exactamente el mismo resultado siempre que se le den los mismos valores.

Un ejemplo de una función pura es la  función addTwoNums()  de la sección anterior:
*/
function addTwoNums(a, b) {
  console.log(a + b);
}

/*
Esta función siempre devolverá la misma salida, según la entrada. 
Por ejemplo, siempre que le demos un valor específico, digamos, un  5 y un  6 :  
*/

addTwoNums(5, 6); // 11

/*
... la salida siempre será la misma.

Otra regla para que una función se considere pura es que no debe tener efectos secundarios. 
Un efecto secundario es cualquier instancia en la que una función realiza un cambio fuera de sí misma.

Esto incluye:

- cambiando los valores de las variables fuera de la función misma, o incluso confiando en variables externas
- llamar a una API del navegador (¡incluso a la consola misma!)
- llamar a Math.random() - ya que el valor no se puede repetir de manera confiable

El tema de las funciones puras e impuras puede volverse algo complejo.

Por ahora, es suficiente saber que este concepto existe y que está relacionado con la programación funcional.
*/
