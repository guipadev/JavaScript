// Con muchos elementos no es recomendable, porque puede generar Reflow, porque el navegador
// pasa a procesa y dibujar parte o totalidad de una web, despues de la actualización
// Todo esto pasa con las opciones createElement, innertHTML, la solucion utilizar Fragment

lista = document.getElementById('lista')
console.log(lista)

// Creando elementos al li
const li = document.createElement('li')
li.textContent = 'primer elemento'

// Incorporar el li creado
lista.appendChild(li)

// Incorporar elemento de un array
const lista2 = document.getElementById('lista-2')

const arrayElement = ['elemento 1', 'elemento 2', 'elemento 3']

arrayElement.forEach(item => {
    console.log(item)
    const li2 = document.createElement('li')
    li2.textContent = item

    lista2.appendChild(li2)
})

// Una forma de realizar creacion e incorporación de elementos 
const lista3 = document.getElementById('lista-3')

const arrayElementLista3 = ['elemento3 #1', 'elemento3 #2', 'elemento3 #3']

arrayElementLista3.forEach(item => {
    lista3.innerHTML += `<li>${item}</li>`
})