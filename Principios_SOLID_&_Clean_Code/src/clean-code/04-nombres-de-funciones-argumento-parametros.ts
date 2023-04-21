// Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica

// toWhom es un Parámetros
function sendEmail( toWhom: string): boolean {

    // Verificar
    if ( !toWhom.includes('@')) return false;

    // Construir el cuerpo o mensaje

    // Enviar correo

    // Si todo sale bien
    return true;
}

// Otro ejemplo mal
function sendEmail2(): boolean {

    // Verificar si el usuario existe

    // Revisar contraseña

    // Crear usuario en Base de datos

    // Si todo sale bien
    return true;
}

// Argumentos
sendEmail('ferxox@google.com');


// Se recumienda que las funciones tengan maximo 3 Parámetros
function sendEmail3(toWhom: string, from: string, body: string): boolean {
    return true;
}

// NO MUY BIEN
// Se recumienda que las funciones tengan maximo 3 Parámetros
function sendEmail4(toWhom: string, from: string, body: string, subject: string, apikey: string): boolean {
    return true;
}

// FORMA CORRECTA Y MEJOR
interface sendEmailOptions {
    toWhom: string;
    from: string;
    body: string;
    subject: string;
    apikey: string;
}

// MEJOR DESESTRUCTURARLO mejor lectura
function sendEmail5({ toWhom, from, body, subject, apikey }: sendEmailOptions): boolean {
    return true;
}