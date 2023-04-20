
/*****************************************************************
Ejercicio 50
Escribe una funci�n llamada productosBaratos que reciba un arreglo de objetos (que representan productos) 
y retorne un nuevo arreglo con los nombres de los productos cuyo precio est� entre 5 y 10:

// c�digo de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]
***************************************************************/

function productosBaratos(prods){
  for (let elemento of prods){
    if(elemento.precio >= 5 && elemento.precio <= 10){
      console.log([elemento.nombre])
    }
  }
}

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];

console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]