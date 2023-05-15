// 9-Dado un array de números y un número objetivo, escribir una función que encuentre dos números en el array que sumen el número objetivo.
const checkNumbers = (arrayOfNumbers, n) => {
  let secondNumber = null;
  const result = arrayOfNumbers.find((e, index) =>
    arrayOfNumbers.slice(index).find((element2) => {
      const isTrue = element2 + e === n;
      if (isTrue) secondNumber = element2;
      return isTrue;
    })
  );
  return { result, secondNumber };
};
const test = checkNumbers([1, 2, 3], 3);
