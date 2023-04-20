/**
 * 8. Parámetros de función requeridos
 * Ampliando la técnica de parámetros predeterminados, podemos marcar un 
 * parámetro como obligatorio. 
 * Primero defina una función para lanzar un error con un mensaje de error,
 */

 let isRequired = () => {
    throw new Error('This is a mandatory parameter.');
}

/**
 * Luego asigne la función como el valor predeterminado para los parámetros 
 * requeridos. 
 * Recuerde, los valores predeterminados se ignoran cuando se pasa un valor 
 * para un parámetro en el momento de la invocación. 
 * Pero, el valor predeterminado se considera si el valor del parámetro
 * es undefined.
 */

 let greetings = (name=isRequired(), message='Hello,') => {
    return `${message} ${name}`;
}
console.log(greetings());

/**
 * En el código anterior, name no estará definido y eso intentará establecer 
 * el valor predeterminado para él, que es la isRequired() función. 
 * Lanzará un error como Uncaugth Error: This is a mandatory parameter....
 */