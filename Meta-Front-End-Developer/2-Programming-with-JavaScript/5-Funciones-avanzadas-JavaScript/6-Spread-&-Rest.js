/*
Uso de propagación y descanso
En esta lectura, aprenderá cómo unir arreglos, objetos usando el operador resto. 
También descubrirá cómo utilizar el operador de propagación para:

Agregue nuevos miembros a las matrices sin usar el método push() ,

Convierta una cadena en una matriz y

Copie un objeto o una matriz en un objeto separado

Recuerde que los métodos push() y pop() se usan para agregar y eliminar elementos del final de una matriz.
Unir matrices, objetos usando el operador de descanso
Usando el operador de propagación, es fácil concatenar arreglos:
*/

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate

console.log(fruitsAndBerries); // outputs a single array ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

// También es fácil unir objetos:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}

console.log(flyingCar) // {wings: 2, wheels: 4}

/*
Agregue nuevos miembros a las matrices sin usar el   método push()
Aquí se explica cómo usar el operador de propagación para agregar fácilmente uno o más miembros a una matriz existente:
*/

let veggies = ['onion', 'parsley'];

veggies = [...veggies, 'carrot', 'beetroot'];

console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot']


/*
Convierta una cadena en una matriz usando el operador de propagación
Dada una cadena, es fácil distribuirla en elementos de matriz separados:
*/
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


/*
Copie un objeto o una matriz en uno separado
Aquí se explica cómo copiar un objeto en un objeto completamente separado, utilizando el operador de extensión.
*/
const car1 = {
    speed: 200,
    color: 'yellow'
}

const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) // 201, 200 .

/*
Puede copiar una matriz en una matriz completamente separada, también utilizando 
el operador de propagación, como este:
*/

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) // ['apples'] 'not' ['apples','pears']

/*
Tenga en cuenta que el operador de propagación solo realiza una copia superficial de la matriz u objeto de origen.
Para obtener más información al respecto, consulte la lectura adicional.

Hay muchos más trucos que puedes realizar con el operador de propagación. 
Algunos de ellos son realmente útiles cuando comienzas a trabajar con una biblioteca como React.
*/