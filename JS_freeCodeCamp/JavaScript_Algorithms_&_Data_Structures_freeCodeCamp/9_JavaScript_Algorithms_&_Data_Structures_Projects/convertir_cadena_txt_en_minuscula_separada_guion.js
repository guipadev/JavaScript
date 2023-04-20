//Spinal case
//Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.

function spinalCase(str) {
    return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
  
console.log(spinalCase('This Is Spinal Tap')) // this-is-spinal-tap