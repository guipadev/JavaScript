/*
Cifrado César

Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. 
En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. 
Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), 
pero si transmítelos.

function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
*/

/**
 *
 * Define una constante alphabet que contiene el alfabeto en mayúsculas.
 * Inicializa una variable result como una cadena vacía, que almacenará el resultado decodificado.
 * Itera sobre cada carácter de la cadena str.
 * Si el carácter no se encuentra en el alphabet, significa que no es una letra,
 * por lo tanto se agrega al resultado sin cambios.
 * Si el carácter es una letra, se busca su índice en el alphabet.
 * Se aplica el desplazamiento de 13 lugares para decodificar la letra y obtener el índice correspondiente.
 * El índice decodificado se utiliza para obtener la letra correspondiente del alphabet y se agrega al resultado.
 * Al finalizar la iteración, se devuelve el resultado decodificado.} str
 */
function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = alphabet.indexOf(char);

    if (charIndex === -1) {
      // El carácter no es una letra, se añade al resultado sin cambios
      result += char;
    } else {
      // Decodificar la letra utilizando el desplazamiento de 13 lugares
      let decodedIndex = (charIndex + 13) % 26;
      result += alphabet[decodedIndex];
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // FREE PIZZA!
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
