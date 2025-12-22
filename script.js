// --- Your Customization Area ---
const BIRTHDAY = new Date('2026-03-01T00:00:00');
const NAME = "PranavMuthuvel";

// The messages for each day. The number is the days LEFT until the birthday.
// I've added some examples. You can add more for each day from 68 down to 1.
const MESSAGES = {
    69: {
        theme: "Panda Love",
        msg: "Are you a panda? Because you're cuddly, adorable, and I'd happily spend all day just watching you."
    },
    68: {
        theme: "Dark Comedy",
        msg: "I love you with all my heart. And my kidneys, and my liver. I'm just giving you all my organs at this point."
    },
    67: {
        theme: "Aesthetic",
        msg: "Thinking of you is like a quiet, cozy night with a good book and a cup of tea. Pure comfort."
    },
    66: {
        theme: "Romantic",
        msg: "If being handsome was a crime, you'd be serving a life sentence. And I'd be your willing accomplice."
    },
    65: {
        theme: "Panda Love",
        msg: "You're like a limited edition, one-of-a-kind panda. The rarest and most precious in the world."
    },
    64: {
        theme: "Dark Comedy",
        msg: "Our love is my favorite kind of chaos. It's like a beautiful, hilarious, perfectly organized mess."
    },
    63: {
        theme: "Aesthetic",
        msg: "Every day with you feels like a page from an aesthetic indie movie script. And I love being the co-star."
    },
    // --- Add your own messages here! ---
    // Example:
    // 62: {
    //     theme: "Your theme here",
    //     msg: "Your new message here."
    // },
};

// --- Main Website Logic ---
// (You don't need to edit below this line)

document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need to manipulate
    const birthdayCountdownSpan = document.getElementById('birthday-countdown');
    const messageDisplay = document.getElementById('message-display');
    const timerDisplay = document.getElementById('timer-display');
    const birthdayDisplay = document.getElementById('birthday-display');
    const loadingDisplay = document.getElementById('loading-display');
    const messageTheme = document.getElementById('message-theme');
    const messageText = document.getElementById('message-text');
    const countdownTimer = document.getElementById('countdown-timer');

    function hideAllDisplays() {
        messageDisplay.classList.add('hidden');
        timerDisplay.classList.add('hidden');
        birthdayDisplay.classList.add('hidden');
        loadingDisplay.classList.add('hidden');
    }

    function runCountdown() {
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diff = endOfDay - now;

        if (diff <= 0) {
            location.reload(); // Reload the page to get the new message
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');

        countdownTimer.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function init() {
        hideAllDisplays();

        const today = new Date();
        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const daysLeft = Math.ceil((BIRTHDAY - today) / (1000 * 60 * 60 * 24));
        
        birthdayCountdownSpan.textContent = daysLeft > 0 ? daysLeft : 0;

        if (daysLeft < 0) {
            birthdayDisplay.classList.remove('hidden');
            birthdayDisplay.innerHTML = `<h2>Hope you had a great birthday!</h2><p>Thinking of you always.</p>`;
            return;
        }

        if (daysLeft === 0) {
            birthdayDisplay.classList.remove('hidden');
            return;
        }

        // Check when the user last got a message
        const lastVisitDay = localStorage.getItem('lastVisitDay');
        const currentDay = today.toLocaleDateString(); // e.g., "12/22/2025"

        if (lastVisitDay === currentDay) {
            // User has already visited today, show countdown
            timerDisplay.classList.remove('hidden');
            runCountdown();
            setInterval(runCountdown, 1000);
        } else {
            // It's a new day, show the message
            const messageData = MESSAGES[daysLeft];
            if (messageData) {
                messageTheme.textContent = `~ ${messageData.theme} ~`;
                messageText.textContent = messageData.msg;
            } else {
                messageTheme.textContent = `~ A special note ~`;
                messageText.textContent = "Just a little something to make you smile. I'm thinking of you!";
            }
            messageDisplay.classList.remove('hidden');

            // Set the local storage so they have to wait for the next day
            localStorage.setItem('lastVisitDay', currentDay);
        }
    }

    // Initialize the page
    init();
});
