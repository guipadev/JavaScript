/*
Ejercicio 37
Escribe una funci�n buscarProducto que reciba un arreglo de objetos y un n�mero. La funci�n deber� buscar el n�mero dentro de cada objeto (en la llave id) y retornar el objeto encontrado.

Si no encuentra un objeto con ese id deber� retornar null.

// c�digo de prueba
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