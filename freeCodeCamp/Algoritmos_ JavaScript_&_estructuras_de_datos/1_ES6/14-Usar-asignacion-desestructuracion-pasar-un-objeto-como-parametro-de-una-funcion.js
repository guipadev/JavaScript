/*
En algunos casos, puede desestructurar el objeto en un argumento de función en sí mismo.

Considere el siguiente código:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
Esto efectivamente desestructura el objeto enviado a la función. 

Esto también se puede hacer en el lugar:

const profileUpdate = ({ name, age, nationality, location }) => {

}

Cuando profileDatase pasa a la función anterior, los valores se desestructuran del parámetro 
de la función para su uso dentro de la función.

Use la asignación de desestructuración dentro del argumento de la función half para enviar 
solo max y min dentro de la función.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
