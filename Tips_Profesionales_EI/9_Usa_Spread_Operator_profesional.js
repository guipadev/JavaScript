const word = 'Hello'
const letters = [...word]
letters; //['H', 'e', 'l', 'l', 'o']

const mainCharacters = ['Link', 'Zelda', 'Ganon'];
const allCharacters = ['Navy', ...mainCharacters, 'Sara', 'Deku']; 

allCharacters; //['Navy', 'Link', 'Zelda', 'Ganon', 'Sara', 'Deku']; 

greetFullName = (name, lastName) => {
	console.log(`Hello ${name} ${lastName}`); //Hello Eduardo Ibarra
}

const args = ['Eduardo', 'Ibarra'];
greetFullName(...args);

#EXAMPLE TWO

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = [6, 7, 8];

const combinedArray1 = arr1.concat(arr2).concat(arr3);
combinedArray1; //[0, 1, 2, 3, 4, 5, 6, 7, 8]

//Una forma mas elegante de obtener el mismo resultado
const combinedArray2 = [...arr1, ...arr2, ...arr3];
combinedArray1; //[0, 1, 2, 3, 4, 5, 6, 7, 8]

//REST Operator
massGreeter = (greet, ...names) => {
	console.log(names.map(name => `${greet}! ${name}`)); //['Hello! Eduardo', 'Hello! Lalito']
}

massGreeter('Hello', 'Eduardo', 'Lalito')