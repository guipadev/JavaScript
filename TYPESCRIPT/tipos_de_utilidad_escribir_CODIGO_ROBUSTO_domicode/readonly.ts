/**
 * Nos convierte todas las propiedades de un tipo a modo solo lectura
 * útil cuando creamos un tipo que no sea modificable, después de su creación
 */


type Userr = {
    name: string;
    city: string;
    active: boolean;
    role: string[];
    age: number;
};

// Convertimos a Readonly
type ReadyOnlyUser = Readonly<Userr>;

// Creamos como modo solo lectura
const MyUser:ReadyOnlyUser = {
    name: 'Benzema',
    city: 'Barcelona',
    active: true,
    role: ['admin'],
    age: 55
};

// Si intentamos cambiar cualquier propiedad no se podra
//MyUser.agen = 88;