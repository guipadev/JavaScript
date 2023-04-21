const numbers = [1, [2, 3], 3]

const copyNumbers = [...numbers]

copyNumbers[1][0] = 5

console.log(numbers[1][0]) // 5
console.log(copyNumbers[1][0]) // 5

// El SPREAD OPERATOR hace una copia sobre el array, sobre el primer nivel
