// Suma todos los números primos
/*
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. 
Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. 
Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.
*/

function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    
    for (let i = 2; i <= num; i++) {
        if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumPrimes(10))  //  17