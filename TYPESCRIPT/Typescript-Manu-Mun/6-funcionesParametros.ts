// Parametros Opcionales al poner ?
const Opcionales = (nombre:string, apellido:string, edad?:number)=>{
    if(edad){
        console.log(`Se llama ${nombre} su apellido ${apellido} y su edad ${edad}`)
    }
    console.log(`Se llama ${nombre} su apellido ${apellido}`)
}

Opcionales('Manuel', 'Muñoz')
Opcionales('Manuel', 'Muñoz', 37)

// Parametros por defecto
const mostrarInfo = (nombre:string, apellido:string, edad:number = 18) => {
    return console.log(`Se llama ${nombre} su apellido ${apellido} y su edad ${edad} años`)
}

console.log(mostrarInfo('Rigo', 'Parra'))   //Mostrar edad por defecto
console.log(mostrarInfo('Luna', 'Perez', 50))   //Mostrar la edad puesta

// Parametros REST
const cartapostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} y contiene ${frutas}`)
}

//Podemos pasar los parametros que queramos, pero el dato especifico parametrizado
cartapostres('napoleon', 'fresa', 'vainilla') //mostrar resultado