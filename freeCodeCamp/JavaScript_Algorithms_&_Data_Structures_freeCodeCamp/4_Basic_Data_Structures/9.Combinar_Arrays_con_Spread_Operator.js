/*
Combinar Arrays con el Spread Operator

Otra gran ventaja del operador spread es la capacidad de combinar matrices, 
o de insertar todos los elementos de una matriz en otra, en cualquier índice. 
Con sintaxis más tradicionales, podemos concatenar matrices, pero esto solo nos permite 
combinar matrices al final de una y al comienzo de otra. 

La sintaxis de propagación hace que la siguiente operación sea extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray tendría el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis extendida, acabamos de lograr una operación que habría sido más compleja y 
más detallada si hubiéramos usado métodos tradicionales.
*/

/*
Hemos definido una función spreadOut que devuelve la variable sentence.
Modifique la función usando el operador de propagación para que devuelva la matriz
['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());