// Con fragment guarda todo el elemento template o nodos HTML para posterior pintar en
// nuestro DOM, evitando el Reflow

lista = document.getElementById('lista')
//console.log(lista)

const arrayItem = ['item 1', 'item 2', 'item 3']

//crear fragment opcion 1
const creadoFragment = document.createDocumentFragment()
//crear fragment opcion 2
//const creandoFragment = new DocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement('li') // Creamos elemento li
    li.textContent = item   //  almacenamos elemento li en item
    creadoFragment.appendChild(li)  //  Agregamos li al fragment creado, incorporandose hacia abajo
    //console.log(fragment)
}) 

//Enviamos/pintamos el fragment en el elmento lista
lista.appendChild(creadoFragment)


//INSERTAR DE FORMA INVERTIDA
// Aunque seria mejor dar vuelta el array con los funcion reverse().... 
//osea arrayItem2.reverse()

lista2 = document.getElementById('lista2')

const arrayItem2 = ['item 1', 'item 2', 'item 3']

const creadoFragment2 = new DocumentFragment()

arrayItem2.forEach(item => {
    const li2 = document.createElement('li') 
    li2.textContent = item

    const childNode = creadoFragment2.firstChild
    console.log(item, childNode)

    creadoFragment2.insertBefore(li2, childNode)
}) 

//Enviamos/pintamos el fragment en el elmento lista
lista2.appendChild(creadoFragment2)