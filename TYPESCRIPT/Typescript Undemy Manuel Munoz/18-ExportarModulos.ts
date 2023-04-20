/*
Modulos que son y para que sirven?
Los modulos son pequeñas porciones de codigo, reutilizables ya no solo dentro del mismo archivo,
si no para poder usar en archivos externos

Cualquier Variable, Clase o Interfaz se puede exportar.

La exportacion se realiza para poder utilizar porciones de codigo de un archivo en otrs.

Asi podemos trabajar con modulos
*/

//Ponemos export para que se pueda exportar en este caso la Variable
export const nombre:string = 'Jose';

//Exportar Clase
export class Persona {
    nombre:string;

    constructor(nombre_:string){
        this.nombre = nombre_;
    }
}

//Exportar Interface
export interface Humano {
    nombre:string;
}


//Exportar Funcion
export const mostrar=():void =>{
    console.log('Mostar');
}

export const mostrona=(dato:string):void =>{
    console.log('Mostar');
}