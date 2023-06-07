// Tarea 1: Crear función consoleStyler
function consoleStyler(color, background, fontSize, txt) {
  let message = "%c" + txt;
  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  console.log(message, style);
}

// Tarea 2: Crear función celebrateStyler
function celebrateStyler(reason) {
  let fontStyle = "color: tomato; font-size: 50px";

  if (reason === "birthday") {
    console.log("%cHappy birthday", fontStyle);
  } else if (reason === "champions") {
    console.log("%cCongrats on the title!", fontStyle);
  } else {
    console.log(message, style);
  }
}

// Tarea 3: Ejecutar las funciones consoleStyler y celebrateStyler
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Tarea 4: Insertar un mensaje de felicitación y personalizado
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Invocar la nueva función
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
