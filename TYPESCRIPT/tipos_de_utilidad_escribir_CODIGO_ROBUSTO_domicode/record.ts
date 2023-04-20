/**
 * Permite crear un tipo con un conjunto de propiedades con clave
 * Podremos acceder al valor a través de dicha clave
 */

// Tipo  usuario
type Player = {
    name: string;
    city: string;
};

// Otro tipo con propiedades
type RecordPlayer = 'ronaldo' | 'messi' | 'mbappe';

// creamos objeto tipo Record que espera de un determinado tipo las y(RecordPlayer) que luego va a asignar a los valores Player
const players: Record<RecordPlayer, Player> = {
    ronaldo: { name: 'Cristiano', city: 'Portugal' },
    messi: { name: 'Lionel', city: 'Argentina' },
    mbappe: { name: 'Kylian', city: 'Francia' },
}

// Tendremos todos los valores asociados
players.mbappe;