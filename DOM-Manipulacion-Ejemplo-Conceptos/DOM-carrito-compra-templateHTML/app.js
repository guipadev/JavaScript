const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')

const templateCard = document.getElementById('template-card').content //content acceder a los elementos
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

//fragment para todas las cosas que queremos pintar
const fragment = document.createDocumentFragment()

let carrito = {}
  
// Ejecutar luego de cargado todo el HTML
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    //Preguntamos si existe guardado en LocalStorage
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }

})
// Detectar el click en cualquier elemento del HTML y capturarlo
cards.addEventListener('click', e => {
    addCarrito(e)
})

// Detectar botones para aumentar o disminuir productos
items.addEventListener('click', e => {
    btnAccion(e)
})


const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json() 
        //console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    //console.log(data)
    
    data.forEach(producto => { //Agregan datos a elemento del html de acuerdo al JSON
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        //Clonamos el fragmento para pintar
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    cards.appendChild(fragment) //Agregamos la inf. del fragmento a cards
}

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark')) //detectar si se esta se hace click a este elemento dara true
    if(e.target.classList.contains('btn-dark')) {
        //captura toda la información del objeto div class card
        //console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation() // Detener otro eventos que se generen 
}

const setCarrito = objeto => {
    //console.log(objeto) //obtenos toda la inf. del objeto class card  
    //Obtener los datos de cada elemento del objeto
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }    

    //Si existe producto se va aumentando la cantidad, cada vez que se presiona el mismo elemento
    // console.log(producto)
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    //obteniendo copia del elemento y aumentando cantidad del producto
    carrito[producto.id] = {...producto}
    //console.log(carrito)
    pintarCarrito()
}

const pintarCarrito = () => {
    //console.log(carrito)
    items.innerHTML = '' //Reiniciar en 0 para que no se sobreescriba la información
    Object.values(carrito).forEach(producto => { //Object.values nos permite manipular el objeto carrito
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title 
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        //clonamos y pasamos todo a una variable
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone) //fragmento a copiar
    })
    items.appendChild(fragment)

    pintarFooter()

    //Guardar en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito))

}

const pintarFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0) { // Manipular el objeto carrito
    //Al ser solo una linea a cambiar no hay necesidad de pintar con fragment
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - Comience a comprar!! </th>`
        return
    }

    const sumarCantidades = Object.values(carrito).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)
    //console.log(sumarCantidades)
    
    const sumarPrecios = Object.values(carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio, 0) 
    //console.log(sumarPrecios)

    templateFooter.querySelectorAll('td')[0].textContent = sumarCantidades
    templateFooter.querySelector('span').textContent = sumarPrecios

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    //console.log(e.target)
    // Acción de aumentar
    if(e.target.classList.contains('btn-info')) {
        //console.log(carrito[e.target.dataset.id])
        // carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    if(e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }
    e.stopPropagation()
      
}
