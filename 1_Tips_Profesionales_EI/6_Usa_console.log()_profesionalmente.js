console.log('Hey');
console.info('Hello');
console.warn('Holas');
console.error('Error');

//EJEMPLO UNO
const character1 = {
	name: 'nata',
	occupation: 'princess',
	power: 'love'
}

const character2 = {
	name: 'rigo',
	occupation: 'green',
	power: 'auu'
}

console.log(character1, character2);	//Muestra los elementos de los 2

console.log({character1, character2});	//Muestra de forma mas organizada

console.log([character1, character2]);	//Muestra de forma mas organizada pero en posiciones

//MUESTRA LA INFORMACION EN FORMATO TABLA
console.table([character1, character2]);	//Muestra info. como tabla


//MOSTRAR UN MENSAJE DIFERENTE EN ESTE CASO DE ERROR COMO FACEBOOK
console.log("%cDetente!", "color:red; font-family: monospace; font-size: 4rem; -webkit-text-stroke: 1px black; font-weight: bold");

//MEDIR EL RENDIMIENTO DE TU CODIGO
console.time('test1');
for (i = 0; i < 1000000; i++){

}
console.timeEnd('test1');