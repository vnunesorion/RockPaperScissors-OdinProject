let computerScore = 0;
let playerScore = 0;

function getComputerChoices() {
    const choices = ["pedra", "papel", "tesoura"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoices(playerChoice) {
    const computerChoice = getComputerChoices();
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Empate";
    } else if (
        (playerChoice === "pedra" && computerChoice === "tesoura") || 
        (playerChoice === "papel" && computerChoice === "pedra") || 
        (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
        result = "Você ganhou!";
        playerScore++;
    } else {
        result = "Você perdeu!";
        computerScore++;
    }

    document.getElementById("resultado").innerText = 
        `Você escolheu ${playerChoice}, Computador escolheu ${computerChoice}. ${result}`;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

document.getElementById("pedra").addEventListener("click", () => getHumanChoices("pedra"));
document.getElementById("papel").addEventListener("click", () => getHumanChoices("papel"));
document.getElementById("tesoura").addEventListener("click", () => getHumanChoices("tesoura"));
