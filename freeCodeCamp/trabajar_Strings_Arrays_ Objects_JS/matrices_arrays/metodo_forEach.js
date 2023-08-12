/**
 * El método .forEach()
 * ¿Estás cansado de los habituales bucles for?
 * Son un poco aburridos, lo sé. Afortunadamente, el método forEach() está aquí para ayudar.
 *
 * Este método toma una devolución de llamada como argumento y no devuelve nada.
 * Itera sobre la matriz y ejecuta una determinada tarea en cada elemento de la matriz.
 * La devolución de llamada expresa la tarea. El código para esto se verá así:
 */

let arr = [1, 2, 3];

// let's output each element on the console

arr.forEach((elem) => console.log(elem));

// output
// 1
// 2
// 3
