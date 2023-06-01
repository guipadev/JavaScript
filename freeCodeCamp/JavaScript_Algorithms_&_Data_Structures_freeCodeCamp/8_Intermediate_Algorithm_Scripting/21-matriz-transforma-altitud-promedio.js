/*

Mapa de los escombros
De acuerdo con la Tercera Ley de Kepler, el período orbital T
 de dos masas puntuales que orbitan entre sí en una órbita circular o elíptica es:

T= 2 pia3m−−−√
 
a
 es el semieje mayor de la órbita
μ =GRAMOMETRO
  es el parámetro gravitacional estándar
GRAMO
  es la constante gravitacional,
METRO
  es la masa del cuerpo más masivo.
Devuelve una nueva matriz que transforma la altitud promedio de los elementos en sus períodos orbitales
(en segundos).

La matriz contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la Tierra es 6367,4447 kilómetros y el valor GM de la Tierra es 398600,4418 km 3 s -2 .

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
