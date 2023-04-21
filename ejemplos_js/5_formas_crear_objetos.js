//#1 Metodo Constructor
const objetico = new Object();

//#2 Object Literal
const miObj = {
    title: "aprendiendo JS",
    pages: 100
};

//#3 Función Constructora
function ElObjeto (nombre) {
    this.nombre = nombre;
};

const persona = new ElObjeto('Manuel');                                                 


//#4 Classe (ES6+)
class MiObjeto {
    constructor(name) {
        this.name = name;
    }
}

const MiObjeto = new MiObjeto("Carlos");

//#5 Patrón Singleton
const sign1 = new (function Singleton() {
    this.name = 'Jose';
})();