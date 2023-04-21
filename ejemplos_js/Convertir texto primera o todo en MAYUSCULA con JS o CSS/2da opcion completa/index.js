const firstText = document.querySelector("p");
const secondText = document.querySelector("p:nth-child(2)");
const listMessage = document.querySelector("ul");
const form = document.querySelector("form");
const convertTextBtn = document.getElementById("convertText");
const input = document.querySelector("input");

const firstUpperCase = text => {
  return text
    .split(" ")
    .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
};

const addElement = element => {
  const li = document.createElement("li");
  li.innerHTML = `${element}`;
  listMessage.appendChild(li);
};

const saveMessage = e => {
  e.preventDefault();
  addElement(input.value);
  form.reset();
};

const convertList = () => {
  const list = listMessage.children;
  Object.values(list).forEach(item => {
    listMessage.removeChild(item);
    addElement(firstUpperCase(item.innerHTML.trim()));
  });
};

firstText.innerHTML = firstText.innerHTML.trim().toUpperCase();
secondText.innerHTML = firstUpperCase(secondText.innerHTML.trim());
form.addEventListener("submit", saveMessage);
convertTextBtn.addEventListener("click", convertList);
