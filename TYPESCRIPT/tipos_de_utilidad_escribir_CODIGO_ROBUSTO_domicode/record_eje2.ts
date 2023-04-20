/**
 * Esta forma de usar Record es más flexible, ya que nos va aceptar incluir un tipo que no este declaro para agregarle datos
 */

// Tipo  usuario
type Jugador = {
    name: string;
    city: string;
};

// creamos objeto tipo Record, pero ahora no espera un tipo determinado de key, si no un String general y espera un objeto Jugador
const jugadores: Record<string, Jugador> = {
    benzema: { name: 'Karin', city: 'Francia' },
    ronaldo: { name: 'Cristiano', city: 'Portugal' },
    messi: { name: 'Lionel', city: 'Argentina' },
    mbappe: { name: 'Kylian', city: 'Francia' },
}

// funcion mostrar
function getJugador(jugadorId: string) {
    return jugadores[jugadorId];
}

// mostrar las keys
console.log(jugadores.benzema);

console.log(getJugador('ronaldo'));