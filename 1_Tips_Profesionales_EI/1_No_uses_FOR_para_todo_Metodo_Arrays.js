// Ya no uses for para todo! Métodos en Arrays de JavaScript

//Queremos saber si en este arreglo alguna persona es mejor de edad para aplicar cierto protocolo

const users = [
	{name: 'Yuliana', age: 25},
	{name: 'Eduardo', age: 30},
	{name: 'Lalito', age: 1},
	{name: 'Damian', age: 1},
];

const hasMinors = users.some(user => user.age < 18);	//some ayuda a verificar si la condicion puesta se cumple
console.log(hasMinors);	//True	Da el siguiente valor al cumplirse la condicion


//OTRO EJEMPLO
const allMinors = users.every(user => user.age < 18);	//every verifica que todos los elementos cumple la condicion
console.log(allMinors);	//False


//AVERIGUAR SI UN ELEMENTO ESTA INCLUIDO
const frutas = ['fresa', 'banano', 'uva', 'melon'];
const hasUva = frutas.includes('uva');
console.log(hasUva);	//True

//EJEMPLO EN EL ARREGLO, TENEMOS LAS VENTAS DE LA SEMANA REGISTRADAS Y QUEREMOS SUMARLAS
const dailyIncomes = [100, 120, 130, 140, 150, 100, 100];
const totalIncome = dailyIncomes.reduce((total, elementodelarray) => total += elementodelarray);
console.log(totalIncome);	//840

//EJERCICIO MIO
const ventas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const total = ventas.reduce((calculo, elementosarray) => calculo += elementosarray);
console.log(total);	//45

