// Importar una funcion
// mod1Function = require("./mod1.js");

// Importar varias funciones
({ mod1Function, mod1Function2 } = require("./mod1.js"));

const testFunction = () => {
  console.log("Im the main function");
  mod1Function();
  mod1Function2();
};

testFunction();
