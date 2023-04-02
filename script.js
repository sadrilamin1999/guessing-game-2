// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = cardBody.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  attempts++;
  if (attempts == 5) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    let number = Number(guessingNumber.value);
    checkResult(number);
    remainingAttempts.innerHTML = `Remaining attempts: ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});

const checkResult = (guessingNumber) => {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber == randomNumber) {
    resultText.innerHTML = `You have won 😀!`;
    totalWons++;
  } else {
    resultText.innerHTML = `You have lost 😔! The random number was ${randomNumber}`;
    totalLosts++;
  }
  lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
  cardBody.appendChild(lostWonMessage);
};

const getRandomNumber = (limit) => {
  let randomNumber = Math.floor(Math.random() * limit) + 1;
  return randomNumber;
};
