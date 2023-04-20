//La interface genericas no puede ser
//Deben tener un tipo de dato por defecto
//O implementar y definir el tipo de dato en el momento de implementarla 

interface AnimalZoo<T> {
    raza:T
}

//Pero lo podemos hacer cuando genere la interface en base a ella
let objetico:AnimalZoo<string> = {raza:'Tigre'} 
let numerito:AnimalZoo<number> = {raza:3}
