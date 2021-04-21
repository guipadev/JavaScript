/*
Condicionales son representaos por las palabras
Si			if
Sino		else
Sino Si 	else if
*/

if(numero == "10"){
	console.log('Vaya los numeros son iguales '+numero);
}

//Vaya los numeros son iguales 10


if(10>20){
	console.log('No me imprimo');
}else{
	console.log('La afirmacion es falsa por ende imprimo');
}

//La afirmacion es falsa por ende imprimo


if(10>20){
	console.log('no imprimo');
}else if(10 > 30){
	console.log('2da prueba');
}else if(10<30){
	console.log('3cera prueba');
}else if(10>5){
	console.log('despues de evaluar 3 si se cumple');
}else{
	console.log('No se cumple ninguna condicion');
}

//CON TRUTHY
if([]){
	console.log('Utilizando un truthy para validar condicion verdadera');
}

//CON FALSY
if(null){
	console.log('Utilizando un truthy para validar condicion verdadera');
}else{
	console.log('Utilizando un falsy para irme por este camino');
}


//EJERCICIO NAVEGADOR

var numero1 = Number(prompt('Digita tu primer numero'));	//10
var numero2 = Number(prompt('Digita tu segundo numero'));	//8
var numero3 = Number(prompt('Digita tu tercer numero'));	//7

//Podemos validar que numero tipo de dato ingreso el usuario
typeof numero;	//"number"

if(numero1 > numero2 && numero1 > numero3){
	console.log(`EL numero mayor es ${numero1}`);
}else if(numero2 > numero1 && numero2 > numero3){
	console.log(`EL numero mayor es ${numero2}`);
}else if(numero3 > numero1 && numero3 > numero2){
	console.log(`EL numero mayor es ${numero3}`);
}else{
	console.log('Pasa algo extraño');
}

//OTRO EJEMPLO PARA LA CONSOLA DEL NAVEGADOR
var edad = Number(prompt('Digita tu edad'));

if(edad >= 18){
	console.log('Eres mayor de edad');
}else{
	console.log('Eres menor de edad');
	window.close();
}


// OPERADOR TERNARIO
// condition ? si : no;

5 > 10 ? 'Es mentira' : 'cinco es menor que diez';

//OTRO EJEMPLO DE OPERADOR TERNARIO

var resultado;

resultado = 10 > 2 ? 'Diez mayor que dos' : 'No es mayor';










