/**
 * Una lista enlazada es una estructura de datos en la que cada elemento de la lista contiene
 * un enlace al elemento siguiente, esto permite a la lista tener una longitud dinámica
 * ya que se pueden agregar o quitar elementos en cualquier momento
 */

// Cada elemento de una lista enlazada es un nodo
// Aquí lo definimos como una clase de JS
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// La clase linked list tambien la representamos en una clase
class LinkedList {
    constructor() {
        this.head = null; // cabeza de la lista
        this.tail = null; // cola de la lista
    }

    // Para añadir elementos o nodos a la lista necesitamos un método
    append(value) {
        const newNode = new Node(value);
    }
}
