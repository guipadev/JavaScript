function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function eleccion(jugada) {
    let resultado = "";

    if (jugada == 1) {
      resultado = "Piedra 🪨";
    } else if (jugada == 2) {
      resultado = "Papel 📰";
    } else if (jugada == 3) {
      resultado = "Tijera ✂️";
    } else {
      resultado = "Mal elegido 💀";
    }

    return resultado;
  }

  let jugador = 0;
  let pc = 0;

  let triunfos = 0;
  let perdidas = 0;

  let min = 1;
  let max = 3;

  while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(min, max)
    jugador = prompt("Elige: 1 🪨 Piedra, 2 📰 Papel, 3 ✂️ tijera");

    alert("PC eligio: " + eleccion(pc));
    alert("Tu elegiste: " + eleccion(jugador));

    if (pc == jugador) {
      alert("EMPATE 🤦");
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1|| jugador == 3 && pc == 2) {
      alert("GANASTE 🏆");
      triunfos++
    } else {
      alert("PERDISTE 😞");
      perdidas++
    }
  }

  alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces`)