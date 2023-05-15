// Todo sea verdad
/*
Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. 
El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. 
De lo contrario, devuelve false.

En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].
*/

function truthCheck(collection, pre) {
    return collection.every(function(element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}

truthCheck(
    [
        { user: "Tinky-Winky", sex: "male" },
        { user: "Dipsy", sex: "male" },
        { user: "Laa-Laa", sex: "female" },
        { user: "Po", sex: "female" }
    ],
    "sex"
);

console.log(truthCheck) //  