//EJEMPLO COPIANDO ELEMENTOS DE ARREGLO
const arr = [2, 4, 6, 8];
const arr2 = [...arr]; //Operador esparcimiento copia el anterior arreglo

console.log(arr, arr2); //[2, 4, 6, 8][2, 4, 6, 8]

//EJEMPLO ADICIONANDO ELEMENTOS
const arr = [2, 4, 6, 8];
const arr2 = [...arr, 10, 12, 14]; //Operador esparcimiento, puedes agregar más elementos

console.log(arr, arr2); //[2, 4, 6, 8][2, 4, 6, 8, 10, 12, 14]

//EJEMPLO DE OBJETO
const item = {
    id: 5,
    title: 'Hola'
};

const item2 = {...item }; //Indicamos cual es el objeto a copiar

item2.date = '1/1/2021';

console.log(item, item2); //{id:5, title:'Hola'} {id:5, title:'Hola', date:'1/1/2021'}