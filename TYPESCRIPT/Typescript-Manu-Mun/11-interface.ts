interface Persona {
    //Atributos
    nombreCompleto:string;
    apellidoCompleto:string;
    /*
    //Metodos
    caminar():void{
        console.log("camino pues");
    }
    */
}

//Nos permite acceder atributos no definidos adquiriendo atributos y metodos de la interface
function caminar(persona:Persona):void {
    console.log(`La persona ${persona.apellidoCompleto} esta caminando`);
}

//obligatoriamente se debe utilizar todos los que tenga la interface
let nueva_persona:Persona = {
    nombreCompleto:"Manuel",
    apellidoCompleto: "Lozada"
}

//Invocamos la funcion creada
caminar(nueva_persona)

