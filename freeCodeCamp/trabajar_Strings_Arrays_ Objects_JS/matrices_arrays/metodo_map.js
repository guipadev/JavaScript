/**
 * El método .map()
 * Primero, supongamos que desea crear una matriz utilizando datos de otra matriz existente,
 * por ejemplo, si tiene una matriz de objetos que representan a los empleados.
 *
 * Cada objeto empleado tiene una propiedad de nombre. Y desea crear una matriz donde cada
 * elemento sea el valor de la propiedad de nombre del objeto empleado en el mismo índice
 * de la matriz que tiene.
 *
 * Aquí es donde entra en juego el método map().
 * Toma una función de devolución de llamada.
 * Map crea una nueva matriz y nunca muta la anterior, y la devolución de llamada expresa
 * lo que desea hacer con los datos de la matriz original. Se verá así:
 */

let arr = [{ name: "joe" }, { name: "john" }];

// It is preffered to use an arrow function

let namesArr = arr.map((elem) => elem.name); // output ['joe' , 'john']
