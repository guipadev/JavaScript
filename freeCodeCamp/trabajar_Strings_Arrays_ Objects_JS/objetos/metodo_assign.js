/**
 * El método .assign()
 * Ahora digamos que queremos copiar un objeto.
 * Aquí viene el método estático asignar() para ayudarnos a hacer esto.
 * Te mostraré cómo funciona esto y una mejor manera de hacerlo.
 * También hablaré sobre algunos errores comunes que cometen muchos desarrolladores
 * cuando intentan copiar objetos.
 */

let obj = { age: 18 };

// Copying using the assign method

let new1 = {};

Object.assign(new1, obj);

console.log(new1); // output {age : 18}

// We can do the same with the spread operator

let new2 = { ...obj }; // output {age : 18}

/**
 * Un error común es asignar una variable a un objeto directamente.
 * El problema con esto es que los objetos se asignan por referencia y no por valor.
 * Entonces, cualquier cambio mutará el objeto original.
 */

let obj = { age: 18 };

let obj1 = obj;

obj1.age = 17;

console.log(obj); // output {age : 17}
