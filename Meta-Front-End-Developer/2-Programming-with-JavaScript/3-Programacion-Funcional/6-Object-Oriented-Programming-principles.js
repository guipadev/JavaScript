/*
Principios de la Programación Orientada a Objetos

Los beneficios de la programación orientada a objetos
Hay muchos beneficios al usar el paradigma de programación orientada a objetos (POO).

OOP ayuda a los desarrolladores a imitar la relación entre objetos en el mundo real. 
En cierto modo, te ayuda a razonar sobre las relaciones entre las cosas en tu software, 
tal como lo harías en el mundo real. 
Por lo tanto, OOP es un enfoque efectivo para encontrar soluciones en el código que escribe. 
OOP también:

- Le permite escribir código modular,
- Hace que su código sea más flexible y 
- Hace que su código sea reutilizable.

Los principios de la programación orientada a objetos
Los cuatro principios fundamentales de la programación orientada a objetos son 
herencia, encapsulación, abstracción y polimorfismo. 

Lo que hay que recordar acerca de los Objetos es que existen en una estructura jerárquica. 
Lo que significa que la base original o superclase para todo es la clase Object, 
todos los objetos se derivan de esta clase. 
Esto nos permite utilizar el método Object.create(). 
para crear o instanciar objetos de nuestras clases.
*/
class Animal {
  /* ...class code here... */
}

var myDog = Object.create(Animal);

console.log(Animal);

/*
Un método más común para crear objetos a partir de clases es usar la nueva palabra clave. 
Cuando se usa un método constructor predeterminado o vacío, JavaScript llama implícitamente a 
la superclase Object para crear la instancia.
*/

class Animal {
  /* ...class code here... */
}

var myDog = new Animal();

console.log(Animal);

/*
Este concepto se explora en la siguiente sección sobre herencia.

Principios de programación orientada a objetos: herencia

La herencia es una de las bases de la programación orientada a objetos.

En esencia, es un concepto muy simple. Funciona así:

Hay una clase base de una "cosa".

Hay una o más subclases de "cosas" que heredan las propiedades de la clase base 
(a veces también denominada "superclase")

Puede haber algunas otras sub-sub-clases de "cosas" que heredan de esas clases en el punto 2.

Tenga en cuenta que cada subclase hereda de su superclase. 
A su vez, una subclase también podría ser una superclase, si hay clases que heredan de esa subclase.

Todo esto puede sonar un poco a "informática", así que aquí hay un ejemplo más práctico:

Hay una clase base de "Animal".

Hay otra clase, una subclase que hereda de "Animal", y el nombre de esta clase es "Pájaro".

A continuación, hay otra clase, que hereda de "Bird", y esta clase es "Eagle".

Por lo tanto, en el ejemplo anterior, estoy modelando objetos del mundo real mediante 
la construcción de relaciones entre Animal, Bird y Eagle. 
Cada uno de ellos son clases separadas, lo que significa que cada uno de ellos son 
planos separados para instancias de objetos específicos que se pueden construir según sea necesario.

Para configurar la relación de herencia entre clases en JavaScript, 
puedo usar la  palabra clave extends, como en  la clase B extends A.

Aquí hay un ejemplo de una jerarquía de herencia en JavaScript:
*/

class Animal {
  /* ...class code here... */
}
class Bird extends Animal {
  /* ...class code here... */
}
class Eagle extends Bird {
  /* ...class code here... */
}

/*
Principios de programación orientada a objetos: encapsulación

En los términos más simples, la encapsulación tiene que ver con hacer que la implementación 
de un código esté "oculta" para otros usuarios, en el sentido de que no tienen que saber cómo 
funciona mi código para "consumir" el código.

Por ejemplo, cuando ejecuto el siguiente código:
*/

"abc".toUpperCase();

/*
Realmente no necesito preocuparme ni perder el tiempo pensando en cómo funciona el  método toUpperCase(). 
Todo lo que quiero es usarlo, ya que sé que está disponible para mí. 
Incluso si la sintaxis subyacente, es decir, la implementación del  método toUpperCase()  cambia, 
siempre que no rompa mi código, no tengo que preocuparme por lo que hace en segundo plano, o incluso cómo lo hace. él.

Principios de programación orientada a objetos: abstracción
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific 
manifestation of that concept. 

Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming
in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.

OOP Principles: Polymorphism
Polimorfismo es una palabra derivada del idioma griego que significa "múltiples formas". 
Una traducción alternativa podría ser: "algo que puede tomar muchas formas".

Entonces, para entender de qué se trata el polimorfismo, consideremos algunos objetos de la vida real.

Una puerta tiene una campana. Podría decirse que el timbre es una propiedad del objeto puerta. 
Esta campana se puede tocar. ¿Cuándo tocaría alguien el timbre de la puerta? Obviamente, para que alguien se presente en la puerta.

Ahora considere una campana en una bicicleta. Una bicicleta tiene un timbre. 
Podría decirse que el timbre es una propiedad del objeto bicicleta. 
Esta campana también podría sonar. Sin embargo, la razón, la intención y el resultado de que alguien 
toque el timbre de una bicicleta no es lo mismo que tocar el timbre de una puerta.

Los conceptos anteriores se pueden codificar en JavaScript de la siguiente manera:


*/

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

// Entonces, puedo acceder al  método bell()  en el  objeto de la bicicleta  , usando la siguiente sintaxis:
bicycle.bell(); // "Get away, please"

// También puedo acceder al   método  bell() en el objeto puerta  , usando esta sintaxis:
door.bell(); // "Come here, please"

/*
En este punto, se puede concluir que exactamente el mismo nombre del método puede tener exactamente 
la intención opuesta, según el objeto para el que se utilice.

Ahora, para hacer que este código sea verdaderamente polimórfico, agregaré otra declaración de función:
*/
function ringTheBell(thing) {
  console.log(thing.bell());
}

/*
Ahora he declarado una  función ringTheBell(). Acepta un  parámetro de cosa, que espero que sea un objeto, 
es decir, el  objeto de la bicicleta  o el   objeto de la puerta .

Así que ahora, si llamo a la  función ringTheBell()  y le paso la  bicicleta  como único argumento, 
este es el resultado:
*/

ringTheBell(bicycle); // Ring, ring! Watch out, please!

// Sin embargo, si invoco la  función ringTheBell()  y le paso el  objeto puerta , obtendré el siguiente resultado:
ringTheBell(door); // "Ring, ring! Come here, please!"

/*
Ahora ha visto un ejemplo de exactamente la misma función que produce resultados diferentes,  
según el contexto  en el que se usa.

Aquí hay otro ejemplo, el operador de concatenación, usado llamando al método integrado  concat()  .

Si uso el  método concat()  en dos cadenas, se comporta exactamente igual que si usara el   operador + .
*/
"abc".concat("def"); // 'abcdef'

// También puedo usar el  método concat()  en dos matrices. Aquí está el resultado:
["abc"].concat(["def"]); // ['abc', 'def']

// Considere usar el  operador +  en dos arreglos con un miembro cada uno:
["abc"] + ["def"]; // ["abcdef"]

/*
Esto significa que el  método concat()  exhibe un comportamiento polimórfico, ya que se comporta de manera 
diferente según el contexto; en este caso, según los tipos de datos que le doy.

Para reiterar, el polimorfismo es útil porque permite a los desarrolladores crear objetos que pueden tener 
exactamente la misma funcionalidad, es decir, funciones con exactamente el mismo nombre, 
que se comportan exactamente igual. 
Sin embargo, al mismo tiempo, puede anular algunas partes de la funcionalidad compartida o incluso la 
funcionalidad completa, en otras partes de la estructura OOP.

Aquí hay un ejemplo de polimorfismo usando clases en JavaScript:
*/
class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

/*
Las   subclases  Penguin  y  Eagle heredan de la  superclase Bird. 
La   subclase  Eagle hereda el método useWings()  de la  clase Bird, pero lo amplía con un registro 
de consola adicional. 
La   subclase  Penguin no hereda la clase useWings()  ; en cambio, tiene su propia implementación, 
aunque la  clase Penguin  en sí misma amplía la  clase Bird  .  


Practique un poco con el código anterior, intente crear algunas de sus propias clases. 
(pista: piensa en cosas que sabes de la vida cotidiana)
*/
