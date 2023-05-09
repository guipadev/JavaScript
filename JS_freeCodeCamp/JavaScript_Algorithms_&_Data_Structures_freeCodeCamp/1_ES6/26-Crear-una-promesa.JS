/*
Una promesa en JavaScript es exactamente lo que parece: 
se usa para hacer una promesa de hacer algo, generalmente de forma asíncrona. 
Cuando la tarea se completa, o cumples tu promesa o no la cumples. 
Promise es una función constructora, por lo que debe usar la new palabra clave para crear una. 
Toma una función, como su argumento, con dos parámetros - resolve y reject. 
Estos son métodos utilizados para determinar el resultado de la promesa. 
La sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => {

});

Cree una nueva promesa llamada makeServerRequest. 
Pase una función con resolve y reject parámetros al constructor.
*/

const makeServerRequest = new Promise((resolve, reject) => {});
