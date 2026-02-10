// Wacht tot de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is geladen! 🚀');

    // Selecteer de magische knop
    const magicButton = document.getElementById('magicButton');

    // Voeg een click event toe
    magicButton.addEventListener('click', () => {
        // Verander de achtergrond kleur
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;

        // Toon een melding
        alert('🎉 Achtergrond kleur veranderd!');
    });

    // Smooth scroll voor navigatie links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
