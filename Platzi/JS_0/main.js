let traerPais = async (name) => {

    const respuesta = await fetch(`https://api.nationalize.io?name=${name}`)

    if(!respuesta) {
        let mensajeAlerta = "404 no encontré nada";
        alert(mensajeAlerta);
        throw new Error(mensajeAlerta);
    }

    const nombre = respuesta.json();

    return nombre;
}

const mostrarNombre = (nombre) => {
    document.getElementById("nombre").innerHTML = nombre.name.toUpperCase();
    document.getElementById("mensaje").innerHTML = nombre.country[0].country_id;
}



const handleSubmit = (event) => {
    event.preventDefault(); // Evita que se envíe el formulario
    const name = document.getElementById("name").value;
    traerPais(name).then(mostrarNombre);
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("name").value = "";
  }

