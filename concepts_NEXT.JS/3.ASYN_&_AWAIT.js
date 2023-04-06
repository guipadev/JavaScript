//ASYN AWAIT ESPERA UNA PROMESA SE COMPLETE CORRECTAMENTE PARA EJECUTARSE

async function showData() { //funcion asincrona
    try {
        const json = await getData(); //espera que ejecute esta promesa para ejecutarse

        console.log(`Nombre del canal: ${json.nombre}`);
        console.log(`Tipo de canal: ${json.category}`);
    } catch (err) {
        console.error(err);
    }

}

function getData() {
    return fetch('http://localhost:3000/api')
        .then(response => response.json())
        .then(json => json);
}

showData();