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
        "Don't be so cold!",
        "Change of heart?",
        "Please?",
        "Pretty please?",
        "With a cherry on top?",
        "I'll be very sad :("
    ];
    let phraseIndex = 0;

    function moveButton() {
        // Get viewport dimensions
        const padding = 50; // Increased padding for safety
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

    // --- Background Hearts Logic ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts periodically
    setInterval(createHeart, 300);
});

function initCelebration() {
    // Simple confetti effect for yes page
    const colors = ['#ff4d6d', '#ff8fa3', '#fff0f3', '#ffccd5', '#590d22'];

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        // Animate fall using JS or rely on CSS. Let's use simple JS animation for variety
        let pos = -10;
        const speed = Math.random() * 3 + 2;
        const angle = Math.random() * 2 - 1; // drift left or right

        const fall = setInterval(() => {
            pos += speed;
            confetti.style.top = pos + 'px';
            confetti.style.left = (parseFloat(confetti.style.left) + angle) + 'px';

            if (pos > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 20);
    }

    setInterval(createConfetti, 100);
}
