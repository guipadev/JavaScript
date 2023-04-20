/*
Escribe un programa que cree una cadena de texto que represente una rejilla de 8x8,
usando caracteres newline para separar l�neas. A cada posici�n de la rejilla ya sea un
espacio o un caracter "#". Los caracteres deber�an formar un tablero de ajedrez.
Pasando esta cadena de texto a console.log deber�a mostrar algo como esto:
*/

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);