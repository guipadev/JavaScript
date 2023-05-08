import React, { useState } from "react";

function About() {
  const [textoAleatorio, setTextoAleatorio] = useState("");
  const [textoInput, setTextoInput] = useState("");
  const [textoMostrado, setTextoMostrado] = useState("");

  const generarTextoAleatorio = () => {
    const listaTextos = ["It's on!", "It's rolling!", "I'm the about page!"];
    const texto = listaTextos[Math.floor(Math.random() * listaTextos.length)];
    setTextoAleatorio(texto);
  };

  const handleChange = (event) => {
    setTextoInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextoMostrado(textoInput);
    setTextoInput("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button
            onClick={generarTextoAleatorio}
            type="button"
            className="custom-btn btn-16"
          >
            Switch State
          </button>
          <p>{textoAleatorio}</p>
        </div>
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <p>Test input</p>
            <input type="text" value={textoInput} onChange={handleChange} />
            <div>
              <button type="submit" className="custom-btn btn-16">
                Print input
              </button>
            </div>
          </form>

          <p>{textoMostrado}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
