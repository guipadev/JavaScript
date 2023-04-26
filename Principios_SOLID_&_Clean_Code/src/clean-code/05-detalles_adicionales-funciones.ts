/*
FUNCIONES otras recomendaciones:

- Simplicidad es fundamental.
- Funciones de tamaño reducido.
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 líneas.
- Evita el suo del "else".
- Priorizar el uso de la condicional ternaria.
*/

// Forma no adecuada
const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}) => {
  let result: number;

  if (isDead) {
    result = 1500;
  } else {
    if (isSeparated) {
      result = 2500;
    } else {
      if (isRetired) {
        result = 3000;
      } else {
        result = 4000;
      }
    }
  }

  return result;
};

// Forma Adecuada
const getPayAmountCorrect = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}): number => {
  let result: number;

  if (isDead) return 1500;

  if (isSeparated) return 2500;

  return isRetired ? 3000 : 4000;
};
