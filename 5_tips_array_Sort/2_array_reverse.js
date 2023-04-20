/**
 * 2. El array.reverse() es un ajuste forzado para ordenar El array.reverse()
 * es otro método de matriz útil para ordenar los elementos de forma inversa.
 */

let arr = ["bob", "anna", "elsa", "marlon"];
console.log(arr.reverse());

/**
 * Como puede ver, los elementos de la matriz ahora están en orden inverso.
 * Esto es bueno, pero a menudo usamos el reverse() método para ordenar.
 */

let arr2 = ["bob", "anna", "elsa", "marlon"];
let sorted = arr2.sort(); // Ascending
let reversed = sorted.reverse(); // Descending

console.log(reversed);

/**
 * Funciona, pero puede dar lugar a un resultado inesperado, ya reverse() que
 * no está destinado a la clasificación de pedidos, sino solo a la inversión. 
 * Utilice la función de comparación adecuada para sus necesidades de clasificación.
 */