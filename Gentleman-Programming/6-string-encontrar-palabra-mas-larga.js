// 6-Dado un string, escribir una función que encuentre la palabra más larga en el string.
const resultLonger = "hola mundo"
  .split(" ")
  .reduce((acc, element) => (element.length > acc.length ? element : acc));
