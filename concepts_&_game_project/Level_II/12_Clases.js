//CREACION DE CLASE
class Personas {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar(respondiendo) { //Esta funcion se a destructurado, y la funcion edadMayor tambien se puede realizar
        var { nombre, apellido } = this
        console.log(`Hola soy la persona ${nombre} ${apellido}`)
        if (respondiendo) {
            respondiendo(nombre, apellido, false) //Podria ir sin false
        }
    }
    edadMayor() {
        if (this.edad >= 18) {
            console.log(`Veo ${this.nombre} ${this.apellido} que eres mayor de edad`)
        } else {
            console.log(`${this.nombre} ${this.apellido} eres menor de edad`)
        }
    }
}

//CREACION DE CLASE QUE HEREDA DE PADRE
class Developer extends Personas {
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad) //Hereda los parametros clase padre
    }
    saludar(respondiendo) {
        var { nombre, apellido } = this
        console.log(`Soy Dev ${nombre} ${apellido}`)
        if (respondiendo) {
            respondiendo(nombre, apellido, true)
        }
    }
}

//PASAR FUNCIONES COMO PARAMETRO
function respondiendo(nombre, apellido, esDeveloper) {
    console.log(`Bienvenido(a) ${nombre} ${apellido}`)
    if (esDeveloper) {
        console.log(`Te felicito tu camino como Dev`)
    }
}


//CREACION DE OBJETOS
var david = new Personas('David', 'Torres', 26)
var miguel = new Personas('Miguel', 'Varoni', 16)
var carlos = new Developer('Carlos', 'Jerez', 30)
var caroll = new Developer('Caroll', 'Diaz', 16, /*lenguaje*/ ) //para el ejercicio otro parametro


david.saludar() //Hola soy la persona David Torres
david.saludar(respondiendo) //Bienvenido(a) David Torres


caroll.saludar() //Soy Dev Caroll Diaz
caroll.saludar(respondiendo) //Bienvenido(a) Caroll Diaz Te felicito tu camino como Dev


//EJERCICIO PARA REALIZAR*/
/*
Que se invoque:

caroll.lenguajePreferencia()

Y arroje el mensaje: A caroll diaz le gusta trabajar con el Lenguaje JavaScript

*/