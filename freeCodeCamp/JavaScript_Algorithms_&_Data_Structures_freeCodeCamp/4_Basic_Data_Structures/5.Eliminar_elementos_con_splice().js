/*
Eliminar elementos con splice ()

Bien, hemos aprendido c�mo eliminar elementos del principio y el final de las matrices 
usando shift () y pop (), pero �qu� pasa si queremos eliminar un elemento de alg�n lugar 
en el medio?
�O eliminar m�s de un elemento a la vez? 
Bueno, ah� es donde entra en juego splice (). 
Splice () nos permite hacer precisamente eso: 
eliminar cualquier n�mero de elementos consecutivos de cualquier parte de una matriz.

splice () puede tomar hasta 3 par�metros, pero por ahora, nos centraremos solo en los 
primeros 2. 
Los dos primeros par�metros de splice () son n�meros enteros que representan �ndices, 
o posiciones, de la matriz que splice () est� siendo exhort� a. 
Y recuerde, las matrices tienen un �ndice cero, por lo que para indicar el primer elemento 
de una matriz, usar�amos 0. 

El primer par�metro de splice () representa el �ndice de la matriz desde el cual comenzar
a eliminar elementos, 
mientras que el segundo par�metro indica el n�mero de elementos a eliminar. 
Por ejemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

Aqu� eliminamos 2 elementos, comenzando con el tercer elemento (en el �ndice 2). 
array tendr�a el valor ['today', 'was', 'great'].

splice () no solo modifica la matriz a la que se llama, sino que tambi�n devuelve 
una nueva matriz que contiene el valor de los elementos eliminados:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

newArray tiene el valor ['really', 'happy'].
*/

/*
Hemos inicializado una matriz arr. 
Use splice () para eliminar elementos de arr, de modo que solo contenga elementos que 
sumen el valor de 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
*/

/*
Explicaci�n del problema
La funci�n splice () debe llamarse en la matriz arr para eliminar 1 o m�s elementos 
del centro de la matriz.

Sugerencia 1
La matriz arr actualmente suma el valor de 27. 
Simplemente elimine tantos elementos de arr, por lo que la suma de los elementos 
restantes es 10.

Pista 2
Piense en qu� grupo de elementos consecutivos puede eliminar para que los �nicos 
elementos que quedan sumen 10.
*/

//Option 1
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(4, 4);
arr.splice(0, 1);

console.log(arr); // [4, 5, 1]

//Option 2
const arr2 = [2, 4, 5, 1, 7, 5, 2, 1];

arr2.splice(1, 4);

console.log(arr2); //[2, 5, 2, 1]
