//Queremos evitar crear tanto codigo como este tipo de informacion
let profesor1 = {
    legajo: "123ad",
    nombre: "Alan",
    apellido: "Buscalia",
    materia: "Programacion",
};

//Si necesitamos mas alumnos debemos escribir el mismo codigo varisa veces
let alumno1 = {
    matricula: "513as",
    nombre: "Luis",
    apellido: "Perez",
    carrera: "Ing. de Sistemas",
    estudiar: function(){
        console.log("estoy estudiando");
    },
    noHacerNada: function(){
        console.log("paspando moscas");
    },
};

/***********************************************************************************/

//CLASE primera en Mayusculas y evitar repetir codigo
//ABSTRACCION por astrayemos de la clase padre Persona
class Persona {
    nombre;
    apellido;
    edad;
    sexo;

    constructor(nombre, apellido, edad, sexo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log("Hola soy una PERSONA y te saludo");
    }
}

//HERENCIA vamos a obtener atributos y metodos de otra clase
class Alumno extends Persona{
    matricula;
    carrera;

    constructor(nombre, apellido, edad, sexo, matricula, carrera){
        //Lo que se hereda se utiliza super en el orden la clase principal, para no usar this
        super(nombre, apellido, edad, sexo); 
        this.matricula = matricula;
        this.carrera = carrera;
    }

    // ENCAPSULAMIENTO (aplicar a todos los atributos)
    getMatricula(){
        return this.matricula;
    }

    // Para que se pueda utilizar (aplicar a todos los atributos)
    // ABSTRACCION realizamos aqui este proceso
    setMatricula(matricula) {
        if(typeof matricula === 'string') {
            this.matricula = matricula;
        }else {
            console.log("Ingrese un caracter valido");
        }

    }

    estudiar(){
        console.log("estoy estudiando");
    }

    hobbies(){
        console.log("leer");
    }

    //POLIFORMISMO
    //ABSTRACCION porque se abstraen datos de la clase principal
    saludar(){
        console.log("Hola soy un ALUMNO y te saludo");
    }
}


//HERENCIA vamos a obtener atributos y metodos de otra clase
class Profesor extends Persona{
    legajo;
    materia;

    constructor(nombre, apellido, edad, sexo, legajo, materia){
        //Lo que se hereda se utiliza super en el orden la clase principal, para no usar this
        super(nombre, apellido, edad, sexo); 
        this.matricula = legajo;
        this.carrera = materia;
    }

    // ENCAPSULAMIENTO (aplicar a todos los atributos)
    getLegajo(){
        return this.legajo;
    }

    // Para que se pueda utilizar (aplicar a todos los atributos)
    setLegajo(legajo) {
        if(typeof legajo === 'string') {
            this.legajo = legajo;
        }else {
            console.log("Ingrese un caracter valido");
        }
    }

    especialidad(){
        console.log("estoy enseñando programacion");
    }

    hobbies(){
        console.log("Jugar Voleibol");
    }

     //POLIFORMISMO
     saludar(){
        console.log("Hola soy un PROFESOR y te saludo");
    }
}

//crear alumnos basado en la clase
let alumno = new Alumno("Dario", "Muñoz", 32, "Masculino", "1es21s5", "Ing. Industrial");
let profesor = new Profesor("Nata", "Fonseca", 22, "Femenino", "1es21s5","Sistemas");

//podemos utilizar los metodos
alumno.hobbies();

// Sin encapsular se puede hacer esto y esta mal
alumno.carrera = 123123;

// Forma de poder utilizar encapsulado
alumno.setMatricula('12as1s')

// Forma de mostrar encapsulamiento
console.log(alumno.getMatricula());

// Heredamos atributos de clase padre (Persona)
console.log(alumno.getNombre());

// Uso del POLIFORMISMO todos los saludos seran diferentes
// Cambia el comportamiento de acuerdo al contexto 
var arregloDePersonas = [alumno, profesor];

for (var index = 0; index < arregloDePersonas.length; index++) {
    arregloDePersonas[index].saludar();
}