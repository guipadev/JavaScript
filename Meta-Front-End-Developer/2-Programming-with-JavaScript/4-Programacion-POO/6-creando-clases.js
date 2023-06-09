/*
Creando clases
Al final de esta lectura, debería poder explicar, con ejemplos, el concepto de ampliar las clases utilizando 
la herencia básica para modificar los comportamientos dentro de las clases secundarias.

A estas alturas, debería saber que la herencia en JavaScript se basa en el objeto prototipo.

Todos los objetos que se construyen a partir del prototipo comparten la misma funcionalidad.

Cuando necesite codificar relaciones OOP más complejas, puede usar la  palabra clave class  y su sintaxis 
fácil de entender y de razonar.

Imagina que necesitas codificar una  clase Train  .

Una vez que haya codificado esta clase, podrá usar la palabra clave  new  para instanciar objetos de la  clase Train  .

Sin embargo, por ahora, primero debe definir la  clase Train  , usando la siguiente sintaxis:
*/

class Train {}

/*
Entonces, usa la  palabra clave de clase  , luego especifica el nombre de su clase, 
con la primera letra en mayúscula, y luego agrega una llave de apertura y cierre.

Entre las llaves, el primer fragmento de código que debe definir es el  constructor :
*/

class Train {
  constructor() {}
}

/*
El  constructor  se usará para generar propiedades en la futura instancia de objeto de la  clase Train  .

Por ahora, digamos que solo hay dos propiedades que cada instancia de objeto de la  clase Train  debe 
tener en el momento en que se instancia:  color y  lightsOn .
*/

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
}

/*
Observe la sintaxis del constructor. El constructor es una función especial en mi  clase Tren.

En primer lugar, observe que no hay  palabra clave de función. 
Además, observe que la palabra clave  constructor  se usa para definir esta función. 
Usted le da a su  función constructora  los parámetros dentro de un paréntesis de apertura y cierre, 
al igual que en las funciones regulares. Los nombres de los parámetros son  color  y  lightsOn .  

A continuación, dentro del  cuerpo de la función constructora, asignó el valor del parámetro de  color 
pasado a this.color y el   valor del parámetro de  luces pasado a this.lightsOn.

¿Qué representa esta  palabra  clave aquí?

Es la instancia de objeto futuro de la clase Train .

Esencialmente, este es todo el código que necesita escribir para lograr dos cosas:

Este código me permite  construir nuevas instancias de la   clase Train .

Cada instancia de objeto de la  clase Train  que construyo tendrá sus propias propiedades personalizadas de  color  y  lightsOn .

Ahora, para crear una nueva instancia de la  clase Train  , necesito usar la siguiente sintaxis:
*/

new Train();

/*
Dentro de los paréntesis, debe pasar valores como  "red" y  false , por ejemplo, lo que significa que la 
propiedad color  se establece en  "red" y la  propiedad lightsOn  se establece en  false .

Y, para poder interactuar con el nuevo objeto creado de esta manera, debe asignarlo a una variable.

Poniéndolo todo junto, aquí está tu primer tren:
*/

var myFirstTrain = new Train("red", false);

// Al igual que cualquier otra variable, ahora puede, por ejemplo, registrar en la consola el   objeto myFirstTrain :

console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// Puede continuar creando instancias de la  clase Train  . Incluso si les da exactamente las mismas propiedades,
// siguen siendo objetos separados.

var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

/*
Sin embargo, esto no es todo lo que las clases pueden ofrecer.

También puede agregar métodos a las clases, y estos métodos luego serán compartidos por todos los objetos de instancia
futuros de mi  clase Train  .

Por ejemplo:
*/

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

/*
Ahora, hay cuatro métodos en su  clase Train  : 
toggleLights() ,  lightsStatus() ,   getSelf()  y  getPrototype() .

El método  toggleLights utiliza el operador lógico not, ! . 
Este operador cambiará el valor almacenado en la  propiedad lightsOn  del futuro objeto de instancia de la  clase Train  ; 
de ahí el  !this.lightsOn . Y el  operador =  a su izquierda significa que se asignará a  this.lightsOn , 
lo que significa que se convertirá en el nuevo valor de la  propiedad lightsOn  en ese objeto de instancia dado.

El método  lightsStatus() en la clase Train  solo informa el estado actual de la  variable lightsOn  
de una instancia de objeto dada.

El método getSelf()  imprime las propiedades en la instancia del objeto al que se llama.

La consola getPrototype()  registra el prototipo de la instancia de objeto de la  clase Train  .
El prototipo contiene todas las propiedades compartidas por todas las instancias de objetos de la  clase Tren  .
Para obtener el prototipo, utilizará  el método Object.getPrototypeOf() incorporado de JavaScript  
y le pasará  este  objeto, es decir, la instancia del objeto dentro de la cual se invoca este método.

Ahora puedes construir un nuevo tren usando esta  clase de tren actualizada  :
*/

var train4 = new Train("red", false);

// Y ahora, puedes ejecutar cada uno de sus métodos, uno tras otro, para confirmar su comportamiento:

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

/*
El resultado de llamar  a toggleLights()  es el cambio de verdadero a falso y viceversa, para la   propiedad lightsOn .

El resultado de llamar  a lightsStatus()  es el registro en la consola del valor de la  propiedad lightsOn  .

El resultado de llamar  a getSelf()  es que la consola registra toda la instancia del objeto en el que se llama al  método getSelf()  . En este caso, el objeto devuelto es el  objeto train4  . Tenga en cuenta que este objeto se devuelve solo con las propiedades ("datos") que se creó con la  función constructor()  de la  clase Train  . Esto se debe a que todos los métodos de la  clase Train  no "viven" en ninguno de los objetos de instancia de la  clase Train  ; en cambio, viven en el prototipo, como se confirmará en el siguiente párrafo.

Finalmente, el resultado de llamar al  método getPrototype()  es el registro de la consola de todas las propiedades en el  prototipo . Cuando   se usa la sintaxis  de clase en JavaScript, esto da como resultado que solo se almacenen métodos compartidos en el prototipo , mientras que la  función constructor()  configura el mecanismo para guardar valores específicos de la instancia ("datos") en el momento de la instanciación del objeto.

Por lo tanto, en conclusión, la sintaxis de clase en JavaScript nos permite separar claramente los datos del objeto individual, 
que existen en la instancia del objeto en sí, de la funcionalidad del objeto compartido (métodos), que existen en el prototipo 
y son compartidos por todas las instancias del objeto.

Sin embargo, esta no es toda la historia.

Es posible implementar polimorfismo usando clases en JavaScript, heredando de la clase base y luego anulando el comportamiento 
heredado. Para entender cómo funciona esto, lo mejor es utilizar un ejemplo.

En el código siguiente, observará que se codifica otra clase, que se denomina  HighSpeedTrain y hereda de la  clase Train  .

Esto convierte a la  clase Train  en una clase base o en la superclase de la   clase HighSpeedTrain . Dicho de otra manera, 
la  clase HighSpeedTrain  se convierte en la subclase de la  clase Train  , porque hereda de ella.

Para heredar de una clase a una nueva subclase, JavaScript proporciona la  palabra clave extends  , 
que funciona de la siguiente manera:
*/

class HighSpeedTrain extends Train {}

/*
Como en el ejemplo anterior, la sintaxis de la subclase es coherente con la forma en que se define la clase base en JavaScript. 
La única adición aquí es la  palabra clave extends  y el nombre de la clase de la que hereda la subclase.

Ahora puedes describir cómo  funciona HighSpeedTrain  . Nuevamente, puede comenzar definiendo su función constructora:
*/

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}

/*
Observe la ligera diferencia en la sintaxis en el constructor de la  clase HighSpeedTrain  , 
es decir, el uso de la  palabra clave super  .

En las clases de JavaScript,  super  se usa para especificar qué propiedad se hereda de la superclase en la subclase.

En este caso, elijo heredar ambas propiedades de la   superclase  Train en la  subclase HighSpeedTrain .

Estas propiedades son  color  y  lightsOn .

A continuación, agrega las propiedades adicionales de la clase HighSpeedTrain dentro de su constructor, es decir, 
las propiedades de los pasajeros y highSpeedOn.

A continuación, dentro del cuerpo del constructor, utiliza la  palabra clave super  y pasa las propiedades heredadas 
 color  y  lightsOn  que provienen de la  clase Train  . En líneas subsiguientes, asigna  pasajeros  a  this.passengers 
 y  highSpeedOn  a  this.highSpeedOn .

Tenga en cuenta que, además de las propiedades heredadas, también  hereda automáticamente  todos los métodos 
que existen en el   prototipo  Train , es decir, los  métodos toggleLights() ,  lightsStatus() ,  getSelf() y  getPrototype() .

Ahora agreguemos otro método que será específico para la  clase HighSpeedTrain  : el  método toggleHighSpeed()  .
*/

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}

/*
Además, imagina que te diste cuenta de que no te gusta cómo funciona el  método toggleLights() de la superclase 
y quieres implementarlo de manera un poco diferente en la subclase. 
Puede agregarlo dentro de la  clase HighSpeedTrain  .
*/

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

/*
Entonces, ¿cómo anulaste el comportamiento del  método toggleLights() original  ?

Bueno, en la superclase, el  método toggleLights()  se definió de la siguiente manera:
*/

toggleLights() {
    this.lightsOn = !this.lightsOn;
}

/*
Se dio cuenta de que el  método HighSpeedTrain  debería reutilizar el comportamiento existente del  
método toggleLights() original  , por lo que usó la  sintaxis super.toggleLights()  
para heredar el método completo de la superclase.

A continuación, también hereda el comportamiento del método lightsStatus() de la superclase   , 
porque se da cuenta de que desea tener el estado actualizado de la  propiedad lightsOn 
registrada en la consola, siempre que invoque el  método toggleLights()  en la sub- clase.

Finalmente, también agrega la tercera línea en el método toggleLights() reimplementado, a saber:
*/

console.log('Lights are 100% operational.');

/*
Ha agregado esta tercera línea para mostrar que puedo combinar el código de método "prestado" de la superclase 
con su propio código personalizado en la subclase.

Ahora estás listo para construir algunos objetos de tren.
*/

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

/*
Construyó el   objeto  train5 de la clase Train  y estableció su  color  en  "blue"  y su  lightsOn  en  false .

A continuación, creó el  objeto highSpeed1  para la  clase HighSpeedTrain  , configurando  los pasajeros  en  200 , 
 highSpeedOn  en  false ,  color  en  "green" y lightsOn en false.

Ahora puedes probar el comportamiento de  train5 llamando, por ejemplo, al  método toggleLights() 
 y luego al   método lightsStatus() :
*/
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true


// Aquí está el código completo completo para esta lección:
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

/*
Observe cómo el  método toggleLights()  se comporta de manera diferente en la  clase HighSpeedTrain  
que en la  clase Train  .

Además, ayuda a visualizar lo que está sucediendo al obtener el prototipo de los  trenes train5 
 y  highSpeed1 :
*/

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

/*
Los valores devueltos en este caso inicialmente pueden parecer un poco difíciles de comprender, pero en realidad, 
es bastante simple:

El objeto prototipo del  objeto tren5  se creó cuando definió la clase  Tren . 
Puede acceder al prototipo utilizando  la sintaxis Train.prototype  y recuperar el objeto prototipo.

El objeto prototipo del  objeto highSpeed1  es este objeto: {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ} . 
A su vez este objeto tiene su propio prototipo, el cual se puede encontrar usando la siguiente sintaxis:  
HighSpeedTrain.prototype.__proto__ . 
Ejecutar este código devuelve:  
{constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ} .

Los prototipos parecen fáciles de entender en cierto nivel, pero es fácil perderse en la complejidad. 
Esta es una de las razones por las que la sintaxis de clases en JavaScript mejora su experiencia de desarrollador, 
al facilitar el razonamiento sobre las relaciones entre clases. Sin embargo, a medida que mejora sus habilidades, 
siempre debe esforzarse por comprender mejor sus herramientas, y esto incluye prototipos. 
Después de todo, JavaScript es solo una herramienta, y ahora has "mirado detrás de la cortina".

En esta lectura, ha aprendido la esencia misma de cómo funciona la programación orientada a objetos con clases en JavaScript. 
Sin embargo, esto no es todo.

En la lección sobre el diseño de un programa orientado a objetos, aprenderá algunos conceptos más útiles. 
Estos tienen que ver principalmente con la codificación de sus clases para que sea aún más fácil crear 
instancias de objetos de esas clases en JavaScript.

Usando la instancia de clase como propiedad del constructor de otra clase

Considere el siguiente ejemplo:
*/

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

/*
En este ejemplo, hay tres clases definidas: StationaryBike , Treadmill y Gym .

La clase StationaryBike está codificada para que su futura instancia de objeto tenga las propiedades de posición y engranajes . 
La propiedad de posición describe dónde se colocará la bicicleta estática dentro del gimnasio, y la propiedad de engranajes 
indica la cantidad de engranajes que debe tener esa bicicleta estática.

La clase Treadmill también tiene una posición y otra propiedad, modos denominados (como en "modos de ejercicio").

La clase Gym tiene tres parámetros en su función constructora: openHrs , stationaryBikePos , trackmillPos .

Este código me permite instanciar un nuevo objeto de instancia de la clase Gym y luego, cuando lo inspecciono,
 obtengo la siguiente información:

la propiedad openHrs es igual a "7-22" (es decir, de 7 a. m. a 10 p. m.)

la propiedad stationaryBike es un objeto del tipo StationaryBike , que contiene dos propiedades: position y gears

la propiedad Treadmill es un objeto del tipo Treadmill , que contiene dos propiedades: posición y modos


*/