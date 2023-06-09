/*
Constructores
JavaScript tiene una serie de tipos de objetos integrados, como:

 Matemáticas ,  fecha ,  objeto ,  función ,  booleano ,  símbolo ,  matriz ,  mapa ,  conjunto ,  promesa ,  JSON , etc.

Estos objetos a veces se denominan "objetos nativos".

Las funciones de constructor, comúnmente denominadas simplemente "constructores", 
son funciones especiales que nos permiten crear instancias de estos objetos nativos incorporados. 
Todos los constructores están en mayúscula.

Para usar una función constructora, debo anteponerle el operador  new .

Por ejemplo, para crear una nueva instancia del  objeto Date  , puedo ejecutar:  new Date() . 
Lo que obtengo es la fecha y hora actual, como:

Jue 03 de febrero de 2022 11:24:08 GMT+0100 (hora estándar de Europa Central)

Sin embargo, no todos los objetos incorporados vienen con una función constructora.
Un ejemplo de este tipo de objeto es el objeto Math incorporado   .

Ejecutar  new Math()  arroja un  TypeError no detectado , que nos informa que  Math no es un constructor .

Por lo tanto, puedo concluir que algunos objetos incorporados tienen constructores, cuando tienen un propósito particular: 
permitirnos instanciar una instancia específica del constructor de un objeto dado. 
El objeto de fecha incorporado es perfectamente adecuado para tener un constructor porque 
cada nueva instancia de objeto de fecha que construyo debe tener datos únicos por definición, 
ya que será una marca de tiempo diferente: se construirá en un momento diferente en el tiempo.

Otros objetos integrados que no tienen constructores, como el  objeto Math, no necesitan un constructor. 
Son solo objetos estáticos a cuyas propiedades y métodos se puede acceder directamente, desde el propio objeto incorporado. 
En otras palabras, no tiene sentido construir una instancia del objeto Math incorporado   para poder usar su funcionalidad.

Por ejemplo, si quiero usar el  método pow  del  objeto Math  para calcular valores exponenciales, 
no es necesario crear una instancia del  objeto Math  para hacerlo. 
Por ejemplo, para elevar el número 2 a la potencia de 5, ejecutaría:

Matemáticas.pow(2,5); // -->32

No es necesario crear una instancia del  objeto Math  , ya que no habría nada que deba almacenarse en la instancia 
de ese objeto específico.

Además de las funciones de construcción para los objetos integrados, también puedo definir funciones de construcción personalizadas.
*/

function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

// Ahora puedo hacer tantos helados como quiera:
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

/*
Acabo de construir dos objetos de instancia del  tipo Icecream  .

El caso de uso más común de  new  es usarlo con uno de los tipos de objetos integrados.

Tenga en cuenta que el uso de funciones de constructor en todos los objetos integrados a veces no es el mejor enfoque.

Esto es especialmente cierto para los constructores de objetos de tipos primitivos, a saber:  String ,  Number y  Boolean .

Por ejemplo, usando el constructor String incorporado   , puedo construir nuevas cadenas:
*/

let apple = new String("apple");
apple; // --> String {'apple'}

/*
La  variable Apple  es un objeto de tipo  String .

Veamos en qué se diferencia el  objeto manzana  de la siguiente  variable pera  :
*/

let pear = "pear";
pear; // --> "pear"

/*
La  variable pera  es un literal de cadena, es decir, un valor primitivo de Javascript.

La  variable pera  , al ser un valor primitivo, siempre tendrá más rendimiento que la   variable manzana, que es un objeto.

Además de ser más eficaz, debido al hecho de que cada objeto en JavaScript es único, no puede comparar 
un objeto String con otro objeto String, incluso cuando sus valores son idénticos.

En otras palabras, si comparas  new String('plum') === new String('plum') , obtendrás  false, 
mientras que  "plum" === "plum"  devuelve true. 
Obtiene el  falso  al comparar objetos porque no son los valores que le pasa al constructor los que se comparan, 
sino la ubicación de la memoria donde se guardan los objetos.

Además de no usar constructores para construir versiones de objetos de primitivas, es mejor no usar constructores 
cuando construyas objetos simples y regulares.

En lugar de  new Object , debe ceñirse a la sintaxis literal del objeto:  {} .

Un objeto RegExp es otro objeto incorporado en JavaScript. Se usa para hacer coincidir patrones con cadenas 
usando lo que se conoce como "Expresiones regulares". Las expresiones regulares existen en muchos idiomas, 
no solo en JavaScript.

En JavaScript, puede crear una instancia del constructor RegExp usando new RegExp .

Alternativamente, puede usar un literal de patrón en lugar de RegExp. Este es un ejemplo del uso de /d/ 
como patrón literal, pasado como argumento al método de coincidencia en una cadena.
*/

"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

/*
En lugar de usar  los constructores Array ,  Function y  RegExp  , debe usar sus variedades de literal de matriz, 
literal de función y literal de patrón:  [] ,  () {} y  /()/ .

Sin embargo, cuando construimos objetos de otros tipos integrados, podemos usar el constructor.

Aquí están algunos ejemplos:
*/

new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

/*
La lista anterior no es concluyente, pero solo está ahí para darle una idea de algunas funciones de constructor 
que seguramente puede usar.

Tenga en cuenta que se proporcionan enlaces sobre RegExp y la expresión regular en el elemento de la lección 
titulado "Lectura adicional" .
*/
