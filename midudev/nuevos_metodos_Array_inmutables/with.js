const array = [1, 2, 3, 4, 5]

array[2] = 6

console.log(array) // [1, 2, 6, 4, 5] se muta el array original

/**
* Para no mutarlo se necesita hacer un rollo con spread
*/

const newArray = [
	...array.slice(0, index),
	6,
	...array.slice(index + 1)
]

console.log(newArray) // [1, 2, 6, 4, 5]

/**
* with 
* hacemos el cambio y no muta el Array original
*/

const Array2 = array.with(2, 6) // [1, 2, 6, 4, 5] inmutable