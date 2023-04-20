class Animalito {
    private nombre:string
    private tamano:number

    // Por estar private es solo accesible dentro de esta clase
    public constructor(_nombre:string, _tamano:number){
        this.nombre = _nombre
        this.tamano = _tamano
    }

    public moverse():void{
        console.log('Me estoy moviendo')
    }
}

//Podemos acceder ya que es publico
const hervivoro = new Animal('Caballo', 3)

//No podemos acceder a los metodos