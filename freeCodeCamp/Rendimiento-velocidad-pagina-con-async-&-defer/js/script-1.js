/**
 * Este archivo contiene el código JavaScript responsable de las actualizaciones de DOM.
 * El init() método selecciona participantes aleatorios y valores de obsequios para
 * representarlos en los nodos DOM.
 * Se llama al mismo método init al hacer clic en el Play botón.
 */

const gifts = ["hoodie", "moon-light", "perfumes", "watch", "studio-light"];

const participants = ["Alex", "Bob", "Carl", "Dell", "Emle"];

const getRandomElem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const init = () => {
  const giftElem = document.getElementById("gift-id");
  const childElem = document.getElementById("child-id");
  const santaElem = document.getElementById("santa-id");

  const child = getRandomElem(participants);
  const santa = getRandomElem(participants.filter((elem) => elem !== child));
  const gift = getRandomElem(gifts);

  console.log(`${santa} to give ${gift} to ${child}`);

  childElem.innerText = "";
  childElem.innerText = child;
  santaElem.innerText = "";
  santaElem.innerText = santa;

  giftElem.innerHTML = "";
  const img = document.createElement("img");
  img.src = `./gift-images/${gift}.png`;
  img.alt = gift;
  img.width = "300";
  img.height = "300";
  giftElem.appendChild(img);
};

init();
