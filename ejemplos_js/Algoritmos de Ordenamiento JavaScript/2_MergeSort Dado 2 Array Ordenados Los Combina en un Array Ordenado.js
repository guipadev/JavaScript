// Dado dos Array ordenados, los combina en una Array ordenado

//Se ejecuta la funcion merge primero

//let array1 = [1,2,8,10,21]
//let array2 = [3,5,7,8,9,20]
//let unionArrays = merge(array1, array2)
//console.log(unionArrays)

//Funcion para unir Array
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

//Luego ejecutamos la funcion mergeSort que nos dara el resultado organizado

let arrayDesorganizado = [3, 4, 1, 2, 2, 5, 7, 9, 1]

console.log(mergeSort(arrayDesorganizado))

function mergeSort(arr) {
	if(arr.length === 1) { return arr } 
    let mediumArray = Math.trunc(arr.length / 2) //dividir el array en dos sin importar si es impar
    let leftArray = arr.splice(0, mediumArray) //se crea un nuevo array con la mitad de los datos del anterior array
    let rightArray = arr //el array original solo queda con la mitad de los datos
    let mergLeft = mergeSort(leftArray)
	let mergRight = mergeSort(rightArray)
	return merge(mergLeft, mergRight) //toma los dos array y queda en uno solo forma ordenada
}

//  [1, 1, 2, 2, 3, 4, 5, 7, 9]