/*
SCOPE
Alcance que puede tener la variable para saber si podremos o no acceder a esta

Scope Global: Variable o funcion declarada a nivel de navegador o ambiente, aqui deben estar todas las que vamos a utilizar

Scope Local: Datos o variables dentro de una funcion, y solo los datos dentro de esta tendra acceso

Nota: El Scope Local puede acceder a las variables de Scope Global, pero viceversamente no se puede
*/


//SCOPE GLOBAL
let saludo = "Hola programadores";	

//SCOPE LOCAL
function scopelocal(){
	let comida = "arroz chino";
	return `${saludo} me encanta el ${comida} :D`;	//Ejemplo LOCAL puede acceder a GLOBAL
};

console.log(saludo);	//Hola programadores
scopelocal();			//Hola programadores me encanta el arroz chino :D


//EJEMPLO al tratar de acceder a una variable o dato de una Scope Local, generaria ERROR
console.log(comida);



//OTRO EJEMPLO

//scope global
let numero = 20;
let letras = "figura";

//scope local
function combinacion(){
    let prueba = "lados";
    return `${numero} ${prueba} tiene la ${letras}`;
};

combinacion();	//"20 lados tiene la figura"


//OTRO EJEMPLO CON ERROR

let gato = "tierno";
let aver = "vuela";

function animales(){
    let tigre = "rayas";
    return tigre;
};

animales();	//rayas

//Intenta acceder a variable local
console.log(tigre + "naranjas y negras");	//Error: tigre is not defined


//Se invoca la funcion y se anexa texto
console.log(animales() + " naranjas y negras");	//rayas naranjas y negras