//EJEMPLO CONVERTIR LA TEMPERATURA EN Cª A Fª 
temperaturesC = [24, 36, 17, 19];
temperaturesF = convertToF(temperaturesC);
console.log(temperaturesF);

function convertToF(arrayC) { 
	let temperaturesF = [];
	arrayC.forEach((temperature) => {
		let temperatureFinal = (temperature * 95 / 5) + 32;
		temperatureF.push(temperatureFinal);	//Vamos agregado el resultado obtenido al arreglo vacio
	}); 
	return temperaturesF;
}

//RESULTADO
// [75.2, 96.8, 62.6, 66.2]



//EJEMPLO UTILIZAR EL OPERADOR MAP 
//Con el ejemplo anterior

temperaturesC = [24, 36, 17, 19];
temperaturesF = temperaturesC.map(t => (t * 9 / 5) + 32);

console.log(temperaturesF);	// [75.2, 96.8, 62.6, 66.2] 
console.log(temperaturesC); // [24, 36, 17, 19]


//OTRO EJEMPLO DE UTILIZAR EL OPERADO MAP
//Recorrer elementos, pero solo se extra la edad que necesitamos

let users = [
	{name: 'Eduardo', age: 28},
	{name: 'Yuliana', age: 25},
	{name: 'Cesar', age: 26}
];

let ages = users.map( elementoDeseado => elementoDeseado.age);
console.log(users);	//Mostrara todos los elementos
console.log(ages);	//Solo mostrara los datos de la edad


