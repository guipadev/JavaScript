// Mapea el Debris
/*
Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Puedes leer sobre los períodos orbitales en Wikipedia.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de 6367.4447 kilómetros y el valor GM de la tierra es de 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return arr.map(({ name, avgAlt }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
        
        return { name, orbitalPeriod };
    });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

console.log(orbitalPeriod)  //  