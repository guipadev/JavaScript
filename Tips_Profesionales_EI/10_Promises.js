//Creacion de la promesa
const orderTacos = new Promise((resolve, reject) => {
    const tacosAvailable = false;
    window.setTimeout(() => { //Tiempo de espera
        if (tacosAvailable) {
            resolve('Aquì estan tus tacos')
        } else {
            reject('Se terminaron los tacos');
        }
    }, 2000);
});

//Consumir la promesa
orderTacos
    .then(res => { console.log(res); }) //Rta exitosa
    .catch(err => { console.log(err); }) //Msj Error
    .finally(() => { console.log('I <3 tacos'); }) //Msj si se cumple o no