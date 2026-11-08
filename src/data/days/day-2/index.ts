import type { DailySurprise } from "../types";

export const day2: DailySurprise = {
  dayNumber: 2,
  date: "2026-11-09",
  theme: {
    date: "2026-11-09",
    name: "Lavender Dreams",
    tagline: "Day 2 · Dreamy and calm",
    note: "Every day this week the world looks a little different here, just like how you make ordinary days feel different.",
    decor: ["star", "flower"],
    colors: {
      primary: "#D9B8E8",
      secondary: "#F1E6F8",
      bg: "#FBF7FF",
      accent: "#F7C9D4",
      gold: "#E8C77B",
      text: "#4E4560",
      card: "#FFFFFF",
    },
  },
  music: {
    src: "/days/day-2/music.m4a",
    label: "Pee Loon 🎵",
  },
  welcome: {
    title: "Good Morning, Dreamer ✨",
    subtitle: "It's Day 2! Today the world turns lavender and calm, just like the peace you bring.",
    button: "Step Into Day 2 💜",
  },
  countdown: {
    heading: "Six sleeps to go until your day...",
    highlightMemory: {
      src: "/days/day-2/memories/memory-5.jpg",
      caption: "Dreamy moments with you",
      rotate: 2,
      size: "md",
      tape: "#D9B8E8",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 2",
    heading: "A Calm & Gentle Note",
    hint: "Tap the envelope",
    paragraphs: [
      "Happy Day 2 of your countdown!",
      "Life can be fast and overwhelming, but whenever I talk to you, everything feels a little more grounded and peaceful.",
      "You have this quiet grace that makes everyone around you feel safe and heard.",
      "I hope today gives you peaceful moments, good coffee, and lots of reasons to feel cherished. 💜",
    ],
  },
  gallery: {
    kicker: "day 2 memories",
    heading: "Calm Days & Gentle Smiles",
    subheading: "A fresh set of memories for Day 2",
    items: [
      { src: "/days/day-2/memories/memory-1.jpg", caption: "Quiet conversations and easy laughs", rotate: -3, size: "lg", tape: "#D9B8E8", flower: true },
      { src: "/days/day-2/memories/memory-2.jpg", caption: "That gentle smile", rotate: 2, size: "sm", tape: "#F7C9D4" },
      { src: "/days/day-2/memories/memory-3.jpg", caption: "Golden calm", rotate: -1, size: "md", tape: "#E8C77B" },
      { src: "/days/day-2/memories/memory-4.jpg", caption: "A snapshot of calm", rotate: 3, size: "md", tape: "#D9B8E8" },
    ],
  },
  cards: {
    kicker: "day 2 reflections",
    heading: "The Gentle Things About You",
    items: [
      { id: "calm", title: "Your Calming Presence", icon: "sun", message: "Being around you is like taking a deep breath of fresh air after a chaotic day." },
      { id: "listening", title: "The Way You Listen", icon: "heart", message: "You don't just hear words; you really understand what people feel. That is such a rare gift." },
      { id: "thoughtful", title: "Your Thoughtfulness", icon: "sparkles", message: "You notice the tiny details about people that everyone else overlooks." },
      { id: "patience", title: "Your Patience", icon: "smile", message: "You give people room to be themselves without judgment or rush." },
      { id: "loyalty", title: "Your Loyalty", icon: "friends", message: "Standing by people isn't an obligation for you; it's just who you are at your core." },
      { id: "laugh", title: "Your Sweet Laugh", icon: "party", message: "It's impossible to hear your genuine laugh and not smile right along with you." },
    ],
  },
  secret: {
    heading: "Psst... Day 2 Whisper",
    button: "Reveal Day 2 Secret",
    revealedTitle: "A quiet thought",
    message: "Whenever I hear a peaceful acoustic melody, you're usually the first person that comes to mind. 💜",
  },
  gift: {
    heading: "Day 2 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 2 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 2 surprise video! 💜",
    ],
    video: "/videos/V2.mp4",
  },
  footer: "Day 2 of 8 · Made with love, just for you 💜",
};
