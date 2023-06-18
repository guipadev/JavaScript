// 1. ¿Cuál será el resultado del siguiente JavaScript?
const a = true;
if(!a) {
    console.log("Green");
} else {
    console.log("Blue");
}


a. Green
==> Blue
c. Nothing

// 2. ¿Cuál será el resultado del siguiente JavaScript?

var x = true;
x = 23;
console.log(x);

a. true
==> 23


// 3. ¿ Cuál es el tipo de datos de la variable x en el siguiente código?

var x = 23.2;

==> Number
b. BigInt
c. String
d. Boolean

// 4. ¿Qué generará el siguiente código JavaScript?
var x = 20;

if(x < 5) {
    console.log("Apple");
} else if(x > 10 && x < 20) {
    console.log("Pear");
} else {
    console.log("Orange");
}


a. Apple
b. Pear
==> Orange

// 5. ¿Qué generará el siguiente código JavaScript?
var result = 0;

var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}

console.log(result);

a. 0
b. 2
c. 3
==> 6


// 6. ¿Qué generará el siguiente código JavaScript?
var result;
console.log(result);
result = 7;

a. null
b. undefined
==> 7


// 7. ¿Cuál será el resultado de este fragmento de código JavaScript?
function addTwo(a,b) {
    return a + b
}
addTwo(5,"10")

==> 510
b. 5
c. 10


// 8. ¿Cuál es el resultado del siguiente código?
var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)

==> 200
b. 100
c. 300


// 9. ¿Cuál es el resultado del siguiente código?
var veggies = ['parsley', 'carrot']
console.log(veggies[2])

==> undefined
b. 2
c. 1
d. 3


// 10. ¿Cuál de los siguientes atributos HTML se usa para manejar un evento de clic?
==> onclick
b. addEventListener('click')
c. 'click'


// 11. ¿Cómo se crea un nuevo elemento h2 usando JavaScript?

==> document.createElement('h2')
b. document.buildElement('h2')
c. document.addElement('h2')

// 12. ¿Qué hace este código?

function addFive(val) {
    return val + 5;
  };
  module.exports = addFive;

==> Define la función addFive y la exporta como un módulo Node para que pueda usarse en otros archivos.
b. Esta sintaxis no es válida.
c. Le permite invocar la función addFive sin los paréntesis.