// Wacht tot de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    console.log('Valentine website is geladen! 💕');

    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const response = document.getElementById('response');
    const question = document.querySelector('.question');

    let noClickCount = 0;

    // Als ze op "Ja" klikken
    yesButton.addEventListener('click', () => {
        // Verberg de knoppen
        yesButton.style.display = 'none';
        noButton.style.display = 'none';

        // Toon een lief bericht
        question.textContent = 'Yay! 🎉💕';
        response.textContent = 'Ik wist dat je ja zou zeggen! ❤️';
        response.classList.remove('hidden');
        response.style.color = '#f5576c';

        // Voeg confetti effect toe met emojis
        createHearts();
    });

    // Als ze op "Nee" klikken - maak het moeilijker!
    noButton.addEventListener('click', () => {
        noClickCount++;

        if (noClickCount === 1) {
            question.textContent = 'Weet je het zeker? 🥺';
            noButton.textContent = 'Ja, zeker';
            // Maak "Ja" knop groter
            yesButton.style.fontSize = '1.5rem';
            yesButton.style.padding = '1.5rem 3rem';
        } else if (noClickCount === 2) {
            question.textContent = 'Alsjeblieft? 🥹💕';
            noButton.textContent = 'Echt niet';
            // Maak "Ja" knop nog groter
            yesButton.style.fontSize = '2rem';
            yesButton.style.padding = '2rem 4rem';
            // Maak "Nee" knop kleiner
            noButton.style.fontSize = '0.9rem';
            noButton.style.padding = '0.8rem 1.5rem';
        } else if (noClickCount === 3) {
            question.textContent = 'Laatste kans! 💔';
            noButton.textContent = 'Nee...';
            // Maak "Ja" knop heel groot
            yesButton.style.fontSize = '2.5rem';
            yesButton.style.padding = '2.5rem 5rem';
            // Maak "Nee" knop heel klein
            noButton.style.fontSize = '0.7rem';
            noButton.style.padding = '0.5rem 1rem';
        } else {
            // Na 3 keer "Nee" - verberg de "Nee" knop
            noButton.style.display = 'none';
            question.textContent = 'Dan rest er maar één optie... 😊';
            yesButton.style.fontSize = '3rem';
            yesButton.style.padding = '3rem 6rem';
        }
    });

    // Functie om hartjes te laten vallen
    function createHearts() {
        const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-50px';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.opacity = '1';
                heart.style.pointerEvents = 'none';
                heart.style.transition = 'all 3s ease-in';
                heart.style.zIndex = '1000';

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.style.top = '100vh';
                    heart.style.opacity = '0';
                }, 100);

                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }
});
