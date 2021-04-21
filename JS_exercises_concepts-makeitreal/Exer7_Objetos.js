/*
Ejercicio 37
Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) y retornar el objeto encontrado.

Si no encuentra un objeto con ese id deberá retornar null.

// código de prueba
let productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]
console.log(buscarProducto(productos, 1)) // { id: 1, nombre: "A" }
console.log(buscarProducto(productos, 566)) // null
*/

var productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]

//buscamos
function encontrado(num){

    return num.id === 1;

}

//con find buscamos que el array cumple la funcion
console.log(productos.find(encontrado)); //{id: 1, nombre: "A"}

/**************************************************************/

var productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }];

function buscarProducto (productos, num){
    return productos.find(num.id === num);  
}

console.log(buscarProducto(productos, 1)) // { id: 1, nombre: "A" }
console.log(buscarProducto(productos, 566)) // null