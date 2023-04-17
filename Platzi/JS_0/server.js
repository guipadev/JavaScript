const http = require("http");

const sitioWeb = (req, res) => {
    res.writeHead(200, {"Content-type": "text/html"}); // text/plain cambio a text/html reconocer etiquetas html 
    res.end("Mi <strong>servidor</strong> 🍺");
}

let puerto = 6969;
let ipLocal = "127.0.0.1"; // Podria ser: localhost
let ipWifi = "192.168.20.22"; // ingresando la ip 192.168.20.22:6969 al navegador del celular si esta conectado al wifi

let servidor = http.createServer(sitioWeb);

servidor.listen(puerto, ipWifi); // O puede ser ipLocal

console.log(`servidor corriendo en el puerto ${puerto}`);   // http://localhost:6969/ ó 127.0.0.1:6969