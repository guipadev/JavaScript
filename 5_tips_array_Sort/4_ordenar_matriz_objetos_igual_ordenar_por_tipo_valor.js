/**
 * 4. Ordenar una matriz de objetos == Ordenar por tipos de valores
 *
 * En JavaScript, objects se utilizan para almacenar múltiples valores como
 * una estructura de datos compleja.
 *
 * Un objeto se crea con llaves {…} y una lista de properties. A property es
 * un key-value par donde key debe ser una cadena y value puede ser de cualquier
 * tipo.
 *
 * Ordenar un objeto se trata principalmente de ordenar en función de los valores
 * de propiedad. Como los valores pueden ser de cualquier tipo, comprendamos
 * varias clasificaciones con ejemplos.
 *
 * un user objeto:
 */

let users = [
  { name: "Joe", address: "Huston", dob: "February 9, 1991", income: 87654 },
  { name: "Bob", address: "London", dob: "July 1, 1986", income: 47974 },
  {
    name: "Carl",
    address: "Bangalore",
    dob: "December 25, 1982",
    income: 97351,
  },
  { name: "Amanda", address: "Lagos", dob: "March 19, 2001", income: 57753 },
];

/**
 * Ordenar por nombre
 * Use la función de comparación para comparar los nombres de cada objeto
 * en la matriz.
 */

users.sort(function (a, b) {
  let left = a.name;
  let right = b.name;
  return left === right ? 0 : left > right ? 1 : -1;
});

console.table(users);

/**
 * Ya sabes, qué hacer para un tipo descendente, ¿verdad?
 * Sí, un pequeño cambio en la función de comparación como se mostró anteriormente.
 */

/**
 * Ordenar por ingresos
 * Los valores de ingresos son números. Sabemos qué hacer aquí.
 * Vamos a comparar los valores de ingreso de los objetos.
 */

users.sort((a, b) => a.income - b.income);
console.table(users);

/**
 * Ordenar por fecha de nacimiento (fecha de nacimiento)
 *
 * El usuario tiene una fecha de nacimiento (propiedad dob) que es una cadena.
 * Bueno, no podemos ordenarlos como una cadena, ¿verdad?
 * Tenemos que ordenarlos como fechas.
 * Para variar, estamos haciendo un orden descendente aquí, lo que significa
 * que el joven estará en la parte superior.
 */

users.sort((a, b) => new Date(b.dob) - new Date(a.dob));
console.table(users);
