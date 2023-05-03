const product = {
  id: 785679,
  name: "PlayStaticion 5",
  color: "white",
  price: {
    sale: 499,
    full: 599,
  },
};

// En vez de realizar una copia profunda con JSON
const stringified = JSON.stringify(product);

const clone = JSON.parse(stringified);

// Mejor usar este nuevo método nativo de JS - structuredClone
const cloned = structuredClone(product);
