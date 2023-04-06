/*
Descomponen en componentes más pequeños o tener codigo adicional para poder hacer referencias a propiedades de un objeto o elementos de un arreglo 
*/
//EJEMPLO CON OBJETO
const user = {
    firstname: 'Marcos',
    age: 28
};

const firstname = user.firstname;
const age = user.age;

console.log(firstname, age); //Marcos 28

//DESTRUCTURACIÓN DEL OBJETO
const user = {
    firstname: 'Marcos',
    age: 28
};

const {
    firstname,
    age
} = user;

console.log(firstname, age); //Marcos 28

//EJEMPLO CON FUNCION
const item = {
    id: 5,
    title: 'lorem',
    qty: 200
}

function process(item) {
    console.log(item.id, item.title); // 5 'lorem' 
}

process(item); // 5 'lorem'

//DESTRUCTURACION DE LA FUNCIONconst item = {
const item = {
    id: 5,
    title: 'lorem',
    qty: 200
}

function process({
    id,
    title
}) {
    console.log(id, title); // 5 'lorem' 
}

process(item); // 5 'lorem'