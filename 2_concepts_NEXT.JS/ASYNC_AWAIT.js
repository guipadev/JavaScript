//Para entender como funciona Async Await, tenemos que tener claro como funcionan las Promesas
//Las promesas son una forma asincronamente de saber si una operacion tuvo exito o fracaso

//Ejemplo fetch permite realizar una solicitud http
fetch('http://localhost:300/api')
    .then(res => res.json()) //primer promesa
    .then(data => { //encadenamos una segunda promesa para obtener resultado con var data
        console.log(data.items);
    })
    .catch(err => {
        console.log(err);
    });

//UTILIZACION DE ASYNC AWAIT
//Esperar fetch para obtener el resultado bajo el mismo contexto
function getPosts(url) {
    const res = fetch(url);
}

//MISMO METODO ANTERIOR, PERO DE FORMA PROMESA
async function getPosts(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.items);
}

//Obteniendo valor
const getPosts = async() => {
    const res = await fetch('http://localhost/api');
    const data = await res.json();

    console.log(data.items);
}