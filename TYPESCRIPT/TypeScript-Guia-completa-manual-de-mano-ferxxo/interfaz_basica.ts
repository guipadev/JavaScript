interface Xmen {
    nombre:string,
    poder:string,
}

const enviarMision = (xmen: Xmen) => {
    console.log("Enviado a: " + xmen.nombre)
}

const enviarCuartel = (xmen: Xmen) => {
    console.log("Enviado al cuartel: " + xmen.nombre)
}

let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Garras de acero"
};

enviarMision(wolverine);
enviarCuartel(wolverine);