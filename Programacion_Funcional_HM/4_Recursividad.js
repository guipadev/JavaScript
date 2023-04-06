//La recursividad se basa en una funcion que se llama asi misma una y otra vez hasta que se cumpla una condicion de salida

const contetoRegresivo = (a) => {
    if (a < 0) return
    console.log(a)
    return contetoRegresivo(a - 1)
}

contetoRegresivo(10) //Iprime conteo reversivo del 10 al 0

//Tambien podriamos con recursividad hacer un conteo hacia arriba de 0 a 10
//Tambien podemos iterar elementos de un areglo sin necesidad del ciclo for o while
//La recursividad nos permite obviar todos estos posibles loops, como hacer a veces codigo un poco confuso al realizar un ciclo for dentro de un fory asi sucesivamente


//Ejemplo en el uso real
const axios = require(axios) //uso libreria axios

const llamarApi = async(url, llamados = 0) => { //1er parametro es una url, y 2do parametro una variable llamado, el cual en caso de no pasar nada tendra por defecto valor de 0
    try {
        const result = await axios.get(url) //con axios buscaremos los datos de la url
        console.log(result); //impirmir datos en consolo
        return result //retornar los datos, siempre que el caso sea exitoso
    } catch (e) { //si el caso no es exitoso
        if (llamados > 5) { //verifica si hemos intentado al menos 5 veces obtener la conexion para obtener los datos
            return '' //en caso de ser mayor a 5, ternora un string vacio
        }
        console.log(e); //imprimos el error en consola
        return llamarApi(url, llamados + 1) //se va acumulando los llamados hasta 6 veces, para intentar realizar la conexion y obtener los datos
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')


//El mismo ejemplo anterior, pero solo obtener los datos
const axios = require(axios) //uso libreria axios

const llamarApi = async(url, llamados = 0) => { //1er parametro es una url, y 2do parametro una variable llamado, el cual en caso de no pasar nada tendra por defecto valor de 0
    try {
        const { data } = await axios.get(url) //con axios buscaremos los datos de la url
        console.log(result); //impirmir datos en consolo
        return data //retornar los datos, siempre que el caso sea exitoso
    } catch (e) { //si el caso no es exitoso
        if (llamados > 5) { //verifica si hemos intentado al menos 5 veces obtener la conexion para obtener los datos
            return '' //en caso de ser mayor a 5, ternora un string vacio
        }
        console.log(e); //imprimos el error en consola
        return llamarApi(url, llamados + 1) //se va acumulando los llamados hasta 6 veces, para intentar realizar la conexion y obtener los datos
    }
}

llamarApi('https://jsonplaceholder.typicode.com/users')