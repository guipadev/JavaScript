// 7-Dado un string y un número n, escribir una función que trunque el string a n caracteres y agregue "..." al final.
const n = 5;
const truncatedResult = "hola gentleman programming".slice(0, n);
const truncatedText =
  truncatedResult.length < n ? truncatedResult : `${truncatedResult}...`;

// Otra forma
const texto = (text, n) => text.slice(0, n) + "...";
const textoTrunqueado = texto("tutifruti", 3);
