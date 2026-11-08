import type { DailySurprise } from "../types";

export const day8: DailySurprise = {
  dayNumber: 8,
  date: "2026-11-15",
  theme: {
    date: "2026-11-15",
    name: "Birthday Glow",
    tagline: "Day 8 · It's your day!",
    note: "It's finally here. Today the whole world belongs to you.",
    decor: ["flower", "star", "heart", "sparkle"],
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
    src: "/days/day-8/music.m4a",
    label: "Subhanallah 🎂🎵",
  },
  welcome: {
    title: "HAPPY BIRTHDAY! 🎂🎉",
    subtitle: "TODAY IS YOUR DAY! Every single pixel, song, and word in this little world was made just for you.",
    button: "Unwrap Your Birthday 💗",
  },
  countdown: {
    heading: "TODAY IS YOUR DAY!",
    highlightMemory: {
      src: "/days/day-8/memories/memory-5.jpg",
      caption: "The birthday star herself!",
      rotate: 0,
      size: "lg",
      tape: "#E8C77B",
      flower: true,
    },
  },
  letter: {
    kicker: "the birthday letter",
    heading: "Happy Birthday, Beautiful",
    hint: "Tap to open your birthday letter",
    paragraphs: [
      "Happy Birthday! 🎂✨",
      "Today isn't just another date on the calendar; it's the celebration of someone truly extraordinary coming into this world.",
      "You bring so much sunshine, laughter, comfort, and beauty to everyone lucky enough to know you. Your heart is generous, your humor is unmatched, and your spirit is pure gold.",
      "I hope today showers you with love, pleasant surprises, warm hugs, delicious cake, and moments you'll cherish forever.",
      "May this new year of your life be filled with answered prayers, good health, wild dreams achieved, and endless reasons to smile.",
      "Happy, happy Birthday! You are loved so very much. 💗",
    ],
  },
  gallery: {
    kicker: "birthday scrapbook",
    heading: "A Lifetime of Beautiful Moments",
    subheading: "Celebrating you and every memory we've made",
    items: [
      { src: "/days/day-8/memories/memory-1.jpg", caption: "The day we couldn't stop laughing", rotate: -4, size: "lg", tape: "#F7C9D4", flower: true },
      { src: "/days/day-8/memories/memory-2.jpg", caption: "Pure happiness", rotate: 3, size: "sm", tape: "#D9B8E8" },
      { src: "/days/day-8/memories/memory-3.jpg", caption: "My favourite human", rotate: -2, size: "md", tape: "#E8C77B" },
      { src: "/days/day-8/memories/memory-4.jpg", caption: "That unforgettable day", rotate: 4, size: "md", tape: "#F7C9D4" },
    ],
  },
  cards: {
    kicker: "birthday wishes",
    heading: "Wishes For Your New Year",
    items: [
      { id: "joy", title: "Endless Joy", icon: "smile", message: "May your days be packed with giggles, spontaneous fun, and pure childlike joy." },
      { id: "love", title: "Boundless Love", icon: "heart", message: "May you always feel surrounded by people who cherish you for exactly who you are." },
      { id: "success", title: "Wild Success", icon: "sparkles", message: "May all the goals and dreams you hold in your heart take flight this year." },
      { id: "health", title: "Peace & Health", icon: "sun", message: "May you enjoy tranquil peace of mind, vibrant health, and peaceful sleep every single night." },
      { id: "adventure", title: "New Adventures", icon: "party", message: "May you explore new places, taste wonderful food, and create unforgettable stories." },
      { id: "cherished", title: "Always Remembered", icon: "friends", message: "Never forget how special you are and how deeply you are appreciated every day." },
    ],
  },
  secret: {
    heading: "Psst... The Birthday Secret!",
    button: "Open Birthday Secret",
    revealedTitle: "A secret, just between us",
    message: "You are one of the best things that ever happened to my ordinary days. Thank you for being in this world. Happy Birthday! 💗",
  },
  gift: {
    heading: "Your Birthday Gift Box 🎁",
    button: "Open Your Birthday Gift! 🎂",
    revealedHeading: "HAPPY BIRTHDAY! 🎂🎉",
    paragraphs: [
      "May your life always be filled with happiness, beautiful moments, endless laughter, and everything your heart wishes for.",
      "Keep smiling and keep being the wonderful, radiant person you are.",
      "You deserve all the most beautiful things in this world. 💗",
    ],
    video: "/videos/V4.mp4",
  },
  footer: "Happy Birthday! Made with love, just for you 🎂💗",
};
