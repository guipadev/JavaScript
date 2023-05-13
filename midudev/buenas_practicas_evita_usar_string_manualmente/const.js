/*
En luegar de escribir manualmente las cadenas de texto, puedes usar un diccionario y exportarlo desde un fichero.
Así podrás referirte a estos valores de forma mucho más sencilla y comprensible

Para evitar problemas, se recomienda usar Object.freeze. 
Así nadie podrá modificar el diccionario. Ni añadir nuevas propiedades

Hará el objeto inmutable.
*/

export const USER_STATUS = Object.freeze({
  OFFLINE: "offline",
  ONLINE: "online",
  BUSY: "busy",
  AWAY: "away",
});
