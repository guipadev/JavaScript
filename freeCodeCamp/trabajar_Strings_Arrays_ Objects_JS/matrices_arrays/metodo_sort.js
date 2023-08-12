/**
 * El método .sort()
 * La clasificación es el proceso de organizar los datos en un orden significativo para
 * que pueda analizarlos de manera más efectiva.
 *
 * Cuando hablamos de matrices, tenemos que mencionar la clasificación.
 * En JavaScript, el método sort() ordena las matrices en su lugar y devuelve la referencia
 * a la misma matriz.
 * Este método muta la matriz y el orden de clasificación predeterminado es ascendente.
 *
 * Puede implementar su propia lógica de clasificación pasando una devolución de llamada
 * que exprese una comparación entre dos elementos y devuelva un número.
 * Si el número devuelto es positivo, el primero de los dos elementos comparados aparecerá
 * primero en la matriz ordenada.
 */

let arr = [3, 1, 4, 2];

// sorting in ascending order

arr.sort();

console.log(arr); // [1, 2, 3, 4]

// using custom sort to sort in descending order

arr.sort((elem1, elem2) => elem2 - elem1);

console.log(arr); // output [4, 3, 2, 1]
