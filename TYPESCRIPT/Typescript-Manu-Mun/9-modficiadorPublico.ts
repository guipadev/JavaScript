class Animal{
    nombre:string
    tamano:number

    // Tener public o no lo hace publico
    public constructor(_nombre:string, _tamano:number){
        this.nombre = _nombre
        this.tamano = _tamano
    }

    public moverse():void{
        console.log('Me estoy moviendo')
    }
}

//Podemos acceder ya que es publico
const reptil = new Animal('Serpiente', 2)

reptil.moverse()