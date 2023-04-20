// CLASS
// Que cierta propiedades y funcionalidades puedan usarse para 
// Instanciar basados en la clase

class Avenger {
    private heroe:string;

    constructor(heroe:string) {
        this.heroe = heroe;
    }

    poder() {
        console.log(this.heroe);
    }
}

const ironman = new Avenger("Hola soy robot")
const capitan = new Avenger("Soy capitan america")
const hulk = new Avenger("Hulk destruye");

ironman.poder();
capitan.poder();
hulk.poder();

// INTERFACE
// Es como un contrato o serie de reglas que tienen que cumplirse
// Y controla que lo que hagamos se realice correctamente
// Se utiliza para modelar nuestra data

interface Person {
    name: string;
    lastName: string;
    age: number;
    breath: () => void;

}

// Una variabe asignada en la interface debe cumplir con lo asignado en la interfaz
const personita: Person = {
    name: "Dario",
    lastName: "Muñoz",
    age: 29,
    breath: () => {
        console.log("Estoy respirando");
    }
}

// Tanto la CLASE como la INTERFACE pueden utilizarse como tipo de PARAMETRO
const sayHi = (personita: Person) => {
    console.log(`Hola como andas ? ${personita.name}`)
}

// Una buena practica de utilizar interface es cuando recibos informacion del inpoit del backend
// Cuando utilizamos una API le pegamos una inpoit y nos devuelve una cierta información 
// Es siempre bueno crear una estructura de esa información y esto se realiza con una INTERFACE


// EJemplo que recibimos información de un jugado de futbol de una API
interface FootBallPlayer {
    name: string;
    lastName: string;
    age: number;
    preferredFoot: string;
    tshirtNumber:  number;
}

const PlayerMessi = (player: FootBallPlayer) => {}


interface jugadorDeFutbolEstadisticas {
    golesMarcados: number;
    asistenciasEfectivas: number;
}

//Ejemplo como se comparte informacion con un variable podriamos extender los datos
//para utilizarlos y tener mas data, por eso es bueno extender

interface jugadorDeFutbol extends Person{
    pieDiestro: string;
    numCamisa: number;
    //Al tener que crear un objeto complejo es mejor volverlo interfaz
    /*
    estadistica: {
       golesMarcados: number;
       asistenciasEfectivas: number;
    }
    */
    estadistica: jugadorDeFutbolEstadisticas;
}

interface EquipoDeFutbol {
    name: string;
    players: jugadorDeFutbol[];
}

const jugador: jugadorDeFutbol = {
    name: "Lionel",
    lastName: "Messi",
    age: 29,
    breath: () => {
        console.log("Respira en Barcelona");
    },
    pieDiestro: "Izquierdo",
    numCamisa: 10,
    estadistica: {
                    golesMarcados: 10,
                    asistenciasEfectivas: 2
                },
}