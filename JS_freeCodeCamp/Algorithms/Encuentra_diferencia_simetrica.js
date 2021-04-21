/*
Encuentra la diferencia simétrica

El término matemático diferencia simétrica (? o ?) de dos conjuntos es el conjunto de 
elementos que están en cualquiera de los dos conjuntos pero no en ambos. 
Por ejemplo, para los conjuntos 
A = {1, 2, 3} y B = {2, 3, 4}, A ? B = {1, 4}.

La diferencia simétrica es una operación binaria, lo que significa que opera en solo dos elementos. 
Entonces, para evaluar una expresión que involucra diferencias simétricas entre tres elementos (A ? B ? C), 
debe completar una operación a la vez. 

Por lo tanto, para los conjuntos A y B anteriores, y C = {2, 3}, A ? B ? C = (A ? B) ? C = {1, 4} ? {2, 3} = {1, 2, 3 , 4}.

Cree una función que tome dos o más matrices y devuelva una matriz de su diferencia simétrica. 
La matriz devuelta debe contener solo valores únicos (no duplicados).
*/

/*
Sugerencias
Sugerencia 1
El objeto de argumentos es un objeto tipo Array que solo hereda la propiedad Array.length. 
Por lo tanto, considere convertirlo en una matriz real.

Pista 2
Considere escribir una función auxiliar que devuelva la diferencia simétrica de dos matrices en cada llamada
en lugar de intentar diferenciar todos los conjuntos simultáneamente.

Pista 3
Aplique la función auxiliar contra la matriz de argumentos creada reduciendo sus elementos por pares 
de forma recursiva para formar la salida esperada.

Nota
En el caso de un número impar de conjuntos, la diferencia simétrica incluirá elementos idénticos 
presentes en todos los conjuntos dados. Por ejemplo;

A = {1, 2, 3}
B = {2, 3, 4}
C = {3, 4, 5}

(A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5}
A &Intersection; B = {1, 3, 5}
*/

function sym(...args){
  return [...args.reduce(reducer, new Set())]
}

function reducer(result, arr){
  const compare = new Set(arr);
  for(let val of compare){
    if(result.has(val)){
      result.delete(val);
    }else{
      result.add(val)
    }
  }
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);   // [3, 5, 4]
