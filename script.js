// --- Your Customization Area ---
const BIRTHDAY = new Date('2026-03-01T00:00:00');
const NAME = "PranavMuthuvel";

// The messages for each day. The number is the days LEFT until the birthday.
// I've added some examples. You can add more for each day from 68 down to 1.
const MESSAGES = {
    69: { theme: "Panda Love", msg: "Are you a panda? Because you're cuddly, adorable, and I'd happily spend all day just watching you." },
    68: { theme: "Dark Comedy", msg: "I love you with all my heart. And my kidneys, and my liver. I'm just giving you all my organs at this point." },
    67: { theme: "Aesthetic", msg: "Thinking of you is like a quiet, cozy night with a good book and a cup of tea. Pure comfort." },
    66: { theme: "Romantic", msg: "If being handsome was a crime, you'd be serving a life sentence. And I'd be your willing accomplice." },
    65: { theme: "Panda Love", msg: "You're like a limited edition, one-of-a-kind panda. The rarest and most precious in the world." },
    64: { theme: "Dark Comedy", msg: "Our love is my favorite kind of chaos. It's like a beautiful, hilarious, perfectly organized mess." },
    63: { theme: "Aesthetic", msg: "You feel like a nostalgic song that I never want to end." },
    62: { theme: "Romantic", msg: "I must have done something right in a past life to deserve someone as amazing as you in this one." },
    61: { theme: "Panda Love", msg: "If you were a panda, you'd be the one who's figured out how to do cool somersaults and gets all the best bamboo." },
    60: { theme: "Dark Comedy", msg: "I love you enough to share my fries. But let's not push it, okay?" },
    59: { theme: "Aesthetic", msg: "Our little world feels like a scene from a Wes Anderson film. Perfectly quirky and beautifully ours." },
    58: { theme: "Romantic", msg: "Every day with you is my new favorite day." },
    57: { theme: "Panda Love", msg: "Pandas are lazy, and so am I. We were made for each other." },
    56: { theme: "Dark Comedy", msg: "They say love is blind. Good, then you won't notice the mess I made in the kitchen." },
    55: { theme: "Aesthetic", msg: "You're the golden hour of my life's day." },
    54: { theme: "Romantic", msg: "I didn't believe in soulmates until I met you." },
    53: { theme: "Panda Love", msg: "Just like a panda, you have a special place in my heart that's reserved just for you (and bamboo)." },
    52: { theme: "Dark Comedy", msg: "I'm not saying I'm obsessed with you, but I'd definitely notice if you went missing. Eventually." },
    51: { theme: "Aesthetic", msg: "With you, even the most mundane moments feel cinematic." },
    50: { theme: "Romantic", msg: "Halfway to 100, and my love for you is already at 100%." },
    49: { theme: "Panda Love", msg: "Are you a panda? Because you're black, white, and Asian. And I love you." },
    48: { theme: "Dark Comedy", msg: "I love you more than coffee, but please don't make me prove it." },
    47: { theme: "Aesthetic", msg: "You're like the perfect vintage find: timeless, classic, and all mine." },
    46: { theme: "Romantic", msg: "You are my sunshine on a cloudy day." },
    45: { theme: "Panda Love", msg: "My love for you is like a panda's appetite for bamboo: endless." },
    44: { theme: "Dark Comedy", msg: "I'd totally hide a body for you. No questions asked. Well, maybe a few." },
    43: { theme: "Aesthetic", msg: "You're the kind of person they write poetry about." },
    42: { theme: "Romantic", msg: "You're the answer to a question I didn't even know I was asking." },
    41: { theme: "Panda Love", msg: "If we were pandas, I'd share my bamboo with you." },
    40: { theme: "Dark Comedy", msg: "You're the only person I'd be okay with being stuck in a zombie apocalypse with." },
    39: { theme: "Aesthetic", msg: "Our love story is my favorite. It's like a cult classic film." },
    38: { theme: "Romantic", msg: "My heart does a little happy dance every time I see you." },
    37: { theme: "Panda Love", msg: "I love you more than a panda loves naps. And that's a lot." },
    36: { theme: "Dark Comedy", msg: "I'm not a photographer, but I can definitely picture us together. For a ridiculously long time." },
    35: { theme: "Aesthetic", msg: "You have a smile that could launch a thousand ships. Or at least, my heart." },
    34: { theme: "Romantic", msg: "You make my world a better place, just by being in it." },
    33: { theme: "Panda Love", msg: "You're more precious than a baby panda." },
    32: { theme: "Dark Comedy", msg: "I love you even when I'm hangry. That's how you know it's real." },
    31: { theme: "Aesthetic", msg: "You're my favorite notification." },
    30: { theme: "Romantic", msg: "Just one month until your birthday! My love for you grows every day." },
    29: { theme: "Panda Love", msg: "Let's be like pandas and just chill and eat snacks all day." },
    28: { theme: "Dark Comedy", msg: "Are you my appendix? Because I have a funny feeling in my stomach that makes me want to take you out." },
    27: { theme: "Aesthetic", msg: "You're the calm in my storm and the storm in my calm." },
    26: { theme: "Romantic", msg: "I fall for you more and more each day." },
    25: { theme: "Panda Love", msg: "You're the panda to my bamboo." },
    24: { theme: "Dark Comedy", msg: "I would love you even if you were a worm. I'd put you in a little jar and feed you dirt." },
    23: { theme: "Aesthetic", msg: "Life with you is like a perfectly curated playlist." },
    22: { theme: "Romantic", msg: "You are the best thing that's ever happened to me." },
    21: { theme: "Panda Love", msg: "I want to roll around with you like a happy panda." },
    20: { theme: "Dark Comedy", msg: "Sometimes I look at you and think, 'Wow, you're so lucky to have me.'" },
    19: { theme: "Aesthetic", msg: "You're the subject of all my best daydreams." },
    18: { theme: "Romantic", msg: "My love for you is a journey, starting at forever and ending at never." },
    17: { theme: "Panda Love", msg: "Let's just be pandas. No work, just vibes." },
    16: { theme: "Dark Comedy", msg: "I love you so much, I'd even assemble IKEA furniture with you." },
    15: { theme: "Aesthetic", msg: "You are art." },
    14: { theme: "Romantic", msg: "Two weeks until your birthday! I'm so excited to celebrate you." },
    13: { theme: "Panda Love", msg: "You're my favorite human-panda hybrid." },
    12: { theme: "Dark Comedy", msg: "You're weird. I like that in a person." },
    11: { theme: "Aesthetic", msg: "You have a soul that's as beautiful as a sunset." },
    10: { theme: "Romantic", msg: "10 days to go! My love for you is a 10/10." },
    9: { theme: "Panda Love", msg: "I'd travel to the misty mountains of China for you. Or, you know, to the kitchen for snacks." },
    8: { theme: "Dark Comedy", msg: "I love you more than I love hitting the snooze button." },
    7: { theme: "Aesthetic", msg: "One week! You are my favorite work of art." },
    6: { theme: "Romantic", msg: "Six days until I get to celebrate my favorite person." },
    5: { theme: "Panda Love", msg: "I'm 'paws'-itively crazy about you! Getting so close!" },
    4: { theme: "Dark Comedy", msg: "In four days, you'll be older. And still not as old as my jokes." },
    3: { theme: "Aesthetic", msg: "Three days. The anticipation is as beautiful as you are." },
    2: { theme: "Romantic", msg: "Two days. I can barely contain my excitement to celebrate you!" },
    1: { theme: "Panda Love", msg: "TOMORROW is the day! Get ready for a 'beary' special day, my love!" }
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
