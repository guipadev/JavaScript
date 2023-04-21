const userMessageInputForm = document.getElementById("userMessageInputForm");

const messageUlElement = document.getElementById("messageUl");

userMessageInputForm.addEventListener("submit", event => {
    event.preventDefault(); //cancelar evento
    //Utizamos formdata en vez de query selector
    let formDataElement = new FormData(event.target);
    let userInputValue = formDataElement.get("inputMessage");
    let messageLi = createMessageElement(userInputValue);
    messageUlElement.appendChild(messageLi);
    clearInput();
});

function createMessageElement(message) {
    let messageLi = document.createElement("li");
    messageLi, className = "user-message";
    let messageTextElement = document.createTextNode(message);
    messageLi.appendChild(messageTextElement);
    return messageLi;
}

function clearInput() {
    document.getElementById("inputMessage").value = "";
}

const upperCaseButton = document.getElementById("upperCaseButton");

// upperCaseButton.addEventListener("click", () => {
//     messageToUpperCaseWithCapitalize();
// });

// function textToCapitalize(text) {
//     wordsText = text.trim().split(" ");
//     wordsText = wordsText.map(word => upperFirstChar(word));
//     return wordsText.join(" ");
// }

// function upperFirstChar(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// function messageToUpperCaseWithCapitalize() {
//     let allUserMessage = document.getElementsByClassName("user-message");
//     for (let index = 0; index < allUserMessage.length; index++) {
//         let textMessage = allUserMessage[index].textContent;
//         allUserMessage[index].textContent = textToCapitalize(textMessage);
//     }
// };