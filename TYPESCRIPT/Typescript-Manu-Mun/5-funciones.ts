// Se define tipo valor a recibir y tipo valor que podra retornar
function valor(nume:number):string{
    return `El número es ${nume}`
}

console.log(valor(55));

// Con 2 parametros
function sumar(a:number, b:number):number{
    return a + b
}

const suma:number = sumar(2,2)
const suma2:number = sumar(52,72)

console.log(suma)
console.log(suma2)

// Modo de funciones normal
function mostrar0():void{
    console.log('Funcion 1')
}

// Modo arow function igual que anterior
const mostrar2 = ():void => { console.log('Funcion 2')}

console.log(mostrar0)
console.log(mostrar2)

// Modo de funciones normal con parametro
function mostrar3(a:string):void{
    console.log(a)
}

// Modo arow function igual que anterior con parametro
const mostrar4 = (a:string):void => { console.log(a)}

mostrar3('Lili')
mostrar4('Flora')