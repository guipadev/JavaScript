/*
Use la notación de paréntesis para encontrar el enésimo hasta el último carácter en una cadena

Puede usar el mismo principio que acabamos de usar para recuperar el último carácter de una cadena para recuperar el enésimo hasta el último carácter.

Por ejemplo, puede obtener el valor de la penúltima letra de la const firstName = "Augusta" cadena utilizando firstName[firstName.length - 3]

Ejemplo:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];

thirdToLastLettertendría un valor de la cadena s.

Use la notación de corchetes para encontrar el penúltimo carácter en la lastNamecadena.

Sugerencia: intenta ver el ejemplo anterior si te quedas atascado.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
*/

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
