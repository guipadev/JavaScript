/*********************************************
Ejercicio 42
Crea una funci�n constructora llamada Person que reciba tres argumentos: el nombre, el peso y la estatura. 
La funci�n deber� inicializar las propiedades name, weight, height con los valores que llegan como par�metros.

Agrega dos m�todos a la funci�n constructora Persona: greet y bmi.

greet debe recibir un nombre y retornar el string "Hola X, me llamo Y" donde X es el argumento que se recibe y 
Y es la propiedad name del objeto.

bmi no recibe ning�n argumento y retorna el �ndice de masa corporal que se calcula con la siguiente f�rmula:

peso / altura^2

A continuaci�n mostramos algunos ejemplos de la forma en la que se va a utilizar esta funci�n constructora 
y sus m�todos:


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