/**
 * Extrae un subconjunto de propiedades de un tipo determinado y es útil cuando deseamos
 * que un nuevo tipo tenga algunas propiedades de otro tipo
 */

 type Usuario = {
    name: string;
    city: string;
    active: boolean;
    role: string;
    age: number;
 };

 // Pick espera un Generic y las propiedades que se necesitan
 type PickUsuario = Pick<Usuario, 'age' | 'city'>;

 // Obligetoriamente se deben utilizar las 2 propiedades
 const myUsuario: PickUsuario = {
    age: 54,
    city: 'San Francisco'
 }