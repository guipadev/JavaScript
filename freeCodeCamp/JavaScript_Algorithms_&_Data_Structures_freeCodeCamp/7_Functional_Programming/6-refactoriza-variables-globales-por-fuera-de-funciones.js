/*
Refactoriza variables globales por fuera de funciones

Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No alteres una variable u objeto: 
crea nuevas variables y objetos y devuélvelos, si es necesario, desde una función. 

Pista: 
usar algo como var newArr = arrVar, donde arrVar es un arreglo, simplemente creará 
una referencia a la variable existente y no una copia. 
Así que cambiar un valor en newArr cambiaría el valor en arrVar.

Declara parámetros de función: 
cualquier cálculo dentro de una función depende sólo de los argumentos 
pasados a la función y no en ningún objeto o variable global.

Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios 
cuando trabajamos con arreglos u objetos más complejos.
-----------------------------------------------------------------------------------------------------------------
Reescribe el código para que el arreglo global bookList no sea cambiado dentro de 
ninguna de las funciones. 
La función add debe agregar el bookName dado al final del arreglo pasado a esta 
y devolver un nuevo arreglo (lista).
La función remove debe eliminar el bookName dado del arreglo pasado a esta.

Nota: 
ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser 
añadido antes del parámetro bookName.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
*/

// La variable global
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  return list.filter((book) => book !== bookName);
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);

/*
[
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae'
]
*/
