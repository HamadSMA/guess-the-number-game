"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".guess").value = 33;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  }
});
