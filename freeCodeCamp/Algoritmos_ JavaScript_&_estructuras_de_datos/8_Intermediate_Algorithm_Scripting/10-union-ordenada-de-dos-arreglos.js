/*
Unión ordenada

Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden 
de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, 
pero sin duplicados en la matriz final.

Los números únicos deben clasificarse según su orden original, pero la matriz final no debe clasificarse 
en orden numérico.

Consulte las pruebas de aserción para ver ejemplos.

function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/

function uniteUnique() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

let rta = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(rta); // [ 1, 3, 2, 5, 4 ]
