/*
crear clases en JavaScript, usando todos los conceptos que has aprendido hasta ahora.

Específicamente, me estoy preparando para construir la siguiente jerarquía de herencia:

  Animal / \ Gato Pájaro / \ \ HouseCat Tigre Loro

Hay dos palabras clave que son esenciales para OOP con clases en JavaScript.

Estas palabras clave son  extends  y  super .

La  palabra clave extends  me permite heredar de una clase existente.

Según la jerarquía anterior, puedo codificar la  clase Animal  de esta manera:
*/

class Animal {
  // ... class code here ...
}

// Entonces puedo codificar, por ejemplo, la   subclase Cat , así:
class Cat extends Animal {
  // ... class code here ...
}

/*
Así es como se usa la  palabra clave extends  para establecer relaciones de herencia.

La  palabra clave super  me permite "tomar prestada" la funcionalidad de una superclase, 
en una subclase. 
La dinámica exacta de cómo funciona esto se tratará más adelante en esta lección.

Ahora puedo empezar a pensar en cómo implementar mi jerarquía de clases OOP.

Antes incluso de comenzar, necesito pensar en cosas como: 

* ¿Qué debe incluirse en la clase base de  Animal ? 
En otras palabras, ¿qué heredarán todas las subclases de la clase base? 

* ¿Cuáles son las propiedades y métodos específicos que separan cada clase de las demás? 

* En general, ¿cómo se relacionarán mis clases entre sí?

Una vez que lo he pensado, puedo construir mis clases.

Entonces, mi plan es el siguiente:

1. El  constructor de la clase Animal  tendrá dos propiedades:  
color  y  energía. 

2. El  prototipo de la clase Animal  tendrá tres métodos:  
isActive() ,  sleep() y  getColor() .

3. El  método isActive(), siempre que se ejecute, reducirá el valor de la  energía  
hasta que llegue a  0. 
El  método isActive()  también informará el valor actualizado de  energía. 
Si  la energía  es cero, el objeto animal se irá inmediatamente a dormir, 
invocando el  método sleep()  basado en dicha condición.

4. El  método getColor()  simplemente registrará en la consola el valor en la  
propiedad de color.

5. La  clase Cat  heredará de  Animal , con las propiedades adicionales  sound,  
canJumpHigh y  canClimbTrees  específicas de la  clase Cat. 
También tendrá su propio   método makeSound() .

6. La  clase Pájaro  también se heredará de  Animal , pero sus propiedades específicas 
serán bastante diferentes de las  de Gato. 
Es decir, la  clase Bird  tendrá las  propiedades sound  y  canFly, 
y también el método makeSound.

7. La  clase HouseCat  ampliará la  clase Cat  y tendrá su propio  houseCatSound  
como propiedad especial. 
Además, anulará el   método  makeSound() de la clase Cat, pero lo hará 
de una manera interesante. 
Si el  método makeSound(), en la invocación, recibe un único  argumento de opción, 
establecido en  true , entonces ejecutará  super.makeSound(); 
en otras palabras, ejecute el código de la clase principal ( Cat ) con la adición 
de ejecutar el  console.log(this.houseCatSound) . 
Efectivamente, esto significa que  makeSound() 
El método en el  objeto de instancia de la clase HouseCat  tendrá dos 
comportamientos separados, en función de si lo pasamos  true  o  false .

8. La  clase Tiger  también se heredará de  Cat y vendrá con su propia  propiedad tigerSound
mientras que el resto del comportamiento será prácticamente el mismo que en la clase HouseCat .

9. Finalmente, la  clase Parrot  extenderá la  clase Bird  , con su propia  propiedad canTalk  
y su propio  método makeSound(), trabajando con dos condicionales: 
uno que verifica si el valor de  true  se pasó a  makeSound  durante la invocación, 
y otro que comprueba el valor almacenado dentro de  la propiedad this.canTalk.  

Ahora que he explicado completamente cómo debería funcionar todo el código en mi jerarquía
de clases, podría comenzar a implementarlo agregando todos los requisitos como comentarios 
dentro de la estructura del código.

En esta etapa, con todos los requisitos escritos como comentarios, mi código debería 
ser el siguiente:
*/
class Animal {
  // constructor: color, energy
  // isActive()
  // if energy > 0, energy -=20, console log energy
  // else if energy <= 0, sleep()
  // sleep()
  // energy += 20
  // console.log energy
}
class Cat extends Animal {
  // constructor: sound, canJumpHigh, canClimbTrees, color, energy
  // makeSound()
  // console.log sound
}
class Bird extends Animal {
  // constructor: sound, canFly, color, energy
  // makeSound()
  // console.log sound
}
class HouseCat extends Cat {
  // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
  // makeSound(option)
  // if (option)
  // super.makeSound()
  // console.log(houseCatSound)
}
class Tiger extends Cat {
  // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
  // makeSound(option)
  // if (option)
  // super.makeSound()
  // console.log(tigerSound)
}
class Parrot extends Bird {
  // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
  // makeSound(option)
  // if (option)
  // super.makeSound()
  // if (canTalk)
  // console.log("talking!")
}

/*
Ahora que he codificado mis requisitos dentro de los comentarios de clases vacías, 
puedo comenzar a codificar cada clase según mis especificaciones.

Codificando la   clase Animal
Primero, codificaré la  clase Animal base.
*/
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

/*
Cada objeto animal, sin importar cuál sea, compartirá las propiedades del  color  
y  la energía .

Ahora puedo codificar las   clases Cat  y  Bird :
*/

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

/*
Nota: 
si no usé la  palabra clave super  en nuestras subclases, una vez que ejecuté el código anterior, 
obtendría el siguiente error: 
Error de  referencia no detectado: debe llamar al superconstructor en la clase derivada 
antes de acceder a 'esto' o regresando del constructor derivado.

Y ahora puedo codificar las tres clases restantes:  HouseCat ,  Tiger y  Parrot .
*/
class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

/*
Ahora que hemos configurado toda esta estructura de herencia, podemos construir 
varios objetos animales.

Por ejemplo, puedo construir dos loros: uno que pueda hablar y el otro que no.
*/

var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

// Además, puedo construir un gato mascota:
var leo = new HouseCat();

// Ahora puedo hacer que  Leo  ronronee:

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

// Además, puedo construir un tigre:
var cuddles = new Tiger();

// Mi  tigre de abrazos  puede ronronear y rugir, o simplemente rugir:
cuddles.makeSound(false); // Roar!
cuddels.makeSound(true); // purr, Roar!

// Aquí está el código completo de esta lección, para copiar y pegar más fácilmente:

class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
