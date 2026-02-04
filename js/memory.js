const cards = document.querySelectorAll("div.memory-card");
cards.forEach((card) => card.addEventListener("click", flipCard));

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let count = 0;
let clicks = 0;

function flipCard() {
  clicks++;
  document.getElementById("clickScore").textContent = clicks;
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    //We are at the first card
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  //We are at the second card
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.pic === secondCard.dataset.pic;
  isMatch ? (disableCards(), matchAlert()) : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function matchAlert() {
  if (count < 9) {
    count++;

    setTimeout(() => {
      alert(`You got a match. Now you have ${10 - count} more.`);
    }, 600);
  } else {
    setTimeout(() => {
      alert(`CONGRATULATIONS YOU DID IT in ${clicks} clicks !!`);
    }, 600);
  }
}

function unFlipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });
})();
