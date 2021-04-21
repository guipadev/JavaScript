//OPERADOR TERNARIO
const num = 12

num > 10 ? console.log("Mayor") : console.log("Menor")

console.log(num > 10 ? "Mayor" : "Menor")

//ELSE

let edad = prompt("Cúal es tu edad")
edad = parseInt(edad)

if (edad > 17) {
  console.log("Es mayor de Edad")
  if (edad > 60) {
    console.log("Es Adulto Mayor")
  }
} else {
  console.log("Es menor de Edad")
}

//ELSE IF

let edad = prompt("Cúal es tu edad")
edad = parseInt(edad)

if (edad <= 17) {
  console.log("Es menor de Edad")
} else if (edad <= 40) {
  console.log("Esta entre 18 y 40")
} else if (edad <= 70) {
    console.log("Es Adulto")
  } else {
  console.log("Es de tercera Edad")
}

//IF

if (true) {
  console.log("Esto siempre se ejecutara")
}

if (false) {
  console.log("No se ejecuta por ser falso")
}

if (5 < 10) {
  console.log("Si se ejecuta por verdad")
}

if (5 > 10) {
  console.log("No se ejecuta por falso")
}

if (5 < 10 && 7 < 20) {
  console.log("Si se ejecuta por verdad")
}

if (5 < 10 || 7 < 20) {
  console.log("Si se ejecuta por verdad")
}


let edad = prompt("Cúal es tu edad")
edad = parseInt(edad)

if (edad > 17) {
  console.log("Es mayor de Edad")
}

if (edad < 17) {
  console.log("Es menor de Edad")
}

if (edad == 17) {
  console.log("Es menor de Edad")
}

