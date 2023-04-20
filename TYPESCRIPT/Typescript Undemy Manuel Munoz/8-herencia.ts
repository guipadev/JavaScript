class Padre{
    nombre:string
    edad:number

    constructor(_nombre:string, _edad:number){
        this.nombre = _nombre
        this.edad = _edad
    }

    mostrarNombre():void{   //Si Funcion no devuelve nada tipiarla a void
        console.log(this.nombre)
    }
}

class Hijo extends Padre{
    apellido: string

    // Recibe los parametros del Padre y anexa el nuevo
    constructor(_nombre:string, _edad:number, _apellido:string){
        //Llamar al constructor de la clase Padre
        super(_nombre, _edad)
        this.apellido = _apellido
    }

    mostrarNombreHijo():void{
        console.log(this.nombre)
    }
}


const nuevoHijo = new Hijo('Martin', 5, 'Lozada')

// Heredamos funnciones del padre que no tenemos declaradas
// Heredamos todas las propiedades y metodos del Padre sin tenerlas
nuevoHijo.mostrarNombre()

nuevoHijo.mostrarNombreHijo()


