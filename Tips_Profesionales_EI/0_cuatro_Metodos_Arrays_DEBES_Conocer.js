const users = [
	{name: 'Yuliana', age: 25},
	{name: 'Eliana', age: 35},
	{name: 'Diana', age: 1},
	{name: 'Juliana', age: 1},
];

//METODO FOREACH

users.forEach(user => console.log(`Hello ${user.name}`));
/*
Hello Yuliana
Hello Eliana
Hello Diana
Hello Juliana
*/

//METODO FILTER
//Obtener arreglo con la condicion de edad mayores a 18
const mayoresDeEdad = users.filter(user => user.age > 18);
console.log(mayoresDeEdad);

//METODO FIND 
//Arrojara solo el primer elemento que cumpla con la condicion
const bebe = users.find(user => user.age === 1);
console.log(bebe);

//Con el metodo filter arrojara a todos los que cumplan con la condicion
const bebeFilter = users.filter(user => user.age === 1);
console.log(bebeFilter);

//METODO MAP
//Ejemplo obtener solo el dato de la edad
const ages = users.map(user => user.age);
console.log(ages);