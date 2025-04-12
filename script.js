const words = ["apple", "banana", "grape", "orange", "peach"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 5;

document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("restartGame").addEventListener("click", restartGame);
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    const guessInput = document.getElementById("guessInput").value.trim().toLowerCase();
    const messageElement = document.getElementById("message");
    const hintElement = document.getElementById("hint");
    const container = document.querySelector(".container");

    if (guessInput === "") {
        messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        return;
    }

    if (guessInput === secretWord) {
        messageElement.textContent = "Congratulations! You guessed the secret word!";
        container.style.backgroundColor = "green"; // Set container background to green on win
        document.getElementById("restartGame").style.display = "block";
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            messageElement.textContent = `Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`;
        } else {
            messageElement.textContent = `Game over! The secret word was '${secretWord}'.`;
            container.style.backgroundColor = "red"; // Set container background to red on loss
            document.getElementById("restartGame").style.display = "block";
        }
    }

    // Display hint
    if (attemptsLeft > 0) {
        hintElement.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'.`;
    } else {
        hintElement.textContent = ""; // Clear hint on game over
    }

    document.getElementById("guessInput").value = ""; // Clear input field
}

function restartGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = 5;
    document.getElementById("message").textContent = "Guess the secret word!";
    document.querySelector(".container").style.backgroundColor = "skyblue"; // Reset container background color
    document.getElementById("restartGame").style.display = "none";
    document.getElementById("hint").textContent = ""; // Clear hint
    document.getElementById("guessInput").value = ""; // Clear input field
}
    

