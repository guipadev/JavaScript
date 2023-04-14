/*
Mutar una matriz declarada con const

Si no está familiarizado con const, consulte este desafío sobre la const palabra clave.

La const declaración tiene muchos casos de uso en JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables usando const de forma predeterminada, 
a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let.

Sin embargo, es importante comprender que los objetos (incluidos los arreglos y las funciones) 
asignados a una variable usando const aún son mutables. 
El uso de la const declaración solo evita la reasignación del identificador de variable.

const s = [5, 6, 7];

s = [1, 2, 3];

s[2] = 45;

console.log(s);

s = [1, 2, 3] resultará en un error. 
Después de comentar esa línea, console.log mostrará el valor [5, 6, 45].

Como puede ver, puede mutar el objeto [5, 6, 7] en sí y la variable s aún apuntará a la matriz alterada [5, 6, 45]. 
Como todas las matrices, los elementos de la matriz s son mutables, pero debido a que const se usaron, 
no puede usar el identificador de variable s para apuntar a una matriz diferente usando el operador de asignación.

Una matriz se declara como const s = [5, 7, 2]. 
Cambie la matriz para [2, 5, 7] usar varias asignaciones de elementos.

const s = [5, 7, 2];

function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

*/

const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

editInPlace();