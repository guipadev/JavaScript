//Las promesas son objetos que representan un valor que eventualmente se puede resolver
//La ventaja sobre metodos nativo o asyn await, es que estas son mas componibles
//lo cual permite que podamos reutilizar cada vez mas y mas el codigo
//las promesas se pueden resolver inmediatamente o eventualmente en un futuro
//pueden fallar inmediatamente o fallar en un futuro

//Las promesas tambien se pueden ir encadenando, osea
//yo puede tener una promesa, cuando esa devuelva un valor, yo puedo hacer que devuelva otra promesa y asi dentro de una cadena de promesas para ser mas sencillo el manejo de errores y la composicion de estas mismas


//Promesa que se resuelve inmedatamente
const p1 = Promise.resolve(1)
console.log(p1); //{1}

p1
.then(x => x + 5)
.then(x => Promise.resolve(x+5))
.then(x => Promise.reject('Salio mal'))
.then(x => console.log('Va mal'))
.catch(e => console.log(e))

const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 900))
    
delayed(7)
.then(x =>{
    console.log(x)
    return delayed(x + 7)
})
.then(x => console.log(x))
.then(x => Promise.reject('Hubo un error'))
.catch(e => console.log(e))

