/*
Si bien todos deberiamos conocer la mayoria de los metodos asignados a los arreglos para manipular datos, la realidad es que para aprender NodeJS solo necesitamos los siguientes
*/

//FUNCION MAP
const arr = [1, 2, 3, 4, 5];

//iterara sobre cada objeto y asignarle una operacion
const map = arr.map(x => x * 3);

console.log(map); //[1, 2, 3, 4, 5];

//FUNCION FILTER
//basada con una condicion que sea verdadera, evaluara cada elemento 
//y genera un nuevo arreglo con los elementos que cumplen con la condicion
const arr = [1, 2, 3, 4, 5];

const filter = arr.filter(x => x > 3);

console.log(filter); //[4, 5]

//FUNCION REDUCE
//Ir aplicando una operacion acomulativa, para poder sumar todos los elementos, 
//dividirlos, hacer cualquier tipo de operacion
//toma dos parametros el acomulador y nuestro elemento
//ejemplo de sumatoria
const arr = [1, 2, 3, 4, 5];

const reduce = arr.reduce((acc, item) => acc + item, 2); //suma todos y suma el 2, puede o no ponerlo

console.log(reduce); //17

//FUNCION FIND
//Nos da el primer elemento que cumple con la condicion
const arr = [1, 2, 3, 4, 5];

const find = arr.find(x => x > 3);

console.log(find); //4