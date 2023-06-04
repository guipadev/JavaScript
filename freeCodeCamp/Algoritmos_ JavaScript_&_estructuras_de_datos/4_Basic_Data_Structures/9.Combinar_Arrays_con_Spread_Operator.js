/*
Combinar Arrays con el Spread Operator

Otra gran ventaja del operador spread es la capacidad de combinar matrices, 
o de insertar todos los elementos de una matriz en otra, en cualquier �ndice. 
Con sintaxis m�s tradicionales, podemos concatenar matrices, pero esto solo nos permite 
combinar matrices al final de una y al comienzo de otra. 

La sintaxis de propagaci�n hace que la siguiente operaci�n sea extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray tendr�a el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis extendida, acabamos de lograr una operaci�n que habr�a sido m�s compleja 
y m�s detallada si hubi�ramos usado m�todos tradicionales.
*/

/*
Hemos definido una funci�n spreadOut que devuelve la variable sentence.
Modifique la funci�n usando el operador de propagaci�n para que devuelva la matriz
['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
*/

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());
