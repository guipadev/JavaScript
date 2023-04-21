/*
Las funciones son acciones a realizar donde se incluyen una mezcla
de datos(variables)
() 		se coloan los parametros
return	palabra reserva para devolver algo
*/


//Declarativas
function saludo() {
	return "Hola a todos una expresion declarativas";
};

//Se invoca
saludo();	//"Hola a todos una expresion declarativas";


//Expresion o anonimas
/*
La funcion no tiene nombre propio 
Debe ir dentro de una variable
*/
let color = function() {
	return "blue desde una expresión anonima";
};

//Se invocar
color();	//"blue desde una expresión anonima"

//Ejemplo funcion con parametros
function suma(numero1, numero2){
	suma = numero1 + numero2;
	return suma;
};

//Se invoca
suma(10, 20);	//30

//Otro ejemplo de utilizar funcion con parametros
funtcion sumatoria(numero1, numero2){
	return numero1 + numero2;	
};

//Se invoca
sumatoria(10, 20);	//30

//Template string
function saludos(nombre){
    console.log(`hola mi querido programado ${nombre}`);
}

//Se invoca
saludos("nata");	//ola mi querido programado nata

//Forma nueva EMAC Script 5
//Forma tradicional
function saludoestudiante2(nombre, edad, color){
	console.log( `Hola ${nombre} tu edad es: ${edad} y color preferido es ${color}`;
};

//Se invoca
saludosestudiante2("David", 26, "Azul");	//Hola David tu edad es: 26 y color preferido es Azul


//FORMA TRADICIONAL
function saludoestudiante(nombre, edad, color){
	return ("Hola " +nombre+" tu edad es: "+edad+" tu color preferido: "+color);
};

//Se invoca
saludosestudiante("David", 26, "Azul");	//Hola David tu edad es: 26 tu color es Azul
