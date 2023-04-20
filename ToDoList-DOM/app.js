const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTarea = document.getElementById('lista-tareas')
const template = document.getElementById('template').content

const fragment = document.createDocumentFragment()

//Ejemplo objeto
let tareas = {}

/*
let tareas = {
    1605990629039: {
        id: 1605990629039,
        texto: 'Tarea #1',
        estado: false
    },
    1605990682337: {
        id: 1605990682337,
        texto: 'Tarea #2',
        estado: false
    },
}
*/

//Cuando se lea todo el HTML muestre las tares que ya tiene el objeto predeterminidamente
document.addEventListener('DOMContentLoaded', () => {
    //mostrar la inf. guardada en localstorage
    if(localStorage.getItem('tareas')) {
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }

    pintarTareas()
})

//Detectar evento en los botones de la lista de tareas
listaTarea.addEventListener('click', e => {
    btnAccion(e)
})

formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    //console.log('procesando formulario...')
    //opciones de capturar la informacion del formulario
    //console.log(evento.tage[0].value)
    //console.log(evento.target.querySelector('input').value)
    //console.log(input.value) // este fue declarado desde el principio

    setTarea(evento)
})

const setTarea = eventoTarea => {
    //console.log('diste click') //ingrese o no datos captura esto
    if(input.value.trim() === '') { //trim limpia
        //console.log('Esta vacio')
        return
    }
    //console.log('diste click')

    //Construimos el objeto - Sobre escribir el objeto tarea
    const tarea = {
        id: Date.now(), //genera un numero id aleatorio
        texto: input.value,
        estado: false
    }
    
    //Listar los documentos para empujarlos al objeto coleccion de tareas
    tareas[tarea.id] = tarea
    //console.log(tareas)

    formulario.reset()
    
    //mantener apareciendo para escribir en el campo del formulario
    input.focus()

    pintarTareas()
}

const pintarTareas = () => {

    //Guardar en local storage y formatear a string el objeto para que quede guardado
    localStorage.setItem('tareas', JSON.stringify(tareas))

    //Si no hay tareas pintar un html indicando que no lo hay
    if(Object.values(tareas).length === 0) {
        listaTarea.innerHTML = `
            <div class="alert alert-dark text-center">
                No hay tareas pendientes 🧙‍♂️
            </div>
        `
        return
    }

    listaTarea.innerHTML = ''   //Parte en 0
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)  //Clonamos template
        clone.querySelector('p').textContent = tarea.texto  //Modificamos template
        
        //Remplazar clase existente por una nueva, cuando cambia el estado
        if(tarea.estado) {
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')   // Cambiar color elemento
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt')   // Cambiar la clase
            clone.querySelector('p').style.textDecoration = 'Line-through'  // Cambiar el estilo de p
        }

        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id //obtener id (boton agregar)
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id //obtener id (boton eliminar)
        fragment.appendChild(clone) //Anexamos al fragment
    })
    listaTarea.appendChild(fragment) //Anexamos a lista tarea del HTML
}

const btnAccion = e => {
    //console.log(e.target.classList.contains('fa-check-circle'))
    //Boton seleccionar
    if(e.target.classList.contains('fa-check-circle')) {
        //console.log(e.target.dataset.id)
        tareas[e.target.dataset.id].estado = true //modificar el estado boton
        pintarTareas() //pintar de nuevo la tabla
        console.log(tareas)
    }

    //Boton eliminar
    if(e.target.classList.contains('fa-minus-circle')) {
        delete tareas[e.target.dataset.id]
        pintarTareas()
        console.log(tareas)
    }

    //Restablecer al estado anterior el boton selección
    if(e.target.classList.contains('fa-undo-alt')) {
        tareas[e.target.dataset.id].estado = false
        pintarTareas()
        console.log(tareas)
    }

    e.stopPropagation()
}