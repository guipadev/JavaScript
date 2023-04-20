//Al tener el tipo generico puede tener atributos como funciones
//Que luego trabaje con datos de tipo generico

class Militar<T>{
    fuerza:string
    rango:T

    constructor(fuerza_:string, rango_:T) {
        this.fuerza = fuerza_
        this.rango = rango_
    }

    cargo(dato:T):T{
        return dato
    }
}

const recluta = new Militar('FAC', 'T1')

recluta.fuerza

recluta.cargo('Bachiller')

console.log(recluta.fuerza)
console.log(recluta.cargo('Bachiller'))
