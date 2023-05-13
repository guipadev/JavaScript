/**
 *  Actualmente el uso de reverse() muta el Array
*/

const numbers = [1, 2, 3];

const reversedNumbers = numbers.reverse()

console.log(numbers) // [ 3, 2, 1 ] muta el array original

/**
 * Forma resolverlo
 * Pero genera problema de rendimiento
 * /

const numbers2 = [1, 2, 3];

const reversedNumbers2 = [...numbers].reverse()

console.log(numbers2) // [ 1, 2, 3 ]

console.log(reversedNumbers2) // [ 3, 2, 1 ]

/**
 * No debes hacer algo así
 * /
 
Array.prototype.toReversed = function () {
	return this.slice().reverse()
};

const numbers = [1, 2, 3]

console.log(numbers) // [1, 2, 3]

numbers.toReversed() // [3, 2, 1]
