/*
Agregar elementos a una matriz con push () y unshift ()

La longitud de una matriz, al igual que los tipos de datos que puede contener, no es fija. Las matrices se pueden definir con una longitud de cualquier n�mero de elementos, y los elementos se pueden agregar o eliminar con el tiempo; en otras palabras, las matrices son mutables. En este desaf�o, veremos dos m�todos con los que podemos modificar program�ticamente una matriz: Array.push () y Array.unshift ().

Ambos m�todos toman uno o m�s elementos como par�metros y agregan esos elementos a la matriz en la que se llama al m�todo; el m�todo push () agrega elementos al final de una matriz y unshift () agrega elementos al principio. Considera lo siguiente:
*/

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');  //4

romanNumerals //�["XIX", "XX", "XXI", "XXII"]

romanNumerals.push(twentyThree); //5

�romanNumerals //["XIX", "XX", "XXI", "XXII", "XXIII"]

/*
Tenga en cuenta que tambi�n podemos pasar variables, lo que nos permite una flexibilidad a�n mayor 
para modificar din�micamente los datos de nuestra matriz.
*/

/*
Hemos definido una funci�n, MixedNumbers, a la que le estamos pasando una matriz como argumento. 
Modifique la funci�n usando push () y unshift () para agregar 'I', 2, 'tres' al principio de la matriz y 7, 'VIII', 
9 al final para que la matriz devuelta contenga representaciones de los n�meros 1-9 en orden.
*/


function mixedNumbers(arr) {
  arr.unshift("I",2,"three");
  arr.push(7,"VIII",9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));  //[7, "VIII", 9, "IV", 5, "six", "I", 2, "three"] 







