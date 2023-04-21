/*
OBJETOS

Una funciòn construtora que permite crear nuevas instancias de objetos,
con caracteristicas propias de cada nueva objeto

Para crear la nueva instancia hacemos uso de un operador llamado new
que permite crear de este objeto derivado del objeto base o funcion constructora

function persona(p1, p2, pn){
	this.p1 = p1,
	this.p2 = p2,
	this.pn = pn	
} 
*/

var personaDavid = {
	nombre: "David",
	edad: 27,
	peso: 90
}

//creamos otro objeto persona

var personaPaola = {
	nombre: "Paola",
	edad: 26,
	peso: 65
}


//EJEMPLO SI NECESITARAMOS CONSTRUIR 100 OBJETOS DE PERSONA
//PARA AQUELLO REALIZAMOS LA FUNCION CONSTRUCTORA

function persona(nombre, edad, peso){
	this.nombre = nombre;
	this.edad = edad;
	this.peso = peso;
}

//IMPLEMENTA LA FUNCION CONSTRUCTORA CREAR LOS OBJETOS

var personaYamid = new persona('Yamid', 27, 90);
var personaNata = new persona('Nata', 17, 59);

console.log(personaYamid)
console.log(personaNata)


//EJERCICIO
//Crear 10 motocicletas de forma aleatoria utilizando una funcion constructora

function motocicletas(marca, cilindraje, color){
	this.marca = marca;
	this.cilindraje = cilindraje;
	this.color = color;
}

var marcaMoto = ['Suzuki', 'Yamaha', 'Auteco', 'Honda', 'AKT', 'Bajaj'];
var cilindrajeMoto = [150, 125, 200, 250, 300, 600, 1200];
var colorMoto = ['Negro', 'Blanca', 'Rojo', 'Azul'];
var Motos = [];

for(var i=0; i<10; i++){

	//Max vr. random 0.999...
	//MIn vr. random 0.000..1

	//generar numero entre uno y otro ejemplo(numero entre 5 incluyendolo y 10 excluyendo)
	//Math.trunc(Math.random()*((max+1)-min)+min);
	//var numeroAleatorio = Math.trunc(Math.random()*(11-5)+5);
	//console.log(numeroAleatorio);

	var numeroMarca = Math.trunc(Math.random()*(5-0)+0);
	var numeroCilindraje = Math.trunc(Math.random()*(7-0)+0);
	var numeroColor = Math.trunc(Math.random()*(5-0)+0);

	Motos.push(new motocicletas(marcaMoto[numeroMarca], cilindrajeMoto[numeroCilindraje],colorMoto[numeroColor]));
}

for(Moto of Motos){
	console.log(Moto);
}

//RESULTADO CREACION VARIOS OBJETO ALEATORIAMENTE

motocicletas {marca: "Honda", cilindraje: 1200, color: "Rojo"}
motocicletas {marca: "AKT", cilindraje: 250, color: undefined}cilindraje: 250color: undefinedmarca: "AKT"__proto__: Object
motocicletas {marca: "Suzuki", cilindraje: 600, color: "Azul"}
motocicletas {marca: "Honda", cilindraje: 600, color: "Negro"}
motocicletas {marca: "Suzuki", cilindraje: 250, color: "Azul"}
motocicletas {marca: "Honda", cilindraje: 150, color: "Negro"}
motocicletas {marca: "Suzuki", cilindraje: 1200, color: "Rojo"}
motocicletas {marca: "AKT", cilindraje: 150, color: "Blanca"}
motocicletas {marca: "AKT", cilindraje: 1200, color: undefined}
motocicletas {marca: "Auteco", cilindraje: 125, color: "Negro"}