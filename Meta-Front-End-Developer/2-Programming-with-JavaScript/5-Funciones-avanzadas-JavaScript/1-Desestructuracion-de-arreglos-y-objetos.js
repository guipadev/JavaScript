let { PI } = Math;

PI; // 3.141592653589793

let { pi } = Math;

pi; // undefined

PI === Math.PI; // true

PI = 1;

PI === Math.PI; // false
