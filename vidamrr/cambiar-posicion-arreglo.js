const arr = [1, 2, 3, 4, 5];

function intercambio(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(arr); // [ 5, 4, 3, 2, 1 ]
}

intercambio(arr, 0, 4);

// Forma más eficaz
function intercambio2(arr, i, j) {
  [arr[i] = arr[j]] = [arr[j], arr[i]];
  console.log(arr); // [ 5, 4, 3, 2, 1 ]
}

intercambio2(arr, 0, 4);
