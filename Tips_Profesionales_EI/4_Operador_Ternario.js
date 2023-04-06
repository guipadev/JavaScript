//USO NORMAL DE CONDICION
const edad = 16;

let puedeManejar;

if (edad > 17){
	puedeManejar = 'SI';
}else{
	puedeManejar = 'NO';
}
console.log(puedemanejar);


// USO DE OPERADOR TERNARIO ESTA ES LA SINTAXIS:
// condition ? expresion_1 : expresion_2

let puedeManejar2 = edad > 17 ? 'SI' : 'NO';

console.log(puedeManejar2);

//OTRO EJEMPLO
let puedeManejar3 = edad > 17 ? (
		console.log('Claro que puedes manejar ahora'),'SI'
	) : (
		console.log('No cumples para manejar ahora'), 'NO'
	);

console.log(puedeManejar3);


//SIMPLIFICAR ESCENARIO BOOLEANOS
const authenticated = 1;
const canEdit = authenticated === 1 ? true :false;
console.log(canEdit);

//ES MEJOR ELIMAR ESA ESTRUCTURA Y UTILIZAR LA SIGUIENTE QUE EVALUA IGUAL
const authenticated2 = 1;
const canEdit = authenticated2 === 1;
console.log(canEdit2);


//NO ES ACONSEJABLE OPERADOR TERNARIO CON MAS DE DOS CONDIONES, ES MEJOR EL SWICTH CASE
const speed = 240;
const message = speed > 180 ? 'Demasiado rapido' : (speed >= 110 ? 'Rapido' : 'Normal');
