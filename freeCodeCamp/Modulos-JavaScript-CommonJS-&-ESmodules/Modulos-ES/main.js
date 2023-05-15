/**
 * En lugar de require estamos usando import
 * Otra característica disponible en ESmodules es el cambio de nombre de importación, que se puede hacer así
 */
import lala, { mod1Function as funct1, mod1Function2 } from "./mod1.js";

// importar todas las exportaciones juntas y juntarlas en un objeto
//import * as funct1 from "./mod1.js";

const testFunction = () => {
  console.log("Im the main function");
  funct1();
  //funct1.mod1Function(); // útil en los casos en que, a lo largo de nuestro código, queremos ser explícitos acerca de dónde proviene cada importación
  mod1Function2();
  lala();
};

testFunction();
