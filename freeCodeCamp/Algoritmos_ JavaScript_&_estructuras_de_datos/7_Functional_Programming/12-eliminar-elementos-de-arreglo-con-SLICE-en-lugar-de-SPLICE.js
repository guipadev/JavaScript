/*
Remueve elementos de un arreglo usando slice en lugar de splice

Un patrón común al trabajar con arreglos es cuando deseas eliminar elementos y 
conservar el resto del arreglo. 

JavaScript ofrece el método splice para esto, que toma argumentos para el índice de dónde
comenzar a eliminar elementos, luego la cantidad de elementos para eliminar.

Si no se proporciona el segundo argumento, el valor predeterminado es eliminar 
elementos hasta el final. 

Sin embargo, el método splice muta el arreglo original en el que se llama. Por ejemplo:

var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

cities.splice(3, 1);

Aquí splice devluelve la "string" London y la elimina del arreglo cities. 
cities tendrá el valor de ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos en el último desafío, el método slice no muta el arreglo original, 
pero devuelve uno nuevo que puede ser guardado en una variable. 

Recuerda que el método slice recibe dos argumentos para indicar el comienzo y el final del segmento
(el final es no inclusivo) y retorna estos elementos en un nuevo arreglo. 

Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.
---------------------------------------------------------------------------------------------------------
Vuelva a escribir la función nonMutatingSplice utilizando slice en lugar de splice. 
Debería limitar la matriz cities proporcionada a una longitud de 3 
y devolver una nueva matriz con solo los tres primeros elementos.

No cambie la matriz original proporcionada a la función.

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

nonMutatingSplice(inputCities);
*/

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(nonMutatingSplice(inputCities)); // ['Chicago', 'Delhi', 'Islamabad']

console.log(inputCities); // No hubo cambios ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
