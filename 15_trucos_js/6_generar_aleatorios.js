/**
 * 6. Aleatorios
 * Generar números aleatorios u obtener un elemento aleatorio de una matriz 
 * son métodos muy útiles para tener a mano. 
 * 
 * Los he visto aparecer varias veces en muchos de mis proyectos.
 * 
 * Obtener un elemento aleatorio de una matriz,
 */

 let planets = ['Mercury ', 'Mars', 'Venus', 'Earth', 'Neptune', 'Uranus', 'Saturn', 'Jupiter'];
 let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
 console.log('Random Planet', randomPlanet);
 
 // Genere un número aleatorio a partir de un rango especificando los valores mínimo y máximo

 let getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

console.log('Get random', getRandom(0, 10));
