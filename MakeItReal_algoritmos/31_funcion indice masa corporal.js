/*
Ejercicio 31
El �ndice de masa corporal (IMC), o BMI por sus siglas en ingl�s, es un valor que determina la 
cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe una funci�n llamada bmi que reciba dos argumentos: peso y altura. Utiliza la f�rmula 
para retornar el BMI correspondiente.

// escribe la funci�n bmi ac�

// c�digo de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695
*/

function bmi(peso, altura){
    return peso / (altura*altura)
  }
  
  //arrow function
  const imc = (peso, altura) => {
    return peso / (altura*altura)
  }