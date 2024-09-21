const buttonEl = document.querySelector(".roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
const diceSoundEl = document.getElementById("dice-sound");

// Array to store the history of dice roll
let historyList = [];

// Function to randomly generate a number b/w 1 to 6
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = historyList.length - 1; i >= 0; i--) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

// Function to update the 'Dice Face' on the screen based on the rolled results
function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

// Function for Dice rolling simple animation (using css)
buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");

  // To play the dice roll sound
  diceSoundEl.play();

  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
