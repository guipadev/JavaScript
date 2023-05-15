/**
 * Esta función es un comprobador palíndromo.
 * Recibe una cadena como parámetro y devuelve true si la cadena es un palíndromo
 * y false si no lo es.
 * @returns
 */
function isPalindrome(string) {
  /**
   * O(n)
   * Coloque un puntero en cada extremo de la palabra e itere "hacia adentro"
   * En cada iteración, verifique si los punteros representan valores iguales
   * Si esta condición no se cumple, la palabra no es un palíndromo
   */
  let left = 0;

  let right = string.length - 1;

  while (left < right) {
    if (string[left] === string[right]) {
      left += 1;
      right -= 1;
    } else return false;
  }

  return true;
}

/**
 * La función toma dos parámetros, una matriz de números y un número de valor objetivo.
 * Lo que hace es identificar si hay dos números en la matriz que suman el valor
 * del segundo parámetro.
 * Si los dos valores existen en la matriz, los devuelve en una matriz y, si no,
 * devuelve falso.
 */
function twoSum(nums, target) {
  // O(n)
  // Iterar la matriz una vez
  // En cada iteración, calcule el valor necesario para llegar al objetivo, que es target - currentValue
  // Si el valor necesario existe en la matriz, devuelva [valor actual, valor necesario]; de lo contrario, continúe con la iteración
  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    if (nums.indexOf(neededNum) !== -1 && nums.indexOf(neededNum) !== i)
      return [nums[i], nums[nums.indexOf(neededNum)]];
  }
  return false;
}

module.exports = { isPalindrome, twoSum };
