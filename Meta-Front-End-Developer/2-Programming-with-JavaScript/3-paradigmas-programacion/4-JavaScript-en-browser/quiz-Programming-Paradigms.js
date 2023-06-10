// 1. Las variables declaradas con 'let' se pueden reasignar.
true or false

// 2. ¿Qué se imprimirá cuando se ejecute el siguiente código?
function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest(); // 33


// 3. ¿Qué se imprimirá cuando se ejecute el siguiente código?
class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers()); // 10

// 4. ¿Qué se imprimirá cuando se ejecute el siguiente código?
class Animal {

}

class Dog extends Animal {
    constructor() {
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise()); // growl

// 5. Considere este fragmento de código: 'const [a, b] = [1,2,3,4] '. ¿Cuál es el valor de b?
2

// 6. ¿Qué valor se imprimirá cuando se ejecute el siguiente código?
function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null); // 3

// 7. ¿Cuáles de los siguientes son métodos de JavaScript para consultar el modelo de objetos del documento?
// Seleccione todas las que correspondan.

getElementsByClassName
getElementById
querySelector

// 8. ¿Cuál de los siguientes métodos convierte un objeto JavaScript hacia y desde una cadena JSON?
JSON.parse
JSON.stringify


// 9. ¿Cuál será el resultado de ejecutar este código?  
const letter = "a"
letter = "b"


//Uncaught TypeError: Assignment to constant variable   

// 10. ¿Qué es un constructor?

// Una función que se llama para crear una instancia de un objeto.  
