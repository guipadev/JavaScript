/**
 * Este archivo contiene una cantidad menor de código para establecer un texto
 * de derechos de autor en el elemento de pie de página.
 */

const addToFooter = () => {
  const footerElem = document.getElementById("footer-id");
  footerElem.innerText = `CopyRight ${new Date().getFullYear()} @tapasadhikary`;
};

addToFooter();
