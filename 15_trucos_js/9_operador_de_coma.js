/**
 * 9. Operador de coma
 * Me sorprendió cuando me di cuenta de que la coma (,) es un operador separado
 *  y nunca se notó. 
 * Lo he estado usando mucho en el código, pero nunca me di cuenta de su verdadera
 * existencia.
 * 
 * En JavaScript, el operador coma(,) se usa para evaluar cada uno de sus 
 * operandos de izquierda a derecha y devuelve el valor del último operando.
 */

 let count = 1;
 let ret = (count++, count);
 console.log(ret);
 
// En el ejemplo anterior, el valor de la variable retserá 2. 
// De manera similar, la salida del siguiente código registrará
// el valor 32 en la consola

let val = (12, 32);
console.log(val);

// ¿Dónde lo usamos? 
// ¿Alguna suposición? 
// El uso más común del operador coma(,) es proporcionar varios parámetros 
// en un bucle for.

for (var i = 0, j = 50; i <= 50; i++, j--) {
  
}
