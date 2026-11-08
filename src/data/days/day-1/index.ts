import type { DailySurprise } from "../types";

export const day1: DailySurprise = {
  dayNumber: 1,
  date: "2026-11-08",
  theme: {
    date: "2026-11-08",
    name: "Blush Morning",
    tagline: "Day 1 · A soft pink beginning",
    note: "A week from today, something wonderful begins. Until then, I'll leave you a little surprise every single day.",
    decor: ["flower", "sparkle"],
    colors: {
      primary: "#F7C9D4",
      secondary: "#FCE4EC",
      bg: "#FFF8F5",
      accent: "#D9B8E8",
      gold: "#E8C77B",
      text: "#594653",
      card: "#FFFFFF",
    },
  },
  music: {
    src: "/days/day-1/music.m4a",
    label: "Dilruba Dilhaseen 🎵",
  },
  welcome: {
    title: "Hey Aashi! ✨",
    subtitle: "Welcome to Day 1 of your birthday countdown. A whole week of surprises starts today...",
    button: "Open Today's Surprise 💗",
  },
  countdown: {
    heading: "Something beautiful is coming for Aashi...",
    highlightMemory: {
      src: "/days/day-1/memories/memory-5.jpg",
      caption: "A special moment just for today",
      rotate: -3,
      size: "md",
      tape: "#F7C9D4",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 1 · for Aashi",
    heading: "The Beginning of Your Week",
    hint: "Tap the envelope",
    paragraphs: [
      "Na chaand ki khwahish, na sitaaron ki farmaish hai,",
      "Bas ek khoobsurat si muskurahat ki guzaarish hai,",
      "Naam toh bahut sune hain duniya mein humne,",
      "Magar Aashiya, tere naam mein hi ek alag si khwaahish hai. ✨",
      "Welcome to Day 1, Aashi! I wanted to start this countdown by reminding you how much warmth and joy you bring into my life.",
      "Some people just make ordinary days feel lighter simply by being around, and you are definitely one of them.",
      "Every day from today until your birthday, this little corner of the world will change just for you with new notes, memories, and little surprises.",
      "Take your time, smile, and get ready for an amazing week ahead. 💗",
    ],
  },
  gallery: {
    kicker: "day 1 scrapbook",
    heading: "Laughs & Little Moments",
    subheading: "Tap any memory to take a closer look",
    items: [
      { src: "/days/day-1/memories/memory-1.jpg", caption: "The day we couldn't stop laughing", rotate: -4, size: "lg", tape: "#F7C9D4", flower: true },
      { src: "/days/day-1/memories/memory-2.jpg", caption: "Pure happiness", rotate: 3, size: "sm", tape: "#D9B8E8" },
      { src: "/days/day-1/memories/memory-3.jpg", caption: "My favourite human", rotate: -2, size: "md", tape: "#E8C77B" },
      { src: "/days/day-1/memories/memory-4.jpg", caption: "That unforgettable day", rotate: 4, size: "md", tape: "#F7C9D4" },
    ],
  },
  cards: {
    kicker: "day 1 thoughts",
    heading: "Why You Are So Special",
    items: [
      { id: "smile", title: "Your Smile", icon: "smile", message: "Your smile has a strange superpower: it can fix a bad day without saying a single word." },
      { id: "kindness", title: "Your Kindness", icon: "heart", message: "You care without keeping score, and everyone around you feels it. The world is softer because of you." },
      { id: "craziness", title: "Your Craziness", icon: "party", message: "Your beautiful chaos is my favourite kind of fun. Never, ever tone it down." },
      { id: "energy", title: "Your Positive Energy", icon: "sun", message: "You walk into a room and it gets brighter. That kind of energy can't be faked, and it's all yours." },
      { id: "friendship", title: "Your Friendship", icon: "friends", message: "Some friendships feel like home. Yours is one of those, and I'm so grateful for it." },
      { id: "unique", title: "Your Uniqueness", icon: "sparkles", message: "There is no one else like you, and the world is better for the one-of-a-kind way you exist." },
    ],
  },
  secret: {
    heading: "Psst... Day 1 Secret",
    button: "Reveal Day 1 Secret",
    revealedTitle: "A secret, just for Aashi",
    message: "I started planning this countdown weeks ago because making you smile, Aashi, is genuinely one of my favourite things to do. 💗",
  },
  gift: {
    heading: "Day 1 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 1 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 1 surprise video! Tap play and enjoy. 💗",
    ],
    video: "/videos/V1.mp4",
  },
  footer: "Day 1 of 8 · Made with love, just for Aashi 💗",
};
