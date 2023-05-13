//❌ Código repetido en variable
function getDay(n) {
  let day = "";

  if (n === 1) {
    dary = "lunes";
  }

  if (n === 2) {
    dary = "martes";
  }

  if (n === 3) {
    dary = "miercoles";
  }

  if (n === 4) {
    dary = "jueves";
  }

  if (n === 5) {
    dary = "viernes";
  }

  if (n === 6) {
    dary = "sabado";
  }

  if (n === 7) {
    dary = "domingo";
  }

  if (day === "") {
    throw new Error("Out of range");
  }
}

//❌ Opción de switch case, pero tambien se repite código
function getDay(n) {
  let day = "";

  switch (n) {
    case 1:
      day = "lunes";
      break;
    case 2:
      day = "martes";
      break;
    case 3:
      day = "miercoles";
      break;
    case 4:
      day = "jueves";
      break;
    case 5:
      day = "viernes";
      break;
    case 6:
      day = "sabado";
      break;
    case 7:
      day = "domingo";
      break;

    default:
      throw new Error("Out of range");
  }
}

//👉 Opción mediante arreglo
let days = ["lunes", "martes", "miercoles", "jueves", "viernes"];

function getDay(n) {
  if (n < 1 || n > 7) {
    throw new Error("Out of range");
  }
  return day[n - 1];
}
