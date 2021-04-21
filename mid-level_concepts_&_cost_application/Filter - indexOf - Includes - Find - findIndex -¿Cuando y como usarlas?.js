//INCLUDES
//Saber si hay un elemento, al buscarlo debe ser una concidencia exacta
let bebidas = ['Pepsi', 'Fanta', 'Coca', 'Batido'];

bebidas.includes('Coca'); //true
bebidas.includes('Agua saborizada'); //false

//INDEXOF
//Dado un elemento devuelve la posicion de este
bebidas.indexOf('Fanta'); //1
bebidas.indexOf('Coca'); //3
bebidas.indexOf('Agua'); //2

//Guarda en una variable la posicion
let indexAgua = bebidas.indexOf("Agua");
//Ejecutamos
indexAgua //2
bebidas[indexAgua] //Agua
bebidas[2] //Agua

bebidas.indexOf("Tractor"); //-1

//FILTER
//Filtrar los elementos que cumplan la condicion

let comidas = [{
        nombre: "Asado con papas",
        cost: 180,
        tipo: "Carne"
    },
    {
        nombre: "Frutos secos",
        cost: 80,
        tipo: "Vegana"
    },
    {
        nombre: "Lechuga y Tomate",
        cost: 70,
        tipo: "Vegana"
    },
    {
        nombre: "Milanesa con papas fritas",
        cost: 190,
        tipo: "Fritos"
    },
    {
        nombre: "Taco de carne",
        cost: 180,
        tipo: "Carne"
    },
    {
        nombre: "Taco de queso",
        cost: 180,
        tipo: "Vegetariano"
    }
];

//Obtener solo las comidas veganas
comidas.filter(comida => comida.tipo === "Vegana");
/*
Obtenemos como resultado:
0: { nombre: "Frutos secos", cost: 80, tipo: "Vegana" }
1: { nombre: "Lechuga y Tomate", cost: 70, tipo: "Vegana" }
*/

//Devolver el valor de la comida < 81
comidas.filter(comida => comida.tipo === "Vegana" && comida.cost < 71);
//{nombre: "Lechuga y Tomate", cost: 70, tipo: "Vegana"}

//FIND
//Buscar un elemento que cumpla una condicion
comidas.find(comida => comida.cost < 81);
//{nombre: "Frutos secos", cost: 80, tipo: "Vegana"}

//FINDINDEX()
//Encontrar el primer indice/posicion del elemento que cumpla con la condicion
comidas.findIndex(comida => comida.cost < 81); // 3
//Validamos
comidas[3] //{nombre: "Frutos secos", cost: 80, tipo: "Vegana"}

/*
QUEREMOS ENCONTRA EL INDICE
findIndex o indexOf
findIndex busqueda sencilla
indexOf busqueda compleja como condiciones
*/