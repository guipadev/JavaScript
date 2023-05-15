/*
Probar objetos para propiedades

A veces es útil verificar si la propiedad de un objeto dado existe o no. 
Podemos usar el .hasOwnProperty(propname) método de objetos para determinar si ese objeto tiene el nombre de propiedad dado. 
.hasOwnProperty() devoluciones true o false si la propiedad se encuentra o no.

Ejemplo

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

El primero hasOwnPropertyregresa true, mientras que el segundo regresa false.

Modifique la función checkObj para probar si un objeto pasado a la función (obj) contiene una propiedad específica 
(checkProp). Si se encuentra la propiedad, devuelve el valor de esa propiedad. Si no, regresa "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

*/

function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } 
    
    return "Not Found";
}