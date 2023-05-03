const edades = {
  alberto: 67,
  luis: 40,
  miguel: 20,
};

const valores = Object.values(edades);

valores; // [ 67, 40, 20 ]

const total = valores.reduce((total, actual) => total + actual, 0);

total; // 146
