"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const ratingContainer = document.querySelector(".card");
  const thankyouContainer = document.querySelector(".thank-you-section");
  const submitButton = document.getElementById("submit");
  const ratingElement = document.getElementById("rating");
  const ratingButtons = document.querySelectorAll(".number");

  let selectedRating = 0;

  function handleRating(rating) {
    selectedRating = rating;

    ratingButtons.forEach((button) => {
      button.classList.remove("selected");
    });

    event.target.classList.add("selected");
  }

  function submitRating() {
    ratingContainer.style.display = 'none';

    thankyouContainer.style.display = 'block';

    ratingElement.textContent = selectedRating;
  }

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => handleRating(parseInt(button.textContent)));
  });

  submitButton.addEventListener("click", submitRating);
});
