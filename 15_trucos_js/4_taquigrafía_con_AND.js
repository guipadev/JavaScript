/*
4. Taquigrafía con AND
Consideremos una situación en la que tenemos un valor booleano y una función.
*/
let isPrime = true;

const startWatching = () => {
    console.log('Started Watching!');
}

// Este es demasiado código para verificar la condición booleana e invocar 
// la función

if (isPrime) {
    startWatching();
}

// ¿Qué tal usar la taquigrafía usando el operador AND(&&)? 
// Sí, evita if las declaraciones por completo. ¿Guay, verdad?

isPrime && startWatching();