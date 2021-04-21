//FUNCION HABITUAL
function duplicar(a){
    return a * 2;
};

console.log(duplicar(2));	//4
	
//REDUCIR A FUNCION FLECHA
let duplicar2 = a => a * 2;			//No hay necesidad de parentisis porque es un solo parametro

console.log(duplicar2(2));	//4


//FUNCION HABITUAL
function sumar(a, b){
    return a + b;
};

console.log(sumar(2, 3));	//5

//REDUCIR A FUNCION FLECHA
let sumar2 = (a, b) => a + b;		//Debe estar entra parentisis porque son mas de un parametro
console.log(sumar2(2, 3));	//5



//FUNCION HABITUAL
function saludar(){
    return 'Hellow Word!';
};

console.log(saludar());		//'Hellow Word!'

//REDUCIR A FUNCION FLECHA
let saludar2 = () => 'Hellow Word';		//Debe estar en parentisis al estar vacio el parametro

console.log(saludar2());		//'Hellow Word!'



//EN LA SIGUIENTE CLASE GENERARA UN ERROR UNDEFINED
class Persona{
	constructor(nombre){
		this.nombre = nombre;
	};

	saluda(){
		setTimeout(function(){
			console.log(`Hola ${this.nombre} desde funcion`);		//EL this es igual a windows que no tiene nocion del objeto 
		}, 100);
	},
	saluda2(){
		setTimeout(() => console.log(`Hola ${this.nombre} desde funcion`),100);		//la flecha da a que this agregar el valor del objeto
	},
};

let persona = new Persona('Lalito');

persona.saluda();	//Hola undefined desde funcion

persona.saluda2();	//Hola lalito desde funcion