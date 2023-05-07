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

function twoSum(nums, target) {
  // O(n)
  // Iterate the array once
  // At each iteration, calculate the value needed to get to the target, which is target - currentValue
  // If the neededValue exists in the array, return [currentValue, neededValue], else continue iteration
  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    if (nums.indexOf(neededNum) !== -1 && nums.indexOf(neededNum) !== i)
      return [nums[i], nums[nums.indexOf(neededNum)]];
  }
  return false;
}

module.exports = { isPalindrome, twoSum };
