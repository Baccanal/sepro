const cButton = document.querySelector("#confettiBtn");
const canvas = document.querySelector("#confettiCanvas");
const jsConfetti = new JSConfetti();

cButton.addEventListener("click", () => {
  jsConfetti
    .addConfetti({
      emojis: ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️", "⭐️"],
    })
    .then(() => jsConfetti.addConfetti());
});
