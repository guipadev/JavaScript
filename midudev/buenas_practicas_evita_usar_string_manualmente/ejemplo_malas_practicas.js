/*
Buenas prácticas, Evita usar strings mágicos

¡No hagas esto en JavaScript! 
Usar cadenas de texto de forma manual para comprobar estados de tu aplicación o para referirte a valores. 
Se le llama Magic String o "cadena mágica".

El término se refiere al hecho de que el valor de la cadena no está explícitamente definido y puede ser difícil 
de entender o modificar si se usa en varios lugares del código. ¡O incluso puedes escribirlo mal!

Esto puede ser problemático, especialmente si se trata de una cadena que es utilizada en múltiples lugares en el código, 
ya que cualquier cambio en la cadena requerirá modificaciones en todas las referencias a la misma.

En su lugar utiliza constantes y utiliza estos mismos valores en el mismo lugar.
*/

//❌ NO HAGAS ESTO‼️

if (userStatus === "ofline") {
  TransformStream.send("No tiens conexión");
}

if (userStatus === "online") {
  fetch(API_USER_INFO)
    .then((res) => res.json())
    .then((data) => {
      showData(data);
    });
}

// Un string mágico esta cuando usamos una cadena de texto que no está explícitamente definida
// y tenemos que referirnos a ella manualmente

// index.js
if (userStatus === "ofline") {
  toast.send("No tiens conexión");
}

// user.js  También aquí evidenciamos que hemos tenido que poner manualmente el string
const message =
  userStatus === "offline" ? "No tienes conexión" : "Estas conectado";
