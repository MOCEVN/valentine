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

    question.textContent = "YUUUUURRRRR";
    response.textContent = "LY ❤️";
    response.classList.remove("hidden");

    createHearts();
  });

  // No button click - funny responses
  noButton.addEventListener("click", () => {
    noClickCount++;

    // Check if mobile/tablet
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;

    if (noClickCount === 1) {
      question.textContent = "Really? Think carefully... 🤔";
      noButton.textContent = "Still no";
      if (!isMobile) {
        yesButton.style.padding = "1.8rem 4.5rem";
        yesButton.style.fontSize = "1.8rem";
      }
    } else if (noClickCount === 2) {
      question.textContent = "Hmm, that's suspicious 👀, DEADASS???";
      noButton.textContent = "Nope";
      if (!isMobile) {
        yesButton.style.padding = "2.2rem 5.5rem";
        yesButton.style.fontSize = "2.2rem";
        noButton.style.padding = "1.2rem 2.5rem";
        noButton.style.fontSize = "1.2rem";
      } else if (!isSmallMobile) {
        noButton.style.padding = "1rem 2rem";
        noButton.style.fontSize = "1rem";
      }
    } else if (noClickCount === 3) {
      question.textContent = "Okay this is getting awkward... 🥷🏾";
      noButton.textContent = "Still nope";
      if (!isMobile) {
        yesButton.style.padding = "2.8rem 6.5rem";
        yesButton.style.fontSize = "2.6rem";
        noButton.style.padding = "0.8rem 1.8rem";
        noButton.style.fontSize = "0.9rem";
      } else if (!isSmallMobile) {
        noButton.style.padding = "0.8rem 1.5rem";
        noButton.style.fontSize = "0.85rem";
      } else {
        noButton.style.padding = "0.7rem 1rem";
        noButton.style.fontSize = "0.75rem";
      }
    } else if (noClickCount === 4) {
      question.textContent = "I don't think you understand how this works";
      noButton.textContent = "No way";
      if (!isMobile) {
        yesButton.style.padding = "3.5rem 7.5rem";
        yesButton.style.fontSize = "3rem";
        noButton.style.padding = "0.5rem 1.2rem";
        noButton.style.fontSize = "0.7rem";
      } else if (!isSmallMobile) {
        noButton.style.padding = "0.6rem 1rem";
        noButton.style.fontSize = "0.7rem";
      } else {
        noButton.style.padding = "0.5rem 0.8rem";
        noButton.style.fontSize = "0.65rem";
      }
    } else {
      // After 4 "no" clicks - remove the no button
      noButton.style.display = "none";
      question.textContent = "Perfect! Only one button left 🥰";
      if (!isMobile) {
        yesButton.style.padding = "4rem 9rem";
        yesButton.style.fontSize = "3.5rem";
      }
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
