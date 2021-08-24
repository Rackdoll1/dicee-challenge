const resultMessage = document.querySelector("h1");
const images = document.querySelectorAll("img");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage1 = `images/dice${randomNumber1}.png`;
const randomDiceImage2 = `images/dice${randomNumber2}.png`;

if(randomNumber1 === randomNumber2) {
  resultMessage.textContent = "Draw!";
} else if(randomNumber1 > randomNumber2) {
  resultMessage.textContent = "🚩 Player 1 wins!";
} else {
  resultMessage.textContent = "Player 2 wins! 🚩";
}

images[0].setAttribute("src", randomDiceImage1);
images[1].setAttribute("src", randomDiceImage2);
