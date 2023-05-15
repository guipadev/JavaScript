/**
 * Este archivo será el responsable de la configuración de Webpack y de cómo funcionará
 * en nuestra aplicación.
 *
 * Lo que estamos haciendo aquí primero es configurar el archivo de entrada ( entry: './main.js').
 * Webpack comenzará leyendo ese archivo y luego analizando todas las dependencias
 * (módulos importados de ese archivo).
 *
 * En otras palabras, el archivo de entrada es nuestro archivo JS principal donde se importan
 * todos los demás módulos.
 *
 * Luego declaramos la salida:
 * primero declaramos la ruta donde se almacenará y luego declaramos el nombre del archivo incluido.
 */
const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
