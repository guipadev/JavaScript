/*
Ejercicio 19
Escribe un programa que:

Le pida al usuario un n�mero y cree un arreglo de n�meros empezando en el 1 hasta el n�mero 
que el usuario ingrese (incluy�ndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un n�mero> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programaci�n seg�n lo visto en clase.
*/

var num = parseInt(prompt('Por favor ingrese un n�mero'));



var arr = [];



for(let i=0; i < num; i++){

   arr.push(i + 1)

}

console.log(arr)	//se visualiza los #

//Eliminar segundo elemento
arr.splice(1, 1) 
console.log(arr)

//Recorrer e imprimir el arreglo
 for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
}