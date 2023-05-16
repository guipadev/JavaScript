/*
Eliminar elementos con splice ()

Bien, hemos aprendido cómo eliminar elementos del principio y el final de las matrices usando shift () y pop (), pero ¿qué pasa si queremos eliminar un elemento de algún lugar en el medio?
¿O eliminar más de un elemento a la vez? Bueno, ahí es donde entra en juego splice (). 
Splice () nos permite hacer precisamente eso: eliminar cualquier número de elementos consecutivos de cualquier parte de una matriz.

splice () puede tomar hasta 3 parámetros, pero por ahora, nos centraremos solo en los primeros 2. 
Los dos primeros parámetros de splice () son números enteros que representan índices, o posiciones, de la matriz que splice () está siendo exhortó a. 
Y recuerde, las matrices tienen un índice cero, por lo que para indicar el primer elemento de una matriz, usaríamos 0. 

El primer parámetro de splice () representa el índice de la matriz desde el cual comenzar a eliminar elementos, 
mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). array tendría el valor ['today', 'was', 'great'].

splice () no solo modifica la matriz a la que se llama, sino que también devuelve una nueva matriz que contiene el valor de los elementos eliminados:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

newArray tiene el valor ['really', 'happy'].
*/

/*
Hemos inicializado una matriz arr. 
Use splice () para eliminar elementos de arr, de modo que solo contenga elementos que sumen el valor de 10.
*/

/*
Explicación del problema
La función splice () debe llamarse en la matriz arr para eliminar 1 o más elementos del centro de la matriz.

Sugerencias
Sugerencia 1
La matriz arr actualmente suma el valor de 27. Simplemente elimine tantos elementos de arr, por lo que la suma de los elementos restantes es 10.

Pista 2
Piense en qué grupo de elementos consecutivos puede eliminar para que los únicos elementos que quedan sumen 10.
*/

//Option 1
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(4,4);
arr.splice(0,1);

console.log(arr); // [4, 5, 1]

//Option 2
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(1, 4);

console.log(arr); //[2, 5, 2, 1]