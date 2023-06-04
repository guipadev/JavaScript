/*
Donde estás
Cree una función que mire a través de una matriz de objetos (primer argumento) 
y devuelva una matriz de todos los objetos que tienen pares de nombre y 
valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto 
de origen debe estar presente en el objeto de la colección si se va a incluir 
en la matriz devuelta.

Por ejemplo, si el primer argumento es 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
y el segundo argumento es 
{ last: "Capulet" }, 
entonces debe devolver el tercer objeto de la matriz (el primer argumento), 
porque contiene el nombre y su valor, que se pasó como el segundo argumento.

function whatIsInAName(collection, source) {

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
*/

function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
