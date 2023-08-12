/**
 * Los métodos .freeze() y .isFrozen()
 * Digamos ahora que queremos hacer un objeto inmutable.
 * Para esto podemos usar el método estático freeze() que hace imposible agregar propiedades,
 * modificar o eliminar cualquiera de los prototipos, métodos y propiedades del objeto congelado.
 *
 * Para ver si un objeto está congelado, podemos usar el método estático isfrozen() .
 */

let obj = { age: 18 };

Object.freeze(obj);

// Let's try to mutate this object

obj.age = 17; // Throws an error in strict mode

let isFrozen = Object.isFreezed(obj); // output true
