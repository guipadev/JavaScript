/*
ARRAYS[]
Son estructura de datos de tipo objeto que permite almacenar multiples tipos de datos,
los arrays son espacios en memoria y dentro de estos se guardan strings, objetos y arrays
*/

/* METODOS DEL ARRAYS

push()
Intrudcir elementos al final del array

pop()
eliminar el ultimo elemento del array

unshift()
Intrudcir elementos al principio del array

shift()
eliminar el primer elemento del array

indexOf("")
Buscar un elemetno del array e informa posicion
*/


//EJEMPLO
var autos = ['renault', 'fiat', 'ford', 'mazda', 'bmw', 'jeep', 'suzuki'];

autos.length;	//7		Muestra la cantidad de elementos del array

autos.indexOf('bwm');	//4		Al buscar nos da el resultado de la posicion del elemento

autos[4];	//"bmw"		Nos muestra el elemento de la posicion

//AGREGAR ELEMENTO
var nuevoElemento = autos.push('hyundai');

var nuevoElemento = autos.push('toyota', 'honda', 'citron', 'lamborgini');

//ELIMINAR ULTIMO ELEMENTO
var elementoEliminado = autos.pop();

//MOSTRAR TODOS LOS ELEMENTOS QUE QUEDAN
autos;

//MOSTRAR ELEMENTO ELMINADO
elementoEliminado;

//EL POP() ELIMINAR EL ULTIMO ELEMENTO INDEPENDIENTE DE LA INSTRUCCION QUE INDIQUES
var elementoEliminado = autos.pop('ferrari');
//lamborgini	Seria el eliminado no ferrari



//INGRESAR ELEMENTOS AL PRINCIPIO
var nuevoElementos = autos.unshift('yamaha', 'akt', 'aprilia');

//ELIMINAR PRIMER ELEMENTO Y NO UNO EN ESPECIFICO COMO pop()
var elementoEliminado = autos.shift();



//ADICIONAR O CONTATENAR ARRAYS

var motos = ['auteco', 'bajac', 'bmx'];		//Nuevo array

var contatenacion_arrays = autos.concat(motos);

contatenacion_arrays;

//["yamaha", "akt", "aprilia", "renault", "fiat", "ford", "mazda", "bmw", "jeep", "suzuki", "hyundai", "toyota", "honda", "citron", "auteco", "bajac", "bmx"]

//LOS DEMAS ARRAYS NO MODIFICINA motos y autos


//EJEMPLO DE ADICIONAR ELEMENTOS DE UN ARRAY A OTRO

Array1 = [1, 2, 3];

Array2 = [4, 5, 6];

//Pasar elementos de Array2 a Array1, tener en cuenta que elemento Array2 no se modifica
Array.prototype.push.apply(Array1, Array2);

Array1
//(6) [1, 2, 3, 4, 5, 6]

Array2
//(3) [4, 5, 6]