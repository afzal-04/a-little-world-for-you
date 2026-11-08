import type { DailySurprise } from "../types";

export const day4: DailySurprise = {
  dayNumber: 4,
  date: "2026-11-11",
  theme: {
    date: "2026-11-11",
    name: "Rose Garden",
    tagline: "Day 4 · Petals and poetry",
    note: "Roses are lovely, but they've got nothing on the way you make people feel.",
    decor: ["flower", "heart"],
    colors: {
      primary: "#F2A7B8",
      secondary: "#FBD9E1",
      bg: "#FFF5F6",
      accent: "#D9B8E8",
      gold: "#E8C77B",
      text: "#5A3E49",
      card: "#FFFFFF",
    },
  },
  music: {
    src: "/days/day-4/music.m4a",
    label: "Raataan Lambiyan 🎵",
  },
  welcome: {
    title: "Halfway There, Beautiful 🌹",
    subtitle: "Day 4 brings a blooming rose garden, filled with sweet words and fond memories.",
    button: "Enter the Rose Garden 💗",
  },
  countdown: {
    heading: "Four sleeps to go until the celebration...",
    highlightMemory: {
      src: "/days/day-4/memories/memory-5.jpg",
      caption: "Blooms & sweet memories",
      rotate: 3,
      size: "md",
      tape: "#F2A7B8",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 4",
    heading: "Petals & Fond Words",
    hint: "Tap the envelope",
    paragraphs: [
      "We've reached the halfway mark! Four days down, four more wonderful days to go.",
      "Just like flowers that blossom and add color to an entire garden, your presence makes every place more vibrant.",
      "I hope you pause today, breathe in the good things, and feel celebrated for every single petal of who you are.",
      "You are deeply appreciated, today and always. 🌹",
    ],
  },
  gallery: {
    kicker: "day 4 memories",
    heading: "Moments in Bloom",
    subheading: "A bouquet of cherished snapshots",
    items: [
      { src: "/days/day-4/memories/memory-1.jpg", caption: "Sweet laughter and shared smiles", rotate: -4, size: "lg", tape: "#F2A7B8", flower: true },
      { src: "/days/day-4/memories/memory-2.jpg", caption: "Timeless moments", rotate: 2, size: "sm", tape: "#D9B8E8" },
      { src: "/days/day-4/memories/memory-3.jpg", caption: "Pure joy", rotate: -2, size: "md", tape: "#FBD9E1" },
      { src: "/days/day-4/memories/memory-4.jpg", caption: "Favorite frame", rotate: 3, size: "md", tape: "#F2A7B8" },
    ],
  },
  cards: {
    kicker: "day 4 petals",
    heading: "Qualities That Blossom",
    items: [
      { id: "grace", title: "Your Natural Grace", icon: "sparkles", message: "Whatever you do, you carry yourself with effortless elegance and charm." },
      { id: "empathy", title: "Your Deep Empathy", icon: "heart", message: "You put yourself in others' shoes so naturally, making everyone feel understood." },
      { id: "resilience", title: "Your Resilience", icon: "sun", message: "You face challenges with strength and dignity that inspires everyone looking on." },
      { id: "playful", title: "Your Playful Side", icon: "party", message: "Your fun tease and contagious laughter make even the most boring chores fun." },
      { id: "style", title: "Your Unique Style", icon: "smile", message: "From the little accessories to your vibe, your taste is so distinct and lovely." },
      { id: "warmth", title: "Your Warm Heart", icon: "friends", message: "You make everyone feel welcome, safe, and truly valued." },
    ],
  },
  secret: {
    heading: "Psst... Day 4 Whisper",
    button: "Reveal Day 4 Secret",
    revealedTitle: "Garden secret",
    message: "If I had a flower for every time you made me smile, I'd have a garden that goes on forever. 🌹",
  },
  gift: {
    heading: "Day 4 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 4 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 4 surprise video! 🌹",
    ],
    video: "/videos/V4.mp4",
  },
  footer: "Day 4 of 8 · Made with love, just for you 🌹",
};
