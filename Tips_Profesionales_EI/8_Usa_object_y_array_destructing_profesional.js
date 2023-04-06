//ARRAY DESTRUCTING

const arr = [undefined, 'Zelda', 'Link', 'Navy'];

const [character1, character2, character3] = arr;

character1;	//undefined
character2;	//Celda
character3;	//Navy

const [badGuys='Ganon', ...goodGuys] = arr;	//...va a tomar los indixes desde el 1

badGuys; //Ganon
goodGuys; //['Zelda', 'Link', 'Navy'] //Se va asignar desde el indice 1


//OBJECT DESTRUCTING

const person = {
	first_name: 'Eduardo',
	gender: 'Male',
	age: 30
};

const {first_name: firstName, age} = person;
firstName; //Eduardo
age; //30


//ANIDAXION EN OBJETOS Y OBJECT DESTRUCTING
const place = {
	name: 'Monterrey',
	coords: {
		lat: 23,
		lng: -99,
	}
}

const {coords:{lat}, coords:{lng}} = place;
lat; //23
lng; //-99

//Queremos acceder a cierto elementos del objeto
const user = [
	{id: 1, name: 'Eduardo'},
	{id: 2, name: 'Lalo'},
	{id: 3, name: 'Yuli'},
];

for(const {id} of users){
	id; //1, 2, 3
}

//funcion que salude por el nombre
const eduardo = {id: 1, name: 'Eduardo'};

function greet({name}){
	console.log(`Hello ${name}`);	//Hello Eduardo
	console.log(id);	//1
}

greet(Eduardo);


/*
PREGUNTA DE ENTREVISTA, PARA SABER QUE TAN BUENO ERES EN VARIABLES
Tengo dos variables A y B, quiero guardar el valor de A en B y el de B en A
*/
let a = 10, b = 20;
let temp = a;
a = b;
b = temp;
a; //20
b; //10

//FORMA MAS SOFISTICADA DE REALIZARLO

let a = 10, b = 20;
[a, b] = [b, a]
a;	//10
b;	//20