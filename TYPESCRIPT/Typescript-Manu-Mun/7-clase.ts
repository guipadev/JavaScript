/*
Clase es una plantilla de un Objeto
Este contiene Metodos y Atributos de dicho Objeto

Ejemplo:

Objeto Coche

Propiedades: color, marca, numero ruedas, numero de puertas

Metodos: arrancar, acelerar, frenar
*/

class Vehiculo {    //Por convencion el archivo se llama igual
    marca: string;
    fecha: string;
    puertas: number;

    // _ para diferenciar el parametro de clase y del constructor
    constructor(marca: string, fecha: string,  puertas: number) {
        this.marca = marca;
        this.fecha = fecha;
        this.puertas = puertas;
    }

    //ENCAPSULAR para que no alla errores
    getMarca(){
        return this.marca;
    }

    setMarca(marca:string){
        this.marca = marca;
    }

    //Los metodos son funciones
    acelerar():void{
        console.log('Ojo que acelero')
    }

    freno():void{
        console.log('Ojo que freno')
    }
}

//Instanciamos un nuevo objeto
const coche = new Vehiculo('Ford', '12/7/2018', 4)

//Acceder a propiedades
coche.marca = 'Chevrolet';
console.log(coche.marca);

coche.fecha
console.log(coche.fecha);


coche.setMarca('Jeep');
console.log(coche.marca);

//Acceder a metodos
coche.acelerar()

