 type User = {
    name: string;
    city: string;
    active: boolean;
    role: string;
    age: number;
 };

 // Convertir todas las propiedades en opcionales, creando un nuevo tipo
 type PartialUser = Partial<User>;

 const myUser:PartialUser = {
    name: 'Benzema',
    city: 'Barcelona'
 };