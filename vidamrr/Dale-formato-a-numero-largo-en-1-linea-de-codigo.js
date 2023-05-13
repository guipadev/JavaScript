num = 7323452568283;
function separator(n) {
  var str = n.toString().split(".");

  str[0] = str[0].replace(/\B(?=(\d{3}))/g, ",");

  return str.join(".");
}

console.log(separator(num)); // 7,323,452,568.283

// Una forma más fácil a un formato especifico de un país

function separador(n) {
  return n.toLocaleString("en-US");
}

console.log(separador(num)); // 7,323,452,568.283
