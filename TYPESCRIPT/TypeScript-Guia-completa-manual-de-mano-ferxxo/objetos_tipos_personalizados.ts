type Heroe = {
    nombre:string,
    edad:number,
    poderes:any[],
    getNombre:() => string
};

let wonderWoman:Heroe = {
    nombre: "Leidy Kun",
    edad: 129,
    poderes: ["Vuela", "Super fuerza", "Rayo puño"],
    getNombre() {
        return this.nombre;
    }
};

let halcon:Heroe = {
    nombre: "Oliver Smith",
    edad: 29,
    poderes: ["Vuela", "Mazo fuerza"],
    getNombre() {
        return this.nombre;
    }
};