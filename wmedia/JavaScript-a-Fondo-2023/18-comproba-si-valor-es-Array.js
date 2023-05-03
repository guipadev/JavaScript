/**
 * Type check Arrays
 *
 * ¿Cómo saber si un valor es del tipo Array?
 * Dale un vistazo a typeof, instanceof e isArray
 */

const array = [];

typeof array; // object 😅 ya que los array son versiones recortadas de objecto

array instanceof Array; // ✅

Array.isArray(array); // // ✅
