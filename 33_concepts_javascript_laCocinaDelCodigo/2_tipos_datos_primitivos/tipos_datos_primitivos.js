/*
Todo valor que no sea de alguno de estos tipos es un objeto:

- String
- Number
- Boolean
- Null
- Undefined
- Symbol (ES2015)
- Bigint
*/



/**************** STRING (Cadenas de Texto, codificación UTF-16) ****************/
let nombre = 'Sacha';
let nombre2 = "Sacha";

// BACKTICK (Comilla Invertida)
let saludo = `Hola, me llamo ${nombre} y mi segundo nombre ${nombre2}`;



/**************** NUMBER solo existe un tipo de dato para los números en JS ****************/
// IEEEE 754 formato para representar los números en JS, cad número ocupa 64bits en la memoria (8 Bytes)

// Truncar un número
let numero = +(0.1 + 0.2).toFixed(2); 

// Max numero que se puede utilizar
let numeroMaximo = (2 ** 53) - 1;

// Min numero que se puede utilizar
let numeroMinimo = -(2 ** 53) + 1;

// Podemos validar el limite de los numeros estan dentro lo esperado
// Marcan el rango de números donde es seguro realizar operaciones numéricas
numeroMaximo == Number.MAX_SAFE_INTEGER
numeroMinimo == Number.MIN_SAFE_INTEGER

// Verificar que numero esta entre los limites
Number.isSafeInteger(9007199254740996)

// Los numeros mas grandes representados de 64 bits, no seguros ya que son aproximaciones
Number.MAX_VALUE
Number.MIN_VALUE

// Ninguno numero es mas grande o pequeño que el infinity
isFinite(300) // true
isFinite(Infinity) // false

3 / 0   // Infinity
3 / -0 // -Infinity
0 / 0 // NaN (Not a Number) Es de tipo number y es el resultado de cómputos inválidos



/**************** BOOLEAN Solo puede tener dos valores posibles: true o false ****************/

// VALORES FALSOS
// Valores que van a ser evaluados como false (además de false):
// ''. 0, null, undefined y NaN. Cualquier otro valor va a ser verdadero.

// OBJECT WRAPPER
// Objeto que envuelve a un valor primitivo cuando queremos acceder a una propiedad o llamar un metodo del mismo
// Es temportal porque el motor lo utiliza por una fraccion de segundo. Despues lo desecha, lo borra de memoria

/**************** NULL Es el tipo de dato para representar la ausencia de valor ****************/
// Sirve para decir que una variable no contiene nada, esta vacia o que todavia no conocemos su valor
// Es un tipo de dato aparte que solo tiene un valor posible: null



/************************ UNDEFINED significa tipo de dato desconocido ************************/
// Es un tipo de dato primitivo, el bug de JS es que si preguntamos el tipo de dato typeof null el resultado es objetc
// Es un valor que deberiamos dejar para que el motor de JS asigne automaticamente
// Aùn no se le dio ningun valor, no se recibio ese parametro, una funcion se termino de ejecutar hasta el final sin devolver ningun valor
var nombres;
nombres; // undefined se asigna este valor porque declaramos la var pero no la inicializamos



/************************ SYMBOL se usa para crear valores ùnicos, irrepetibles ************************/
var s1 = Symbol('descripcion');

// irrepetibles
var s2 = Symbol();

// Un simbolo es igual a si mismo
s1 === s2; // false
s1 === s1; // true

// REGISTRO GLOBAL DE SIMBOLOS
// Podremos acceder al mismo simbolo desde distintos lugares de nuestro programa a partir de su descripción
// Es compartido entre nuestra pagina y los servciwworkers o iframes que esta pueda lleg a incluir
// Son buenos reemplados para valores constantes que podrian llegar a ser strings
// Tambien se utiliza para identificar propiedades unicas de los objetos
// Agregar propiedades "ocultas" dentro de los objetos

// SIMBOLOS DESTACADOS (WELL-KNOWN SYMBOLS)
// SOn propiedade de la funcion Symbol. Permite modificar el comportamiento de algunas funcionaidades del lenguaje



/************************ BIGINT  permite utilizar numeros enteros sin limites ************************/
var numeroGrander = 9008788930127990599n;

var numeroGrande2 = BigInt('9008788930127990599');