/*
No es lo mismo asignar valores primitivos a una variable como un numero o un string
Que una estructura mas compleja como un arreglo o un objeto
*/

//Ejemplo asignacion valores primitivos
let valor = 5;
let valor2 = valor;

valor2 = 10;

console.log(valor, valor2); // 5 10

//Asignación por referencia
let arr = [1, 2, 3, 4, 5]
let arr = arr;

arr2.pop();
//Modifica los dos arrays
console.log(arr, arr2); //[1, 2, 3, 4] [1, 2, 3, 4]

//Es mejor usar un operador de esparcimiento para realizar una copia
let arr = [1, 2, 3, 4, 5]
let arr = [...arr];

arr2.pop();
//Modifica solo es 2do array
console.log(arr, arr2); //[1, 2, 3, 4, 5] [1, 2, 3, 4]