/*
1. Implemente un algoritmo capaz combinar dos arrays ordenados, obteniendo un array ordenado
2. Analice el orden de su algoritmo
3. Implemente un algoritmo el cual dado un array cualquiera, lo ordene
4. Analice el orden de su algoritmo
*/

let arr1 = [1,2,8,10,21]
let arr2 = [3,5,7,8,9,20]

console.log(arr1, arr2)

function merge(arr1, arr2) {
	let combinedArray = []
	
	while (arr1.length && arr2.length) {	//Recorrer hasta que uno quede vacio
		let firstElement	

		if(arr1[0] < arr2[0]) {
			firstElement = arr1.shift()	//sacar primer elemento de arr1 y lo pongo en combinedArray
		}else {
			firstElement = arr2.shift() 	//Sacar el primer elemento de arr2 y se pone en combinedArray	
		}
		combinedArray.push(firstElement)
	}
	combinedArray = combinedArray.concat(arr1).concat(arr2)
	return combinedArray
}
