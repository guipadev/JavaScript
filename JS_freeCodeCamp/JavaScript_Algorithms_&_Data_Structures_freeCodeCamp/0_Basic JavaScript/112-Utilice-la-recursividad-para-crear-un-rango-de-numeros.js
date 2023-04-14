/*
Utilice la recursividad para crear un rango de números

Continuando con el desafío anterior, le brindamos otra oportunidad para crear una función recursiva 
para resolver un problema.

Hemos definido una función nombrada rangeOfNumber scon dos parámetros. 
La función debe devolver una matriz de enteros que comienza con un número representado por el startNum parámetro 
y termina con un número representado por el endNum parámetro. 
El número inicial siempre será menor o igual que el número final. 
Su función debe usar recursividad llamándose a sí misma y no usar bucles de ningún tipo. 
También debería funcionar para los casos en los que ambos startNum y endNum son iguales.

function rangeOfNumbers(startNum, endNum) {
  return [];
};

*/

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) return [];
    
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    
    numbers.push(endNum);
    
    return numbers;
    
};
