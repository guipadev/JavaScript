// Múltiplo común más pequeño
/*
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos,
así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido 
por todos los números entre 1 y 3. La respuesta sería 6.
*/

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    
    const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);

    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
            if (divisible) {
                return multiple;
            }
    }
}

console.log(smallestCommons([1,5])) //  60