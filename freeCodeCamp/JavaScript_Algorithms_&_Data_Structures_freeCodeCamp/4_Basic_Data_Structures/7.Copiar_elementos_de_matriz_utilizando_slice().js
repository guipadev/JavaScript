/*
Copiar elementos de matriz utilizando slice ()

El siguiente método que cubriremos es slice ().
En lugar de modificar una matriz, slice () copia o extrae un número determinado de elementos en una nueva matriz, 
dejando intacta la matriz a la que se llama. 
slice () toma solo 2 parámetros: el primero es el índice en el que comenzar la extracción y el segundo es el índice en el que detener la extracción
(la extracción ocurrirá hasta, pero sin incluir el elemento en este índice). Considera esto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather tendría el valor ['snow', 'sleet'], 
mientras que weatherConditions todavía tendría ['rain', 'snow', 'sleet', 'hail', 'clear'].

De hecho, hemos creado una nueva matriz extrayendo elementos de una matriz existente.
*/

/*
Hemos definido una función, forecast, que toma una matriz como argumento. Modifique la función usando slice () 
para extraer información de la matriz de argumentos y devolver una nueva matriz que contiene los elementos de cadena warm y sunny.
*/

/*
Copiar elementos de matriz con slice ()

- la función slice () debe usarse para devolver una matriz que consta solo de cálido y soleado.
- Por lo tanto, se deben pasar dos parámetros a la función slice (). 
El primer parámetro debe ser el índice en el que desea que comience la subcadena. 
El segundo parámetro debe ser el índice en el que termina la subcadena.
- Nota: El segundo parámetro terminará la subcadena en ese índice exacto.

Ejemplo:
return arr.slice (1, 4);

Esto devolverá una subcadena que consta de índices [1,2,3] //Nota: arr [4] NO está incluido.
*/

function forecast(arr) {
   return arr.slice(2,4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));