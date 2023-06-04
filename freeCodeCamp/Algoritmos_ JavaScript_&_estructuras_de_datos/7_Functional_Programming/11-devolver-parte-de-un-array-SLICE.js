/*
Devolver parte de un arreglo mediante el método slice

El método slice devuelve una copia de ciertos elementos de un arreglo. 
Puede tomar dos argumentos, el primero da el índice de dónde comenzar el corte, 
el segundo es el índice de dónde terminar el corte (y no es inclusivo). 

Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio
del arreglo hasta el final, la cual es una manera fácil de hacer una copia de todo el arreglo. 
El método slice no muta el arreglo original, pero devuelve uno nuevo.

Por ejemplo:

var arr = ["Cat", "Dog", "Tiger", "Zebra"];

var newArray = arr.slice(1, 3);

newArray tendría el valor de ["Dog", "Tiger"].

---------------------------------------------------------------------------------------------
Use el método slice en la función sliceArray para devolver parte de la matriz dados los índices 
anim proporcionados. La función debe devolver una matriz.
beginSlice 
endSlice

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
*/

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArray(inputAnim, 1, 3)); // ['Dog', 'Tiger']
