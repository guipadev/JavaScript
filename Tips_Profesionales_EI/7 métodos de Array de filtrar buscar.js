// Transofrma cada número multiplicando por 2
console.log([1, 2, 3].map(a => a * 2)) 

// Filtra la comida que no sea carnivora
console.log(['🥭', '🫐', '🍖'].filter(n => n !== '🍖')) 

// Encuentra y devuelve la galiina
console.log(['🐋', '🐊', '🐔'].find(n => n === '🐔'))

// DIme dónde está la gallina
console.log(['🐔', '🦅', '🦆'].findIndex(n => n === '🐔'))


// ¡Rellena el array de dinero!
console.log(['', '', ''].fill('💵'))

//¿Todo está OK?
console.log(['✔️', '❌', '✔️', '✔️'].every(n => n === '✔️'))

// ¿Hay algún error?
console.log(['✔️', '✔️', '❌', '✔️'].some(n => n === '❌'))

