const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = cardBody.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkResult(guessingNumber.value);
});

const checkResult = (guessingNumber) => {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber == randomNumber) {
    resultText.innerHTML = `You have won 😀!`;
  } else {
    resultText.innerHTML = `You have lost 😔! The random number was ${randomNumber}`;
  }
};

const getRandomNumber = (limit) => {
  let randomNumber = Math.floor(Math.random() * limit) + 1;
  return randomNumber;
};
