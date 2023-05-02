const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

const fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')

    const b = document.createElement('b')
    b.textContent = 'Nombre:   '
    li.appendChild(b)

    const span = document.createElement('sapan')
    span.classList.add('text-danger')
    span.textContent = item
    
    li.appendChild(b)
    li.appendChild(span)

    fragment.appendChild(li)
})

lista.appendChild(fragment)

/**************************************************************************************/

// Aquí evitamos el Reflow porque se incorpora al final con innerHTML, aunque NO recomendable por menor rendimiento
const lista2 = document.querySelector('#lista2')

const arrayLista2 = ['item 1', 'item 2', 'item 3']

let fragment1 = ''

arrayLista2.forEach(item => {
    fragment1 += `
    <li class="list">
        <b>Nombre: </b> <span class="text-danger"> ${item} </span>
    </li>
    `
})

lista2.innerHTML = fragment1

/*****************************************************************************************/

// La mejor opción es con template
const lista3 = document.querySelector("#lista3")
//console.log(lista3)

const arrayItem = ["item x1", "item x2", "item x3"]
//console.log(arrayLista3)

//Depues de tener el template y el fragmen hacer recorrido
const template = document.querySelector("#template-li").content
const fragment3 = document.createDocumentFragment()
//console.log(template)

arrayItem.forEach((item) => {
    //template.querySelector("span.text-danger").textContent = item;
    //template.querySelector('.text-danger').textContent = item //tambien se podria haber seleccionado de esta forma
    template.querySelector('span').textContent = item //tambien se podria haber seleccionado de esta forma
    const clone = template.cloneNode(true)
    //const clone = document.importNode(template, true);
    fragment3.appendChild(clone);
})

lista3.appendChild(fragment3)