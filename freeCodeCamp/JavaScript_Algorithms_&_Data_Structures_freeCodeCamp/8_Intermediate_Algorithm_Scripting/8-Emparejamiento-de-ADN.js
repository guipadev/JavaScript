/*
Emparejamiento de ADN
Los pares de cadenas de ADN consisten en pares de nucleobases. 
Los pares de bases están representados por los caracteres AT y CG, que forman bloques de construcción 
de la doble hélice del ADN.

A la hebra de ADN le falta el elemento de emparejamiento. 
Escribe una función para hacer coincidir los pares de bases que faltan para la hebra de ADN proporcionada. 
Para cada carácter de la cadena proporcionada, busque el carácter del par base. 
Devuelve los resultados como una matriz 2d.

Por ejemplo, para la entrada GCG, devuelva[["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su pareja se emparejan en una matriz, y todas las matrices se agrupan en una matriz encapsulante.

function pairElement(str) {
  return str;
}

pairElement("GCG")
*/

function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];

  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

// test here
let rta = pairElement("GCG");

console.log(rta); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
