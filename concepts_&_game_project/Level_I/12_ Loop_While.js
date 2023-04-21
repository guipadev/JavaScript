//EJERICIO
var numero = 0;

while(numero <= 10){
	console.log(numero);
	numero++;
};

//OTRO EJEMPLO IMPRIMIR ARRAY CON WHILE
var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

function saludarAnimalitos(animal){
	console.log(`Hola mi querido ${animal}`);
};

while(animales.length){
	var animalito = animales.shift();	//shift va eliminando elemento del array, GUARDA elemento eliminado
	saludarAnimalitos(animalito);
};

console.log(animales);	//array va estar vacio

//OTRO EJEMPLO IMPRIMIR ARRAY CON WHILE ANTERIOR PERO AL CONTRARIO
var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

function saludarAnimalitos(animal){
	console.log(`Hola mi querido ${animal}`);
};

while(animales.length){
	var animalito = animales.pop();	
	saludarAnimalitos(animalito);
};

//OTRO EJEMPLO DONDE ARRAY NO SE BORRE LOS ELEMENTOS
var animales = ['perro', 'gato', 'caballo', 'vaca', 'mariposa', 'murcielago', 'delfin'];

function saludarAnimalitos(animal){
	console.log(`Hola mi querido ${animal}`);
};

var aumento = 0;

while(animales.length > aumento){
	saludarAnimalitos(animales[aumento]);
	aumento++;
};