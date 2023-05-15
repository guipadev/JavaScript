// Cifrado César

/*
Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. 
En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. 
Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), 
pero si transmítelos.
*/


function rot13(str) {
    return str;
}

console.log(rot13("SERR PBQR PNZC"))  //
console.log(rot13("SERR PBQR PNZC")) // decodificarse en FREE CODE CAMP
console.log(rot13("SERR CVMMN!"))   // decodificarse en FREE PIZZA!
console.log(rot13("SERR YBIR?"))    // decodificarse en FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))  // decodificarse en THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

