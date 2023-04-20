/*************************************************************************
FUNCIONES CONSTRUCTORAS
Nos permite crear objetos a partir de una misma "plantilla".
Para diferenciar a las funciones constructoras de una función normal 
se capitaliza la primer letra.

Para instanciar(crear un objeto) a partir de una función constructora
se utiliza la palabra clave new.

function Persona(name) {	//funcion construtora primer letra MAY
   this.nombre = name		//No se retorna nada
}

const p1 = new Persona("Jose")
const p2 = new Persona("Ana")

************************************************************************/

//Función Constructora
function Persona(name) {
  this.nombre = name
}

//Creemos instancias (objeto)
const p1 = new Persona("Pedro")
const p2 = new Persona("Maria")
const p3 = new Persona("Pablo")

/****************************************************************************
FUNCIONES CONSTRUCTORAS (METODOS)

//Para agregar métodos a las funciones constructoras utilizamos el prototype.
******************************************************************************/
function Persona(nombre) {
   this.nombre = nombre
}
Persona.prototype.saludar = function() {
   console.log("Hola, me llamo " + this.nombre)
}

const p1 = new Persona("Pedro")
console.log(p1.saludar())	// Hola, me llamo Pedro

const p2 = new Persona("Maria")
console.log(p2.saludar())	// Hola, me llamo Maria

const p3 = new Persona("Pablo")
console.log(p3.saludar())	// Hola, me llamo Pablo

/****************************************************************************
Para agregar métodos a las funciones constructoras utilizamos el prototype.
******************************************************************************/

//Función Constructora
function Persona(nombre, peso, estatura) {			
  this.nombre = nombre						
  this.peso = peso						
  this.estatura = estatura					
}								 
								
Persona.prototype.saludar = function() {			
   console.log("Hola, me llamo " + this.nombre)			
}								
								
Persona.prototype.bmi = function() {				
   return this.peso / this.estatura ** 2			
}								
								
//Creemos instancias (objeto)
const p1 = new Persona("Pedro", 45, 1.8)			
console.log(p1.bmi())	//Pedro 13.888888888888888
p1.saludar()				//Hola, me llamo Pedro					
const p2 = new Persona("Maria", 80, 1.7)			
console.log(p2.nombre, p2.bmi())	//Maria 27.68166089965398			
const p3 = new Persona("Pablo", 64, 1.6)
console.log(p3.nombre, p3.bmi())	//Pablo 24.999999999999996

/************************************************************************************
METODOS ESTATICOS
Los métodos estáticos son métodos que se pueden invocar directamente sobre la función
constructora, no es necesario tener una instancia.
***********************************************************************************/
function Persona(nombre) {
   this.nombre = nombre
}
Persona.saludar = function() {
   console.log("Hola!")
 }
Persona.saludar() // Hola!


/************************************************************************************************
FUNCIONES CONSTRUCTORAS DE JAVASCRIPT
JavaScript incluye funciones constructoras como String, Number, Boolean, Array, Date, etc.
Los tipos básicos y los arreglos también son creados a partir de estas funciones constructoras.
**************************************************************************************************/

const a1 = [1, 2, 3, 4]
const a2 = new Array(1, 2, 3, 4)	//segunda opcion del a1

const s1 = "Hola Mundo"
const s2 = new String("Hola Mundo")	//segundo opcion del s1


/*************************************************************************************************
EXTENDIENDO LA FUNCIONALIDAD DE JAVASCRIPT
Utilizando el prototype puedes agregarle métodos a los objetos nativos de JavaScript como
Array, String, etc.
***************************************************************************************************/

Array.prototype.sum = function() {
  var total = 0;

  for (var i=0; i < this.length; i++) {
    total += this[i];
  }

  return total;
}

/***************************************************************************************************/

Array.prototype.sum = function() {
  let total = 0

  for (let i=0; i < this.length; i++) {
    total += this[i];
  }

  return total
}

// [1, 2 , 3, 4, 5].sum()	//Esta es una forma 

const arr = [1, 2 , 3, 4, 5, 6, 7, 8]
console.log(arr.sum())	//36


//EXTENDER LA FUNCIONALIDAD DEL STRING

String.prototype.capitalize = function() {
  const words = this.split(" ");
  for (let i=0; i < words.length; i++){
       const w = words[i]
       words[i] = w.charAt(0).toUpperCase() + w.substring(1)  
  }

  return words.join(" ")
}

console.log(("hola mundo").capitalize())	 //Hola Mundo
console.log(("esta es una prueba").capitalize())	//Esta Es Una Prueba


//Esta funcion no es returilizable porque deberia aplicarsele a cada objeto
//ejercicio 40

const p1 = {
	peso: 65,
	estatura: 1.8,
	bmi: function(){
		return this.peso / this.estatura ** 2
	}
}

console.log(p1.bmi())	//20.061728395061728










