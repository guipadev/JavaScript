/**
 * Este código es vulnerable, debido a la vulnerabilidad llamada secuencia de comandos
 * entre sitios
 * Se produce cuando un atacante malicioso intenta obtener un código para ejecutarlo
 * en su máquina a través de su navegador
 * Intenta obtener un script para ejecutarlo entre sitios
 */

export default function Root() {
  return (
    <Router>
      {" "}
      <QueryParamsDemo />{" "}
    </Router>
  );
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * En este ejemplo en particular, tiene que ver con los parámetros de consulta
 * Ya que podriamos ejecutar script desde el navegador y obtener control sobre la maquina
 * https://example.com/settubgs?redirect=javascript://doSomethingBad()
 */

// https://example.com/settubgs?redirect=foo

function QueryParamsDemo() {
  let query = useQuery();

  /**
   * SOLUCIÓN
   * Desinfecta la URL o validarla para asegurar no encontrar este ataque de protocolo JS
   */
  function validateURL(url) {
    const userSuppliedUrl = new URL(url);

    if (userSuppliedUrl.protocol === "https:") {
      return url;
    }

    return "/";
  }

  return (
    <div>
      <h2>Return Home</h2>
      <a href={validateURL(query.get("redirect"))}>Click to go home</a>
    </div>
  );
}
