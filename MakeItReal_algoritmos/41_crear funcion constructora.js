/*****************************************
Ejercicio 41
Crea una funci�n constructora llamada Producto que reciba dos argumentos: 
el nombre y el precio. La funci�n deber� inicializar las propiedades nombre y precio del objeto 
con los valores que llegan como par�metros.

A continuaci�n mostramos algunos ejemplos de la forma en la que se va a utilizar esta funci�n constructora:

// c�digo de prueba
const pan = new Producto("Pan", 2.5)
console.log(pan.nombre) // "Pan"
console.log(pan.precio) // 2.5

const leche = new Producto("Leche", 3.7)
console.log(leche.nombre) // "Leche"
console.log(leche.peso) // 3.7
******************************************/

function Product( name, price){
    this.name = name
    this.price = price
  }
  
  const bread = new Product("Pan", 2.5)
  console.log(bread.name) // "Pan"
  console.log(bread.price) // 2.5
  
  const milk = new Product("Leche", 3.7)
  console.log(milk.name) // "Leche"
  console.log(milk.price) // 3.7