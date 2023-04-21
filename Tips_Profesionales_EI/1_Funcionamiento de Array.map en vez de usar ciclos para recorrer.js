//Funcionamiento de Array.map en vez de usar ciclos para recorrer
const array = [1,2,3,4,5]

/* Estructura
const duplicado = array.map((valor, indice, referenciaArray)=>{
    referenciaArray
})
*/

const duplicado = array.map((valor)=>{
    return valor * 2
})

//Obtenemos un nuevo array el original que intacto
console.log(duplicado) // [ 2, 4, 6, 8, 10 ]

//EJEMPLO SERALIZAR OSEA GUARDAR DATOS DE FORMA CORRECTA
const students = [
    {email: 'hola@GMAIL.com'},
    {email: 'JuAn@GmAIL.com'},
    {email: 'OsCar@GmaiL.com'},
    {email: 'JolN@gMAIL.com'},
]

//En este caso para simplificar vamos a omitir el principio de funcion pura, ya que el array.map
//no deberia afectar el array original

const serializeStudents = students.map(function(student) {
    student.email = student.email.toLocaleLowerCase()
    return student
})

console.log(serializeStudents)
/* Todos los email en minuscula
[ { email: 'hola@gmail.com' },
  { email: 'juan@gmail.com' },
  { email: 'oscar@gmail.com' },
  { email: 'joln@gmail.com' } ]
*/

// Uso Arrow Functions para ser más simplificado
let newStudents = students

const serializeNewStudents = newStudents.map(student => {
    student.email = student.email.toLocaleLowerCase()
    return student
})

console.log(serializeNewStudents)

//Simplificar mas el ejemplo
const serializeStudent2 = student => {
    student.email = student.email.toLocaleLowerCase()
    return student
}

const serializeStudents2 = students.map(serializeStudent2)

console.log(serializeStudents2) // [ { email: 'hola@gmail.com' }, { email: 'juan@gmail.com' }, { email: 'oscar@gmail.com' }, { email: 'joln@gmail.com' } ]