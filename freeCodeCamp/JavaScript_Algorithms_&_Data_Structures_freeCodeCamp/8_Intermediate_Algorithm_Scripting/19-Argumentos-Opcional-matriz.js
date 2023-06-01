/*
Argumentos Opcional

Cree una función que sume dos argumentos. 
Si solo se proporciona un argumento, devuelve una función que espera un 
argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y 
addTogether(2) debe devolver una función.

Llamar a esta función devuelta con un solo argumento devolverá la suma:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) regresa 5_

Si alguno de los argumentos no es un número válido, devuelve indefinido.

function addTogether() {
  return false;
}

addTogether(2,3);
*/

function addTogether() {
  const [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

let rta = addTogether(2, 3);

console.log(rta); // 5
