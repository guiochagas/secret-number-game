let listOfNumbers = [];
let tentativas = 1;

function textOnPage(tag, texto) {
    tag = document.querySelector(tag);
    tag.innerHTML = texto;
}

function initialMessage() {
    textOnPage("h1", "The Secret Number");
    textOnPage("p", "Choose a number between 1 to 10");
}

function secretNumberGenerator() {
    let chosenNumber = parseInt(Math.random() * 4 + 1);
    if (listOfNumbers.includes(chosenNumber)) {
        return secretNumberGenerator();
    } else {
        listOfNumbers.push(chosenNumber);
        console.log(listOfNumbers)
        return chosenNumber;
    }
}

function clearField() {
    userTry = document.querySelector("input");
    userTry.value = "";
}

function verifyTry() {
    let userTry = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem = `Você acertou com ${tentativas} ${palavraTentativa}`;

    if (userTry == secretNumber) {
        textOnPage("h1", "Parabéns");
        textOnPage("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (userTry > secretNumber) {
            textOnPage("p", `O número é menor que ${userTry}`);
        } else {
            textOnPage("p", `O número é maior que ${userTry}`);
        }
    tentativas++;
    clearField();
    }
}

function resetGame() {
    secretNumber = secretNumberGenerator()
    clearField();
    tentativas = 1   
    initialMessage();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

// INITIALIZING GAME

initialMessage()

secretNumber = secretNumberGenerator();
console.log(secretNumber);
console.log(listOfNumbers)