/*
Copiar elementos de matriz utilizando slice ()

El siguiente m�todo que cubriremos es slice ().
En lugar de modificar una matriz, slice () copia o extrae un n�mero determinado de elementos
en una nueva matriz, 
dejando intacta la matriz a la que se llama. 
slice () toma solo 2 par�metros: 
el primero es el �ndice en el que comenzar la extracci�n y 
el segundo es el �ndice en el que detener la extracci�n
(la extracci�n ocurrir� hasta, pero sin incluir el elemento en este �ndice). 

Considera esto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather tendr�a el valor ['snow', 'sleet'], 

mientras que weatherConditions todav�a tendr�a ['rain', 'snow', 'sleet', 'hail', 'clear'].

De hecho, hemos creado una nueva matriz extrayendo elementos de una matriz existente.
*/

/*
Hemos definido una funci�n, forecast, que toma una matriz como argumento. 
Modifique la funci�n usando slice () 
para extraer informaci�n de la matriz de argumentos y devolver una nueva matriz 
que contiene los elementos de cadena warm y sunny.

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

/*
Copiar elementos de matriz con slice ()

- la funci�n slice () debe usarse para devolver una matriz que consta solo 
de c�lido y soleado.
- Por lo tanto, se deben pasar dos par�metros a la funci�n slice (). 
El primer par�metro debe ser el �ndice en el que desea que comience la subcadena. 
El segundo par�metro debe ser el �ndice en el que termina la subcadena.
- Nota: El segundo par�metro terminar� la subcadena en ese �ndice exacto.

Ejemplo:
return arr.slice (1, 4);

Esto devolver� una subcadena que consta de �ndices [1,2,3] //Nota: arr [4] NO est� incluido.
*/

function forecast(arr) {
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
