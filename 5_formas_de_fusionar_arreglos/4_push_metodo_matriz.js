/*
Usamos el push()método para insertar un elemento al final de la matriz. 
También podemos usar este método para fusionar dos o más matrices. 
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// Merge arrays
const merged = arr1.push(...arr2);

console.log(merged); // 6
console.log(arr1); // [1,2,3,4,5,6]
console.log(arr2); // [4,5,6]

/*
Algunos puntos esenciales a tener en cuenta aquí

- El push()método inserta un elemento en una matriz. 
El método cambia la matriz y devuelve el número de elementos de la matriz después 
de la inserción. 
Entonces, en el ejemplo anterior, la primera matriz, arr1, se cambiará para 
acomodar los nuevos elementos. 
El valor de retorno es 6 del push()método asignado a la mergedvariable.

- Debemos expandir la matriz mientras empujamos su elemento a la otra matriz, 
arr1.push(...arr2). 
Si falta el operador de propagación, se insertará la matriz completa en la otra 
matriz
*/

const arr3 = [1,2,3];
const arr4 = [4,5,6];

// Merging without the ... on arr2
const merged2 = arr3.push(arr4);

console.log(merged2); // 4
console.log(arr3); // [1,2,3,[4,5,6]]
console.log(arr4); // [4,5,6]

/*
Entonces, ¿cómo fusionamos más de dos matrices usando el push()método? 
Aquí está:
*/

const arr5 = [1,2,3];
const arr6 = [4,5,6];
const arr7 = [7,8,9];

// Merge more than two arrays
arr5.push(...[...arr6, ...arr7]); // [1,2,3,4,5,6,7,8,9]

console.log(arr5); // [1,2,3,4,5,6,7,8,9]