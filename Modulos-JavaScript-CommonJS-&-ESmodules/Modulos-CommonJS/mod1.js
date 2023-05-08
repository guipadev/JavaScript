const mod1Function = () => console.log("Mod1 is alive!");
const mod1Function2 = () => console.log("Mod1 is rolling, baby!");

/**
 * module.exportses la palabra clave que usamos para declarar todo lo que queremos exportar
 * desde ese archivo.
 */
// module.exports = mod1Function;

/**
 * Si quisiéramos exportar más de una cosa de un solo módulo, podemos hacerlo así:
 */
module.exports = { mod1Function, mod1Function2 };
