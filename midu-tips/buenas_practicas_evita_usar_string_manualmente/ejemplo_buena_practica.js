/*
Ahora se puede usar esta constante en cualquier sitio. 
Así no vuelves a escribir manualmente la cadena de texto y siempre usas el mismo valor
*/

// Usamos el diccionario directamente y evitamos errores

import { USER_STATUS } from "./const";

if (userStatus === USER_STATUS.OFFLINE) {
  toast.send("No tienes conexión");
}

const message =
  userStatus === USER_STATUS.OFFLINE ? "No está conectado" : "Está conectado";
