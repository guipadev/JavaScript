//Se debe coloar el ? antes del tipo, siendo de uso opcional
interface Pitufo {
    alto: number;
    ancho: number;
    nombres?: string; //atributo en estado opcional
}

let papaPitufo = {
    alto: 2,
    ancho: 1
}

function MostrarPitufo(papaPitufo:Pitufo) {
    
    let mediapeso:number = papaPitufo.alto / papaPitufo.ancho;

    if(papaPitufo.nombres){
        return `${papaPitufo.nombres} tiene una media de ${mediapeso}`
    }else {
        return `No se quien eres, pero tú media de peso es ${mediapeso}}`
    }
}

console.log(MostrarPitufo(papaPitufo))