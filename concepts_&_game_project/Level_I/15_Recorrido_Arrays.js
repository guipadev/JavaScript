/*
RECORRIDOS DE ARRAYS

Exister varios metodos de recorre un array

filter()
Devuelve un nuevo array que cumpla con la condicion que la funcion ejecute dentro del metodo

map()
Devuelve un nuevo array con los resultados, hacer operaciones en cada elemento
o para devolver cada elemento
*/

//Retornar los animales que tenga cantidad mayor a 10 	FILTER
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

var cantidadDeAnimalesMayores = animales.filter(function(animal){
	return animal.cantidad > 10;
});

console.log(cantidadDeAnimalesMayores);

//EJERCICIO FILTER
//Retornar los animales que tenga cantidad menor a 10
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

var cantidadDeAnimalesMenores = animales.filter(function(animal){
	return animal.cantidad < 10;
});

console.log(cantidadDeAnimalesMenores);


//EJERCICIO FILTER
//[3,11,34,8,10,23,2,3]		Utilizando filter logra que solo se guarden
//los elementos que sean mayores a 15
var numeros = [3,11,34,8,10,23,2,3];

var numerosMayor = numeros.filter(function(numero){
	return numero > 15;
});

console.log(numerosMayor);


//EJERCICIO FILTER
//["juan", "luis", "david", "paola", "paula", "laura", "ramon", "ana", "lucas"]
//Utilizando filter utilizar un parametro de unas letras en el array, y si se
//cumple, muestre las palabras que cumplen esta condicion, ejemplo funcio ("an")
//debe mostrar juan, ana, debido que cumplen con tener an

var personas = ["juan", "luis", "david", "paola", "paula", "laura", "ramon", "ana", "lucas"];

function buscarNombres(letras){
	return personas.filter(function(persona){
		//toLowerCase volver a min las letras, indexOf buscar la letra ingresada se pone condicion sea -1 que es vacio y 1, 2 contienen letras
		return persona.toLowerCase().indexOf(letras.toLowerCase()) > -1
	});
};
console.log(buscarNombres("an"));	//"juan", "ana"
console.log(buscarNombres("la"));	//"paola", "paula", "laura"
console.log(buscarNombres("ra"));	//"laura", "ramon"


//EJERCICIO FILTER
//Hace lo de antes pero con el array de animales y sus objetos

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

function buscarAnimales(letras){
	return animales.filter(function(animal){
		return animal.nombre.toLowerCase().indexOf(letras.toLowerCase()) > -1
	});
};

console.log(buscarAnimales("le"));	//
console.log(buscarAnimales("ON"));	//{nombre: "Leones", color: "Amarillo", cantidad: 30}
console.log(buscarAnimales("ra"));


//EJERCICIO CON MAP()
//Del array de animales devuelve la cantidad de animales sumando 5 animales a cada uno

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

var cantidadAnimalAumento = animales.map(function(animal){
	return animal.cantidad + 5;
});

console.log(cantidadAnimalAumento);	//[21, 41, 8, 35, 15, 9, 14, 45]


//EJERCICIO CON MAP()
//Devolver los nombres de los animales

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

var nombreAnimales = animales.map(function(animal){
	return animal.nombre;
});

console.log(nombreAnimales);	//["Perros", "Gatos", "Elefantes", "Leones", "Aguilas", "Ballena", "Cocodrilo", "Canario"]

//Ejemplo con filter
var nombreAnimalesFilter = animales.filter(function(animal){
	return animal.nombre;
})

console.log(nombreAnimalesFilter);