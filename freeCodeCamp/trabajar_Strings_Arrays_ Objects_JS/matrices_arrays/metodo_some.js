/**
 * El método .some()
 * Ahora digamos que tenemos una matriz y queremos verificar si hay al menos un número
 * que pasa una determinada prueba. Aquí viene el método some().
 *
 * Este método toma una devolución de llamada como argumento y devuelve un valor booleano
 * que es verdadero si al menos un elemento de la matriz pasa la prueba y, de lo contrario,
 * es falso.
 * La devolución de llamada expresa la prueba y se verá de la siguiente manera:
 */

let arr = [1, 2, 3, 4, 5];

// Let's check if at least one element is bigger than 4

let bool = arr.some((elem) => elem > 4); // output true
