//Asignar valores una vez y no pueden cambiar para nada, solo en bloque que se asignan

interface Animales {
    readonly tipo:string;
    readonly clase:string;
}

let animal:Animales = {
    tipo: 'domestico',
    clase: 'perro'
}

//Nose se puede cambiar valor ya que queda solo lectura
//animal.tipo = "cachorro";

console.log(animal)