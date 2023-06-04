/*
Múltiples opciones idénticas en declaraciones de cambio

Si break se omite la declaración de una switch declaración case, 
las siguientes case declaraciones se ejecutan hasta que break se encuentra a. 
Si tiene varias entradas con la misma salida, puede representarlas en una switch declaración como esta:

let result = "";

switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

Los casos 1, 2 y 3 producirán todos el mismo resultado.

Escriba una declaración de cambio para establecer answer los siguientes rangos:
1-3- Low
4-6- Mid
7-9-High

Nota: Deberá tener una case declaración para cada número en el rango.

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);

*/

function sequentialSizes(val) {
    
    let answer = "";
    
    switch (val) {
        case 1:
        case 2:
        case 3:
          return "Low";
          break;
        case 4:
        case 5:
        case 6:
          return "Mid";
          break;
        case 7:
        case 8:
        case 9:
          return "High";
          break;
      }
    
    return answer;
  }
  
  sequentialSizes(1);
