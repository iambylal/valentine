document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');
    const body = document.body;

    // Confetti / Celebration effect check
    if (document.body.classList.contains('celebration')) {
        initCelebration();
        return; // Don't run the 'No' logic on the yes page
    }

    // --- No Button Logic ---
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "I'm going to cry...",
        "Why are you doing this?",
        "You for real?",
        "Have a heart!",
        "Don't be so cold?",
        "Change of heart?",
        "Please?",
        "Pretty please?",
        "With a cherry on top?",
        "I'll be very sad :("
    ];
    let phraseIndex = 0;

    function moveButton() {
        // Get viewport dimensions
        const padding = 20; // Reduced padding to make it easier to find a spot on mobile
        const maxX = window.innerWidth - noButton.offsetWidth - padding;
        const maxY = window.innerHeight - noButton.offsetHeight - padding;

        if (maxX < 0 || maxY < 0) {
            // Viewport too small, just center it or keep it safe
            return;
        }

        // Generate random coordinates within safe bounds
        const randomX = Math.random() * maxX + (padding / 2);
        const randomY = Math.random() * maxY + (padding / 2);

        // Apply new position
        noButton.style.position = 'fixed'; // Ensure it can move anywhere
        noButton.style.zIndex = '9999'; // Ensure it stays on top!
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Change text randomly or sequentially
        phraseIndex = (phraseIndex + 1) % phrases.length;
        noButton.innerText = phrases[phraseIndex];
    }

    // Desktop hover
    noButton.addEventListener('mouseover', moveButton);

    // Mobile tap (click) - since hover isn't reliable on touch
    noButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent accidental clicks if we want to be strict, 
        // but allowing click to trigger move works well for "tap"
        moveButton();
    });

    // --- Background Hearts & Flowers Rain Logic ---
    const bgEmojis = ['❤️', '🌹', '💖', '🌷', '🌸', '💝', '💕'];

    function createRainingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = bgEmojis[Math.floor(Math.random() * bgEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.fontSize = Math.random() * 15 + 15 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.color = '#ff4d6d';
        body.appendChild(heart);

        // Animate falling
        let pos = -50;
        let rotation = Math.random() * 360;
        const speed = Math.random() * 2 + 2;
        const rotationSpeed = Math.random() * 4 - 2;

        const fall = setInterval(() => {
            pos += speed;
            rotation += rotationSpeed;
            heart.style.top = pos + 'px';
            heart.style.transform = `rotate(${rotation}deg)`;

            if (pos > window.innerHeight) {
                clearInterval(fall);
                heart.remove();
            }
        }, 20);
    }

    // Create raining hearts constantly
    setInterval(() => {
        createRainingHeart();
        createRainingHeart();
        createRainingHeart();
    }, 100);
});

function initCelebration() {
    // Hearts & Roses Rain for yes page!
    const emojis = ['❤️', '🌹', '💖', '💕', '💝', '🌷'];

    function createRainingEmoji() {
        const emoji = document.createElement('div');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = '-50px';
        emoji.style.fontSize = Math.random() * 20 + 20 + 'px';
        emoji.style.opacity = Math.random() * 0.6 + 0.4;
        emoji.style.zIndex = '1000';
        emoji.style.pointerEvents = 'none';

        document.body.appendChild(emoji);

        // Animate falling
        let pos = -50;
        let rotation = Math.random() * 360;
        const speed = Math.random() * 2 + 2;
        const rotationSpeed = Math.random() * 5 - 2;
        const drift = Math.random() * 2 - 1;

        const fall = setInterval(() => {
            pos += speed;
            rotation += rotationSpeed;
            emoji.style.top = pos + 'px';
            emoji.style.left = (parseFloat(emoji.style.left) + drift) + 'px';
            emoji.style.transform = `rotate(${rotation}deg)`;

            if (pos > window.innerHeight) {
                clearInterval(fall);
                emoji.remove();
            }
        }, 20);
    }

    // Heavy rain of hearts and roses
    setInterval(() => {
        createRainingEmoji();
        createRainingEmoji();
        createRainingEmoji();
        createRainingEmoji();
    }, 50);
}
