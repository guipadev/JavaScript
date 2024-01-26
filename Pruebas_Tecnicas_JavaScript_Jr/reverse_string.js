// Reverse String 1
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('montevideo'))

// Reverse String 2
function reverseString2(str) {
    
    let reserved = '';

    for (let i = str.length - 1; i => 0; i--) {
        reserved += str[i];
    }

    return reserved;
}

console.log(reverseString2('monteblanco'))
