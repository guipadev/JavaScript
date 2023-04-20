const aplicacion = document.querySelector('.container')

// Vamos a consumir datos de esta página: https://jsonplaceholder.typicode.com/

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        const mostrarInfo = document.createElement('p')
        mostrarInfo.setAttribute('id', usuario.id)
        mostrarInfo.innerHTML = usuario.name
        mostrarInfo.addEventListener('click', function() {
            window.location.href = `./usuario.html?id=${usuario.id}`
        })
        aplicacion.appendChild(mostrarInfo)
    })
}) 
.catch(err => console.log(err))