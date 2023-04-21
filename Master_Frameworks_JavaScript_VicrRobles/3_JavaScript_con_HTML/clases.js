class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo
        this.velocidad = velocidad
        this.antiguedad = antiguedad
    }

    aumentarVelocidad(){
        this.velocidad += 1
    }

    reducirVelocidad(){
        this.velocidad -= 1
    }
}

let coche1 = new Coche('Mazda', 200, 2017)
let coche2 = new Coche('Porshe', 300, 2019)
let coche3 = new Coche('BMW', 280, 2011)
let coche4 = new Coche('Chevrolet', 150, 2010)

document.write('<h2> Velocidad del auto: ' + coche1.velocidad + '</h2>')
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
document.write('<h2> Velocidad del auto, aumento de 3X: ' + coche1.velocidad + '</h2>')


//HERENCIA
class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad)
        this.altura = 5
    }

    mostrarAltura(){
        return `La altura del bus es ${this.altura}`
    }
}

let autobus1 = new Autobus('Pegasus', 100, 2018)

document.write('<h3> Hereda autobus de coche: '+ autobus1.mostrarAltura() +'</h3>')