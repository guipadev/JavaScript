/*
RECORRIDO DE ARRAYAS

find()
Devuelve valor del elemento de array que cumple la funcion y condicion
En caso de ser objeto nos devuelve el objeto del array

findIndex()
Devuelve el indice del primer elemento del array que cumpla con la condicion en la funcion
En caso de no encontrar devolvera -1

forEach()
No retorna nuevo array, solo ejecuta la funcion pasada como parametro, 
Recorre cada elemento del array

some()
Saber si un elemento del array cumple con lo indicado en la funcion
Devuelve Booleano
*/



//EJERCICIO find()
//Encontrar el primer valor que cumpla con lo siguiente, devolver el primer elemento que sea
//menor a 30 y obtener la posicion del elemento

//Primero forma de resolverlo

var numeros = [33,45,31,28,17,56];

var encontrarNumero = numeros.find(function(numero){
	return numero < 30;
});

encontrarNumero	//28 ya que es el primero que encuentra menor a 30


//Segunda forma de resolverlo

var numeros = [33,45,31,28,17,56];

function encontrarNumero(numero){
	return numero < 30;
}

console.log(numero.find(encontrarNumero))	//28

var elemento = numeros.find(encontrarNumero);	//Guardar numero encontrado
console.log(numeros.indexOf(elemento))	//3 Que es la posicion del elemento


//Otra forma de resolver el ejercicio seria

var numeros = [33,45,31,28,17,56];

function encontrarNumero(numero){
	return numero < 30;
}

console.log(numeros.indexOf(numeros.find(encontrarNumero)))


//EJERCICIO
//Devolver el objeto especifico que se llame "aguila"

var animales = [
	{nombre: 'Perros', color: 'Marron', cantidad: 16},
	{nombre: 'Gatos', color: 'Gris', cantidad: 36},
	{nombre: 'Elefantes', color: 'Gris', cantidad: 3},
	{nombre: 'Leones', color: 'Amarillo', cantidad: 30},
	{nombre: 'Aguilas', color: 'Negra', cantidad: 10},
	{nombre: 'Ballena', color: 'Azul', cantidad: 4},
	{nombre: 'Cocodrilo', color: 'Verede', cantidad: 9},
	{nombre: 'Canario', color: 'Rojo', cantidad: 40},
];

var buscarAnimal = animales.find(function(animal){
	return animal.nombre.toLowerCase() === "canario";
});

console.log(buscarAnimal)

//EJERCICIO
//Devolver el primer numero que sea par de una lista
var numeros = [33,45,31,12,17,56];

function numeroPar(numero){
	return numero % 2 === 0;
}

console.log(numeros.find(numeroPar));

//OTRA FORMA
var numeros = [33,45,31,12,17,56];

var buscarPar = numeros.find(function(par){
	return par % 2 === 0;
});

console.log(buscarPar);

//EJERCIO CON PROMPT
//Reciba 5 numeros y evaluar eso numero ingresados, cual de los primeros es par
//En caso de que no ingrese ningun numero para de a conocer un mensaje
//No has ingresado ningun numero par

var cantidad = parseInt(prompt("Ingresa la cantidad de numero a evaluar"));
var listadoNumeros = [];

for(i=0; i<cantidad; i++){
    numeroIngresado = parseInt(prompt("Numero a evaluar"));
    listadoNumeros.push(numeroIngresado);
}

function numeroPar(numero){
    return numero % 2 === 0;
}

validacionNumeros = listadoNumeros.find(numeroPar);

if (validacionNumeros === undefined) {
    alert(`De los números digitados ninguno es par!!`);
} else {
    alert(`El primer número para de todos los ingresados es: ${validacionNumeros}`);
}

//EJERCICIO RESUELTO CON WHILE

numeros = []
ingresarNumero =  true
while (ingresarNumero){
    numero = parseInt(prompt('Ingresa un numero: '));
    numeros.push(numero);
    decicion = prompt('Deseas ingresar otro numero (Si o No): ');
    if (decicion.toLowerCase() === 'no'){
        ingresarNumero = false;
    };
};
console.log(`Tu arreglo es ${numeros}`);

function numeroPar(numero){
    return numero % 2 === 0;
};

resultado = numeros.find(numeroPar);

if (resultado === undefined) {
    alert(`Lo siento no has introducido un número par`)
} else {
    alert(`Tu número par es ${resultado}`)
}


//EJERCICIO findIndex()
//Devuelve la posicion del primer elemento que encuentre par
var numeros = [33,45,31,12,17,56];

function numerPar(elmento){
	return elmento % 2 === 0;
};

console.log(numeros.findIndex(numeroPar));

//EJERCICIO findIndex()
//Devuelve la posicion del primer elemento que encuentre par y lo vuelva impar
var numeros = [33, 12, 31, 28, 17, 56];

numeros[numeros.findIndex(numeroPar)] += 1

//EJERCICIO forEach()
//Devolver cada uno de los elementos del array
var animales = [
	{nombre: 'Perros', color: 'Marron', cantidad: 16},
	{nombre: 'Gatos', color: 'Gris', cantidad: 36},
	{nombre: 'Elefantes', color: 'Gris', cantidad: 3},
	{nombre: 'Leones', color: 'Amarillo', cantidad: 30},
	{nombre: 'Aguilas', color: 'Negra', cantidad: 10},
	{nombre: 'Ballena', color: 'Azul', cantidad: 4},
	{nombre: 'Cocodrilo', color: 'Verede', cantidad: 9},
	{nombre: 'Canario', color: 'Rojo', cantidad: 40},
];

animales.forEach(function(animales){
	console.log(animal.nombre-toUpperCase())
}

//EJERCICIO some()	Es igual que el find pero arroja un valor boolean true o false
//Hacer un codigo que me reciba numeros y lo guarde en un array, y que
//de esos numeros es par

var numeros = [];
for(var i=0; i<5; i++){
	var recibir = Number(prompt('Dime tu numero'))
	numeros[i] = recibir;
}

//Informara si ahi un numero par
var numeroPar = numeros.some(function(numero){
	return numero % 2 === 0;
});

//mostrara todos los datos del array
for(numero of numeros){
	console.log(numero);
};

//Determinar sin en un array existe un numero de mayor de 40

var numero = [33,45,31,12,17,56];

function encontrarNumero(numero){
	return numero > 45;
}

console.log(numero.find(encontrarNumero))	//45

//retornar si existe un animal cuya cantidad sea menor que algo?

var animales = [
	{nombre: 'Perros', color: 'Marron', cantidad: 16},
	{nombre: 'Gatos', color: 'Gris', cantidad: 36},
	{nombre: 'Elefantes', color: 'Gris', cantidad: 3},
	{nombre: 'Leones', color: 'Amarillo', cantidad: 30},
	{nombre: 'Aguilas', color: 'Negra', cantidad: 10},
	{nombre: 'Ballena', color: 'Azul', cantidad: 4},
	{nombre: 'Cocodrilo', color: 'Verede', cantidad: 9},
	{nombre: 'Canario', color: 'Rojo', cantidad: 40},
];

var buscarAnimal = animales.find(function(animal){
	return animal.cantidad < 30;
});

console.log(buscarAnimal)


