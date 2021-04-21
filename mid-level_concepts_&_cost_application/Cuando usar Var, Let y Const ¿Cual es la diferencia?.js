//Problema var es que son globales
var name = "Nata" //Esta en la linea 800

var name = "nata" //Esta en la linea 2200

console.log(name) //nata El resultado seria el ultimo, sustituye al original

//uso let
let name1 = "Ruben"
let name1 = "ruben"
console.log(name1) //Va a generar error ya que ya existe declarada la var anteriormente

//Pero se podria reasignar de la siguiente forma
name1 = "ruben"

//uso const esta es inmutable
const name3 = "Erika"
    //Si intentamos reasignar nos va a generar error
name3 = "erika"

//Ejemplo con objeto
const usuario1 = {
        "pais": "Argentina"
    }
    //Esto genera un error, no se puede asingar otro valor a una variable constante
usuario1 = { "pais": "Uruguay" }

//la forma para realizar esta asignacion, es entrar al identificador y asignar un valor
usuario1["pais"] = "uruguay";