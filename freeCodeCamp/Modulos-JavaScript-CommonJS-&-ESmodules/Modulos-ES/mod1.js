/**
 * En lugar de module.exports estamos usando export
 */
const mod1Function = () => console.log("Mod1 is alive!");
const mod1Function2 = () => console.log("Mod1 is rolling, baby!");
const mod1Function3 = () => console.log("Mod3 in spanish!");
/**
 * default establecer una exportación predeterminada para un módulo determinado
 * esto significa que no tenemos que desestructurarlo cuando lo importamos
 */
export default mod1Function3;

export { mod1Function, mod1Function2 };
