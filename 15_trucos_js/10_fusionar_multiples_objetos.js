/**
 * 10. Fusionar múltiples objetos
 * 
 * Es posible que tenga la necesidad de fusionar dos objetos y crear un 
 * mejor objeto informativo para trabajar. 
 * Puede usar el operador de propagación ...(sí, ¡tres puntos!).
 * 
 * Considere dos objetos, emp y job respectivamente
 */

let emp = {
 'id': 'E_01',
 'name': 'Jack',
 'age': 32,
 'addr': 'India'
};

let job = {
 'title': 'Software Dev',
  'location': 'Paris'
};

// Combínalos usando el operador de propagación como:

 // spread operator
 let merged = {...emp, ...job};
 console.log('Spread merged', merged);r

// Hay otra forma de realizar esta combinación. usando Object.assign()_ Puedes hacerlo como,

console.log('Object assign', Object.assign({}, emp, job));

/*
Tenga en cuenta que tanto el operador de extensión como Object.assign realizan una fusión superficial. En una combinación superficial, las propiedades del primer objeto se sobrescriben con los mismos valores de propiedad que el segundo objeto.

Para una fusión profunda, use algo como, _mergede lodash .
*/