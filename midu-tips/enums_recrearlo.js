/*
JavaScript no tiene enums de forma nativa...

Pero podemos usar esto para lograr algo similar:

- Object.freeze: Para evitar que se pueda modificar las propiedades del objeto.
- Symbol(): Para crear valores únicos e inmutables.

También, en lugar de Symbol(), podrías crear una cadena de texto que sepas que no se repita.

Dependiendo de cada caso seguramente te interesarán diferentes formas de hacerlo.

De cualquier forma, a veces te puede servir para mejorar la forma en la que tratas las opciones o estados
que son relevantes para el dominio de la aplicación.
*/

// Creando enums en JavaScript
// freeze: Evita que se pueda modificar las propiedades del objeto
// Symbol() crea valores únicos e inmutables que se puede usar coo identificadores

const USER_STATUS = Object.freeze({
  OFFLINE: "offline",
  ONLINE: "online",
  BUSY: "busy",
  AWAY: "away",
});

USER_STATUS.AWAY === USER_STATUS.AWAY; // true
USER_STATUS.ONLINE === USER_STATUS.BUSY; // false
