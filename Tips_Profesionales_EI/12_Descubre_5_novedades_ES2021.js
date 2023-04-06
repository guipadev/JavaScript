//1 NOVEDAD metodo replaceALL, Reemplazar todos los string que cumplan con la condicion
const js2020 = 'En el 2020, JS es el mejor lenguaje del 2020 2020';

const js2021 = js2020.replaceAll('2020', '2021');
console.log(js2021); //En el 2021, JS es el mejor lenguaje del 2021 2021


//2 NOVEDAD Metodo Any dentro de las promesas
//Se utiliza normalmente cuando envias la peticion a 4 servidores o mas que tiene la informaciòn que necesitas, pero solo vas utilizar la primera inf. que se obtenga y los demas los ignora
//Creamos el metodo
const promise = (delay) => new Promise((resolve) => {
    setTimeout(() => resolve(`${delay} milisegundos`), delay);
})

//Asyn Away
const executePromise = async() => {
        //Crear array de promesas con el metodo anteriormente creado
        const promises = [promise(50), promise(20), promise(120)];
        //const donde guarda la promesa resuelta
        const resolved = await Promise.any(promises);
        console.log(resolved);
    }
    //ejecutamos
executePromise(); //20 milisegundos

//3 NOVEDAD Operadores de asignacion
let a = 'Hola';
//operador ternario que se utiliza
a = (a) ? a : 'Mundo';
console.log(a);

/*
//nueva opcion con OR Equal
let a = 'Hola';

a ||= 'Mundo'; //Dene ser a ||= 'Mundo';
console.log(a);

//nueva opcion con AND Equal
let a = 'Hola';

a &&= 'Mundo'; //Dene ser a &&= 'Mundo';
console.log(a);
*/

//4 NOVEDAD separadores de numeros / Number separations
/*
const thousanMillon = 1000000000; //No es legible la cantidad de 0 digitados
const thousanMillonB = 1_000_000_000; // 1_000_000_000 se utiliza el guion bajo y funcionara
console.log(thousanMillon, thousanMillonB)
*/

//5 NOVEDAD Metodos y campos de manera privada para programacion POO
/*
class ClasePrivada {
    #securityKey; //Indicar campo o atributo privado, puede ser tambien el simbolo $
}

class ClaseConMetodoPrivado {
    #privateMethod(){   //Metodo privado
        return 'Hi';
    }
}

class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;  //Campo estaticos privados
}
*/