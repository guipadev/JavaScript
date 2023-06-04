/*
Mínimo común múltiplo

Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se puede 
dividir uniformemente por ambos, así como por todos los números secuenciales en el rango 
entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que 
también sea divisible por todos los números entre 1 y 3. La respuesta aquí sería 6.

function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
*/

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

let rta = smallestCommons([1, 5]);

console.log(rta); // 60
