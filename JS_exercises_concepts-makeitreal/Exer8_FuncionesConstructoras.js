/*****************************************
Ejercicio 41
Crea una funci�n constructora llamada Producto que reciba dos argumentos: el nombre y el precio. La funci�n deber� inicializar las propiedades nombre y precio del objeto con los valores que llegan como par�metros.

A continuaci�n mostramos algunos ejemplos de la forma en la que se va a utilizar esta funci�n constructora:

// c�digo de prueba
const pan = new Producto("Pan", 2.5)
console.log(pan.nombre) // "Pan"
console.log(pan.precio) // 2.5

const leche = new Producto("Leche", 3.7)
console.log(leche.nombre) // "Leche"
console.log(leche.peso) // 3.7
******************************************/

function Product( name, price){
  this.name = name
  this.price = price
}

const bread = new Product("Pan", 2.5)
console.log(bread.name) // "Pan"
console.log(bread.price) // 2.5

const milk = new Product("Leche", 3.7)
console.log(milk.name) // "Leche"
console.log(milk.price) // 3.7


/*********************************************
Ejercicio 42
Crea una funci�n constructora llamada Person que reciba tres argumentos: el nombre, el peso y la estatura. La funci�n deber� inicializar las propiedades name, weight, height con los valores que llegan como par�metros.

Agrega dos m�todos a la funci�n constructora Persona: greet y bmi.

greet debe recibir un nombre y retornar el string "Hola X, me llamo Y" donde X es el argumento que se recibe y Y es la propiedad name del objeto.

bmi no recibe ning�n argumento y retorna el �ndice de masa corporal que se calcula con la siguiente f�rmula:

peso / altura^2

A continuaci�n mostramos algunos ejemplos de la forma en la que se va a utilizar esta funci�n constructora y sus m�todos:


// c�digo de prueba
const pedro = new Person("Pedro", 72, 1.5)
console.log(pedro.greet("Maria")) // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()) // 32
**************************************************************/

function Person(name, weight, height){
  this.name = name
  this.weight = weight
  this.height = height
}

Person.prototype.greet = function(names) {			
   console.log(`Hola ${names}, me llamo  ${this.name}`)			
}

Person.prototype.bmi = function() {				
   return this.weight / this.height ** 2			
}

const pedro = new Person("Pedro", 72, 1.5)
console.log(pedro.greet("Maria")) // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()) // 32

/****************************************************
Ejercicio 43
Crea una funci�n constructora llamada Auto que no reciba ning�n argumento pero inicializa una propiedad llamada velocidad en 0.

Agrega dos m�todos al prototipo de la funci�n constructora:

acelerar: recibe un n�mero como argumento e incrementa la propiedad velocidad de acuerdo al n�mero.
frenar: recibe un n�mero como argumento y decrementa la propiedad velocidad de acuerdo al n�mero. Sin embargo, si la velocidad terminara siendo negativa debe quedar en 0.
Un ejemplo de c�mo utilizar�amos esta funci�n constructora:

// c�digo de prueba
const a1 = new Auto()
console.log(a1.velocidad) // 0

a1.acelerar(1)
a1.acelerar(2)
console.log(a1.velocidad) // 3

a1.frenar(2)
console.log(a1.velocidad) // 2
a1.frenar(3)
// la velocidad quedar�a en -1, as� que se deja en 0
console.log(a1.velocidad) // 0
*****************************************************/
function Auto(){
      this.velocidad = 0
    }
    
    Auto.prototype.acelerar = function(numero) {
      this.velocidad += numero
    }
    
    Auto.prototype.frenar = function(numero) {
      // Si n�mero es mayor que velocidad, velocidad queda en cero
      // De lo contrario, restar numero
      this.velocidad = (numero > this.velocidad) ? 0 : this.velocidad - numero;
      // No es necesario devolver un valor
    }
    
    // c�digo de prueba
    const a1 = new Auto()
    console.log(a1.velocidad) // 0
    
    a1.acelerar(1)
    a1.acelerar(2)
    console.log(a1.velocidad) // 3
    
    a1.frenar(2)
    console.log(a1.velocidad) // 1
    a1.frenar(3)
    // la velocidad quedar�a en -1, as� que se deja en 0
    console.log(a1.velocidad) // 0


/*******************************************
Ejercicio 44
Agrega un m�todo llamado promedio a la funci�n constructora Array que retorne el promedio de los elementos en el arreglo:


// c�digo de prueba
console.log([1, 2, 3, 4].promedio()) // 2.5
console.log([7, 8, 9].promedio()) // 8
console.log([300, 100].promedio()) // 200
*******************************************************/

const arreglo1 = [1, 2, 3, 4]
const arreglo2 = [7, 8, 9]
const arreglo3 = [300, 100]

Array.prototype.promedio = function(){
  var total = 0;
  
  for (var i=0; i < this.length; i++) {
    total += this[i];
  }

  return total / this.length;
}

console.log(arreglo1.promedio()) // 2.5
console.log(arreglo2.promedio()) // 8
console.log(arreglo3.promedio()) // 200



/***********************************************
Ejercicio 45
Agrega un nuevo m�todo llamado palindrome al prototipo de String que retorne true si el string es un pal�ndrome, false de lo contrario.

Recuerda que un pal�ndrome es una frase que se lee igual de izquierda a derecha que de derecha a izquierda (excluyendo los espacios en blanco):

// c�digo de prueba
console.log("anita lava la tina".palindrome()) // true
console.log("aman a panama".palindrome()) // true
console.log("hola mundo".palindrome()) // false
******************************************************/

String.prototype.palindrome = function() {
  var re = /[\W_]/g;
  var lowRegStr = this.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr; 
}

  
console.log("anita lava la tina".palindrome()) // true
console.log("aman a panama".palindrome()) // true
console.log("hola mundo".palindrome()) // false
