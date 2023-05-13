/*
const numbers = [1, 2, 3, 4, 5];

function applyOperation(n) {
  return new Promise((resolve, reject) => {
    resolve(n);
  });
}

const res = numbers.filter(async (num) => {
  return await applyOperation(num) > 3;
});

console.log(res);
*/

const numbers = [1, 2, 3, 4, 5];

function applyOperation(n) {
  return new Promise((resolve, reject) => {
    resolve(n);
  });
}

Promise.all(
  numbers.map(async (num) => {
    const result = await applyOperation(num);
    if (result > 3) {
      return result;
    }
  })
)
  .then((res) => {
    const filteredRes = res.filter((num) => num !== undefined);
    console.log(filteredRes);
  })
  .catch((error) => {
    console.error(error);
  });
