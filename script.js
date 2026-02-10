document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const response = document.getElementById("response");
  const question = document.querySelector(".question");

  let noClickCount = 0;

  // Yes button click
  yesButton.addEventListener("click", () => {
    yesButton.style.display = "none";
    noButton.style.display = "none";

    question.textContent = "Yay! 🎉";
    response.textContent = "I knew you'd say yes! ❤️";
    response.classList.remove("hidden");

    createHearts();
  });

  // No button click - funny responses
  noButton.addEventListener("click", () => {
    noClickCount++;

    if (noClickCount === 1) {
      question.textContent = "Are you sure about that? 🤨";
      yesButton.style.padding = "2.5rem 4rem";
      yesButton.style.fontSize = "1.8rem";
    } else if (noClickCount === 2) {
      question.textContent = "Think again... 🤔";
      yesButton.style.padding = "3rem 5rem";
      yesButton.style.fontSize = "2.2rem";
      noButton.style.padding = "1.5rem 2rem";
      noButton.style.fontSize = "1.2rem";
    } else if (noClickCount === 3) {
      question.textContent = "Wrong answer. Try again. 😏";
      yesButton.style.padding = "3.5rem 6rem";
      yesButton.style.fontSize = "2.5rem";
      noButton.style.padding = "1rem 1.5rem";
      noButton.style.fontSize = "1rem";
    } else if (noClickCount === 4) {
      question.textContent = "The Yes button is right there... 👉";
      yesButton.style.padding = "4rem 7rem";
      yesButton.style.fontSize = "3rem";
      noButton.style.padding = "0.5rem 1rem";
      noButton.style.fontSize = "0.8rem";
    } else {
      // After 4 "no" clicks - remove the no button
      noButton.style.display = "none";
      question.textContent = "There's only one option now 😊";
      yesButton.style.padding = "5rem 8rem";
      yesButton.style.fontSize = "3.5rem";
    }
  });

  // Hearts animation
  function createHearts() {
    const hearts = ["❤️", "💕", "💖", "💗", "💝", "💓"];

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "-50px";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";
        heart.style.opacity = "1";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 3s ease-in";
        heart.style.zIndex = "1000";

        document.body.appendChild(heart);

        setTimeout(() => {
          heart.style.top = "100vh";
          heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
          heart.remove();
        }, 3000);
      }, i * 100);
    }
  }
});
