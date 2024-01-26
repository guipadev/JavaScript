// Opción 1

function fibonacciSequence(n) {

    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence.slice(0, n);
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(10));


// Opción 2
function fibonnaci(n) {
    if (n < 2) {
        return n;
    }

    return fibonnaci(n -1) + fibonnaci(n - 2);
}

function fibonacciSequence2(n) {

    let fibSequence = [];

    for (let i = 0; i < n; i++) {
        fibSequence.push(fibonnaci(i));
    }
    return fibSequence;
}

console.log(fibonacciSequence2(2));
console.log(fibonacciSequence2(5));
console.log(fibonacciSequence2(10));