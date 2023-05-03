/**
 * Filtrar en base a una propiedad
 */
const personas = [
  { nombre: "Juan", profesion: "Dev" },
  { nombre: "Laura", profesion: "UX" },
  { nombre: "Valeria", profesion: "Dev" },
  { nombre: "Alberto" },
];

// Sin mutar, el test es que tenga profesion
const enActive = personas.filter((persona) => persona.profesion);

console.log(enActive);
/*
[
    { nombre: 'Juan', profesion: 'Dev' },
    { nombre: 'Laura', profesion: 'UX' },
    { nombre: 'Valeria', profesion: 'Dev' }
]
*/

console.log(typeof personas);
