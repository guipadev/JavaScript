const aplicacion = document.querySelector('.container')

//Desglosar la URL
let getUrl = new URLSearchParams(window.location.search)

// id = getUrl.get('id')

let id = 4;

// console.log(id)

const url = 'https://jsonplaceholder.typicode.com/users'
//console.log(`${url}/${id}`)

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name

    const email = document.createElement('p')
    email.innerHTML = data.email
    
    aplicacion.appendChild(name)
    aplicacion.appendChild(email)
}) 
.catch(err => console.log(err))
