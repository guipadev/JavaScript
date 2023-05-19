/*
Recorta una cadena

Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada 
(segundo argumento). 
Devuelve la cadena recortada con un ... al final.

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//Solution 2
function truncateString2(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
