/*
Prevenir la mutación de objetos

Como se vio en el desafío anterior, const la declaración por sí sola no protege realmente sus datos 
de la mutación. 
Para garantizar que sus datos no cambien, JavaScript proporciona una función Object.freeze 
para evitar la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado y se generará un error si el script se ejecuta 
en modo estricto.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};

Object.freeze(obj);

obj.review = "bad";

obj.newProp = "Test";

console.log(obj); 

Las asignaciones obj.review y obj.newProp darán lugar a errores, 
porque nuestro editor se ejecuta en modo estricto de forma predeterminada, 
y la consola mostrará el valor { name: "FreeCodeCamp", review: "Awesome" }.

En este desafío vas a usar Object.freeze para evitar que cambien las constantes matemáticas. 
Debe congelar el MATH_CONSTANTS objeto para que nadie pueda modificar el valor de PI, 
agregar o eliminar propiedades.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

*/

function freezeObj() {
    
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
    
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();