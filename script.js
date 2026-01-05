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
    55: { theme: "Starry Eyed", msg: "Are you made of stars? Because you light up my entire universe." },
    54: { theme: "Dark Comedy", msg: "I love you so much, I'd even let you have the last piece of cake. But I'd probably resent you for it." },
    53: { theme: "Passionate Words", msg: "Every moment with you feels like a line from a passionate novel I never want to end." },
    52: { theme: "Dark Comedy", msg: "Our love is like a beautiful, expensive vase. I'm terrified I'm going to drop it." },
    51: { theme: "Moon & Back", msg: "They say 'I love you to the moon and back,' but my love for you is a round trip to a galaxy far, far away." },
    50: { theme: "Dark Comedy", msg: "You're the only person I'd share my zombie apocalypse bunker with. But you have to bring your own snacks." },
    49: { theme: "Sonnets for You", msg: "If Shakespeare were alive, he'd be writing sonnets about the way your eyes sparkle." },
    48: { theme: "Dark Comedy", msg: "I love that we can be weird together. It's my favorite kind of normal." },
    47: { theme: "First Sight", msg: "I believed in love at first sight the moment I saw you. It was like a movie, but better." },
    46: { theme: "Dark Comedy", msg: "You're my lobster. And everyone knows lobsters mate for life. Or so I've been told." },
    45: { theme: "Sweet Melody", msg: "You're the melody my heart can't stop singing." },
    44: { theme: "Dark Comedy", msg: "I love you more than I love canceling plans to stay home. And that's saying a lot." },
    43: { theme: "Poetry in Motion", msg: "You are living poetry. Every move you make, every word you say." },
    42: { theme: "Dark Comedy", msg: "I'm not saying I'm lost without you, but the GPS of my life works a lot better when you're here." },
    41: { theme: "Eternal Flame", msg: "My love for you is an eternal flame that will never burn out." },
    40: { theme: "Dark Comedy", msg: "I love you even when you're hangry. And that's the highest form of love." },
    39: { theme: "Stolen Heart", msg: "You stole my heart, but I'll let you keep it." },
    38: { theme: "Dark Comedy", msg: "You're the reason I'm not a complete mess. Just a partial one." },
    37: { theme: "Destiny", msg: "I think we were written in the stars, destined to find each other." },
    36: { theme: "Dark Comedy", msg: "I'd give you my last chicken nugget. That's how much you mean to me." },
    35: { theme: "My Everything", msg: "You're not just my everything, you're my 'more than everything'." },
    34: { theme: "Dark Comedy", msg: "I love you enough to watch that show you like that I secretly hate." },
    33: { theme: "Forever & Always", msg: "I want to spend forever and always with you." },
    32: { theme: "Dark Comedy", msg: "You're the best thing that's ever happened to me. And I've had some really good tacos." },
    31: { theme: "One & Only", msg: "You are my one and only. The love of my life." },
    30: { theme: "Dark Comedy", msg: "Just one month until your birthday! Let's celebrate with a cake that I'll probably eat most of." },
    29: { theme: "True Love", msg: "This is what true love feels like. Thank you for showing me." },
    28: { theme: "Dark Comedy", msg: "Are you a magician? Because whenever I look at you, everyone else disappears. Mostly because I'm not paying attention to them." },
    27: { theme: "Soulmate", msg: "I've found my soulmate in you. It's a connection I can't explain." },
    26: { theme: "Dark Comedy", msg: "I love you more than a good Wi-Fi signal." },
    25: { theme: "My Universe", msg: "You are the center of my universe. Everything revolves around you." },
    24: { theme: "Dark Comedy", msg: "I would share my Netflix password with you. Now that's commitment." },
    23: { theme: "Unconditional", msg: "My love for you is unconditional and unending." },
    22: { theme: "Dark Comedy", msg: "You're the only person who can make me laugh when I want to cry. Or when I'm just being dramatic." },
    21: { theme: "Better Half", msg: "You are my better half. You complete me." },
    20: { theme: "Dark Comedy", msg: "I'm not a photographer, but I can picture us together. Probably in a weird, awkward pose." },
    19: { theme: "Meant to Be", msg: "We were always meant to be. It's as simple as that." },
    18: { theme: "Dark Comedy", msg: "My love for you is like a fine wine. It gets better with age, and I'm probably going to drink too much of it." },
    17: { theme: "My Rock", msg: "You are my rock, my anchor in the storm." },
    16: { theme: "Dark Comedy", msg: "I love you so much, I'd even fight a spider for you. A small one." },
    15: { theme: "Twin Flame", msg: "You are my twin flame, the other half of my soul." },
    14: { theme: "Dark Comedy", msg: "Two weeks until your birthday! Let's celebrate by doing all of my favorite things." },
    13: { theme: "Perfect Harmony", msg: "We are in perfect harmony, like two songs that were made for each other." },
    12: { theme: "Dark Comedy", msg: "You're weird. But you're my weird." },
    11: { theme: "Inseparable", msg: "We are inseparable, like two peas in a pod." },
    10: { theme: "Dark Comedy", msg: "10 days to go! I'm 10% excited about your birthday and 90% excited about the cake." },
    9: { theme: "Infinite Love", msg: "My love for you is infinite, without beginning or end." },
    8: { theme: "Dark Comedy", msg: "I love you more than I love hitting the snooze button. And that's a love that's deep and profound." },
    7: { theme: "One Week of Love", msg: "One week until we celebrate the best person I know. You." },
    6: { theme: "Dark Comedy", msg: "Six days until you're older and wiser. Wiser is debatable." },
    5: { theme: "Anticipation", msg: "The anticipation of celebrating you is the sweetest torture." },
    4: { theme: "Dark Comedy", msg: "In four days, we'll be celebrating the anniversary of your 29th birthday. Again." },
    3: { theme: "So Close", msg: "Three days. I can almost taste the birthday cake." },
    2: { theme: "Dark Comedy", msg: "Two days. Are you ready to be showered with love and attention? And presents. Mostly presents." },
    1: { theme: "The Eve", msg: "TOMORROW! Get ready for a day all about you, my love. I'm so excited I can't sleep." }
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
