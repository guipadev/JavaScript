import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import About from "./About";

/**
 * La renderfunción toma un componente React como parámetro y lo renderizará para que podamos probarlo.
 *
 * screen es un objeto que viene con muchas consultas que podemos usar para probar la interfaz
 * de usuario directamente, omitiendo los detalles de implementación y enfocándonos en lo que
 * el usuario realmente verá.
 *
 * Luego importamos nuestro Aboutcomponente:import About from './About'
 *
 * Usamos las funciones describe y test Jest mencionadas anteriormente.
 *
 * Renderizamos el Aboutcomponente:render( <About/> )
 *
 * Usamos la expect función Jest, y como parámetro usamos el screen objeto proporcionado por
 * la biblioteca Testing.
 * Usamos su getByText consulta, que escanea el componente React en busca del texto que pasamos
 * como parámetro.
 *
 * Para finalizar, usamos el .toBeInTheDocument() comparador de la biblioteca Testing,
 * que solo verifica si se está procesando el resultado de la consulta anterior.
 *
 * Luego podemos probar que el botón de alternar "Cambiar estado" funciona correctamente.
 */

describe("About", () => {
  test("About renders correctly", () => {
    render(<About />);
    expect(
      screen.getByText((content, node) => {
        const hasText = (node) => node.textContent === "About Page";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });

  test("About renders correctly", () => {
    render(<About />);
    expect(screen.getByText("I'm the about page!")).toBeInTheDocument();
  });

  test("Switch state works correctly", async () => {
    render(<About />);

    expect(screen.getByText("It's on!")).toBeInTheDocument();
    //Vea que importamos una utilidad adicional llamada userEvent.
    //Este es un objeto que contiene muchos métodos que podemos usar para simular eventos
    //activados por el usuario, como clics, desplazamientos, escritura en una entrada, etc.
    //Primero verificamos que se represente la cadena predeterminada:
    //expect(screen.getByText("It's on!")).toBeInTheDocument()
    //Luego simulamos un clic y comprobamos que la cadena cambia en la pantalla:
    userEvent.click(screen.getByText("Switch state"));
    expect(screen.getByText("It's rolling!")).toBeInTheDocument();

    //Y por último, simulamos otro clic y comprobamos que la cadena vuelve a su valor predeterminado

    userEvent.click(screen.getByText("Switch state"));
    expect(screen.getByText("It's on!")).toBeInTheDocument();
  });

  /**
   * Otra prueba para verificar que la entrada de texto y su alternancia funcionen correctamente
   *
   * Nuevamente usamos userEvent para simular el texto que se escribe en nuestro elemento de entrada:
   * userEvent.type(screen.getByTestId("testInput"), "Testing the test")
   */

  test("Input works correctly", async () => {
    render(<About />);

    userEvent.type(screen.getByTestId("testInput"), "Testing the test");

    // simulamos un clic en el botón de alternar y verificamos que el texto de entrada esté en el documento:
    userEvent.click(screen.getByText("Print input"));
    expect(screen.getByText("Testing the test")).toBeInTheDocument();

    // cerramos simulando otro clic y comprobando que la prueba ya no está presente:
    userEvent.click(screen.getByText("Print input"));
    expect(screen.queryByText("Testing the test")).not.toBeInTheDocument();
  });
});
