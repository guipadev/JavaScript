/*
Use funciones de flecha para escribir funciones anónimas concisas

En JavaScript, a menudo no necesitamos nombrar nuestras funciones, 
especialmente cuando pasamos una función como argumento a otra función. 

En su lugar, creamos funciones en línea.

No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.

Para lograr esto, a menudo usamos la siguiente sintaxis:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

ES6 nos proporciona el azúcar sintáctico para no tener que escribir funciones anónimas 
de esta manera. 

En su lugar, puede usar la sintaxis de la función de flecha :

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

Cuando no hay un cuerpo de función y solo un valor de retorno, 
la sintaxis de la función de flecha le permite omitir la palabra clave, 
return así como los corchetes que rodean el código. 

Esto ayuda a simplificar funciones más pequeñas en declaraciones de una sola línea:

const myFunc = () => "value";

Este código aún devolverá la cadena value de forma predeterminada.

Vuelva a escribir la función asignada a la variable magic que devuelve a new Date()
para usar la sintaxis de la función de flecha. 

Además, asegúrese de que no se defina nada con la palabra clave var.

var magic = function() {
  return new Date();
};

*/

const magic = () => {
  return new Date();
};
