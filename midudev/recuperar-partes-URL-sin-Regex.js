/**
 * No usar Regex para recuperar las partes de una URL
 *
 * Ahora se puede usar "new URL" para extraer todo lo que se necesita:
 *
 * hostname: El dominio sin protocolo
 * pathname: La ruta de la URL
 * href: la URL completa
 * origin: El protocolo y dominio
 * search: Los parámetros de la URL
 * hash: EL hash de la URL
 *
 * Esta URL Api tiene un soporte de 98% en navegadores.
 * Solo se necesita un polyfill si todavia soporta IE 11
 */

const url = new URL("https://midu.dev/login?token=123&redirect=home#title");

url.hostname; // midu.dev
url.pathname; // /login
url.href; // https://midu.dev/login?token=123&redirect=home#title
url.origin; // https://midu.dev
url.search; // ?token=123&redirect=home
url.hash; // #title
