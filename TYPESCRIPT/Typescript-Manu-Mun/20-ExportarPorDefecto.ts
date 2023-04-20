class Persona {
    nombre:string;
    edad:number;
    altura:number;

    constructor(nombre_:string, edad_:number, altura_:number){
        this.nombre = nombre_;
        this.edad = edad_;
        this.altura = altura_;
    }

    mostrar():void {
        console.log(this.nombre);
        
    }
}

//Para exportar toda la clase por defecto
export default Persona