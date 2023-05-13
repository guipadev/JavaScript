/*
function getUserInfo(name, age) {
  const idUser = getUserId();
  const date = getCreatedDate();

  return {
    id: idUser,
    name: name,
    age: age,
    createdDate: date,
  };
}
*/

// Uso shorthand
// JS sabra que se hacer referencia al nombre de la variable como al valor
function getUserInfo(name, age) {
  const id = getUserId();
  const createdDate = getCreatedDate();

  return {
    id,
    name,
    age,
    createdDate,
  };
}
