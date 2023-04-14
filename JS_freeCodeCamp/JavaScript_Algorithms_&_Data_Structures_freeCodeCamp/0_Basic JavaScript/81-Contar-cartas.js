/*
Contar cartas
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja sobre la casa en la próxima mano 
al realizar un seguimiento del número relativo de cartas altas y bajas que quedan en la baraja. 
Esto se llama Conteo de Cartas.

Tener más cartas altas restantes en el mazo favorece al jugador. 
A cada tarjeta se le asigna un valor de acuerdo con la siguiente tabla. 
Cuando la cuenta es positiva, el jugador debe apostar alto. 
Cuando la cuenta es cero o negativa, el jugador debe apostar bajo.

Cambio de conteo	Tarjetas
+1	                2, 3, 4, 5, 6
0	                7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'

Escribirás una función de conteo de cartas. 
Recibirá un card parámetro, que puede ser un número o una cadena, e incrementará o decrementará 
la count variable global según el valor de la tarjeta (ver tabla). 
La función luego devolverá una cadena con el conteo actual y la cadena Bet si el conteo es positivo, 
o Hold si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Salidas de ejemplo: -3 Hold o 5 Bet

Sugerencia
NO restablezca count a 0 cuando el valor sea 7, 8 o 9.
NO devuelva una matriz.
NO incluya comillas (sencillas o dobles) en el resultado.

let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

*/

let count = 0;

function cc(card) {
    
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
      }

      if (count > 0) {
        return count + " Bet";
      } else {
        return count + " Hold";
      }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');