/*
Convertir entidades HTML
Convierta los caracteres &, <, >, "(comillas dobles) y '(apóstrofe) de una cadena en sus entidades 
HTML correspondientes.

function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
*/

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
let rta = convertHTML("Dolce & Gabbana");

console.log(rta); // Dolce &amp; Gabbana
