let userChoice = "";
let aiChoice = "";
let winner = "";

// To Display Rules of the game
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('rulesModal');
    const closeModal = document.getElementById('closeModal');

    modal.classList.add('show');

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});

// Generating random choice from the system 
function randomGen() {
    const random = Math.random() * 3;

    if (random > 0 && random <= 1) {
        aiChoice = "Ball";
    } else if (random > 1 && random <= 2) {
        aiChoice = "Bat";
    } else {
        aiChoice = "Wicket";
    }
}

function handleButtonClick(value) {
  document.querySelector(".usermsg").innerHTML = `Your choice: <b>${value}</b>`;
  
  // Displaying computer choice on screen
  randomGen();
  document.querySelector(".compmsg").innerHTML = `Computer choice: <b>${aiChoice}</b>`;
  
  // Deciding winner based on the game rules
  if (value === aiChoice) {
  winner = "Draw Match 🏁";
  } else if ((value === "Bat" && aiChoice === "Ball") ||
  (value === "Ball" && aiChoice === "Wicket") ||
  (value === "Wicket" && aiChoice === "Bat")) {
  winner = "Congrats, You Won 🎉";
  } else {
  winner = "Computer Won! 💻";
  }
  
  document.querySelector(".winnermsg").innerHTML = winner;
  }
  
  document.querySelectorAll(".btn-group button").forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.textContent.trim()));
  });
  