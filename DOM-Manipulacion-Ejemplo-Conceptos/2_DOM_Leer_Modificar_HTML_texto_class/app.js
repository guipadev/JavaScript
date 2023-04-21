// Seleccionando elementos del HTML
console.log(document.querySelector('h3'))   // Etiqueta h3
console.log(document.querySelector('.h3-danger'))   // class 
console.log(document.querySelector('#parrafo'))   // id
// Otra forma de selecionar los id
console.log(document.getElementById('parrafo'))   // id
// Seleccionar todos los elementos que coincidan con cierta etiqueta, el id no aplica porque son unicos
console.log(document.querySelectorAll('.h3-danger'))
console.log(document.querySelectorAll('h3-danger'))

// Ejemplo seleccionar elemento y manipularlo
const parrafo = document.querySelector('#parrafo')
parrafo.textContent = 'textp desde JS'
// En esta se puede poner etiquetas
parrafo.innerHTML = '<b>texto con innerHTML</b>'
// Agregar clases especificas al elemento html
parrafo.classList.add('h3-danger', 'my-2')



