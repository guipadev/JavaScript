/*
La última forma de fusionar varias matrices es usando el reduce()método.

No se recomienda esta forma de fusionar matrices, ya que se acerca más al 
for-loop enfoque que hemos visto anteriormente con el dolor de cabeza adicional 
de reduce. 
¡Lo estamos discutiendo aquí por el bien de crear conciencia!

Con el reduce método, podemos inicializar una variable( arr) con el valor de 
arr1 y luego insertar los elementos de arr2 uno por uno en arr.
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const merged = arr2.reduce((arr, item) => {
    arr.push(item);
    return arr;    
}, arr1);

console.log(merged); // [ 1, 2, 3, 4, 5, 6 ]
