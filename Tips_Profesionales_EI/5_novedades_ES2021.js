//1 - Reemplazar texto que cumpla con la condicion, metodo replaceAll
const js2020 = 'En el 2020, JS es el mejor lenguaje del 2020 2020';
const js2021 = js2020.replaceAll('2020', '2021');
console.log(js2021); //En el 2021, JS es el mejor lenguaje del 2021 2021

// 2 - Haces un llamado a 5 servidores que manejan la misma api, y se toma la inf. del primero que conteste
const promise = (delay) => new Promise((resolve) => {
    setTimeout(() => resolve(`${delay} milisegundos`), delay);
})

const executePromises = async() => {
    const promises = [promise(50), promise(20), promise(120)];
    const resolved = await Promise.any(promises);
    console.log(resolved);
}

executePromises();

// 3 -