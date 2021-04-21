/*
LOOPS = bucles = ciclos
Repetir la acción la cantidad de veces que tu quiereas de forma especifica
o a través del cumplimiento de una acción

Importante que el condicionamiento debe afirmar que la condicion se cumple
o se a verdadero de lo contrario que termina el ciclo
*/

var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

function saludoAnimal(animalitos){
	console.log(`Hola animalito ${animalitos}`);
}

for(var i=0; i<animales.length; i++){
	saludoAnimal(animales[i]);
}

//EJEMPLO FOR

for(var i=5; i<=25; i ++){
	console.log(`Numero ${i}`);
};


//EJEMPLO FOR IMPRIMIR SOLO NUMEROS PARES

for(var i=5; i<=25; i +=2){
	console.log(`Numero ${i}`);
};


//EJEMPLO QUE EL NUMERO QUE INGRESE REALIZA LA TABLA MULTIPLICACION

var numero = Number(prompt('Dime que numero quieres la tabla de multiplicar'));

for(var i=1; i<=10; i++){
	console.log(`${numero} x ${i} = ${numero*i}`);
};

//OTRA MANERA DE RECORRER LA RECOMENDADA
var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

for(var animal of animales){
	console.log(animal);
};


//EJERCICIO COMPLETO RECORRER
var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

function saludoAnimal(animal){
	console.log(`Hola animalito ${animal}`);
};

for(var animal of animales){
	saludoAnimal(animal);
};

//OTRO EJERCICIO
var numeros = [1,2,3,4,5,6,"Hola",7,8];

for(var numero of numeros){
	console.log(numero);
}