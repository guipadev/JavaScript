const numeros = [1, 2, 3, 4, 5];

const res = numeros.reduce((acc, item) => {
  return (acc += item);
}, []);

console.log(res, typeof res); // 12345 string
