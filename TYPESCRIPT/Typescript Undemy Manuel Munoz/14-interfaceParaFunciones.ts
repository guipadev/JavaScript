//Crear una interface que define los parametros que tendra una funcion

interface General {
    (nombre:string, apellido:string, edad:number):void
}

let funcionGeneralUno:General

funcionGeneralUno = function(nombre:string, apellido:string, edad:number):void {
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)
}

funcionGeneralUno('Jose', 'Leon', 37)