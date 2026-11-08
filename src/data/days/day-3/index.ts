import type { DailySurprise } from "../types";

export const day3: DailySurprise = {
  dayNumber: 3,
  date: "2026-11-10",
  theme: {
    date: "2026-11-10",
    name: "Golden Hour",
    tagline: "Day 3 · Warm like sunshine",
    note: "Some people carry sunshine with them wherever they go. You're one of them. Consider this golden afternoon yours.",
    decor: ["sparkle", "star"],
    colors: {
      primary: "#F6D7A7",
      secondary: "#FFF0D6",
      bg: "#FFFAF0",
      accent: "#F7C9D4",
      gold: "#E0B050",
      text: "#5E4B3A",
      card: "#FFFFFF",
    },
  },
  music: {
    src: "/days/day-3/music.m4a",
    label: "Kesariya 🎵",
  },
  welcome: {
    title: "Hello, Sunshine! ☀️",
    subtitle: "Day 3 is bathed in warm golden light, matching the warmth you radiate everywhere you go.",
    button: "Bask In Day 3 💛",
  },
  countdown: {
    heading: "Five sleeps to go until the big day...",
    highlightMemory: {
      src: "/days/day-3/memories/memory-5.jpg",
      caption: "Bright sunshine and golden moments",
      rotate: -2,
      size: "md",
      tape: "#E0B050",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 3",
    heading: "A Pocket Full of Sunshine",
    hint: "Tap the envelope",
    paragraphs: [
      "Look at that—we're already on Day 3!",
      "I call you sunshine for a reason: you don't even have to try, you just naturally brighten up every room, every conversation, and every day.",
      "Thank you for sharing your warmth so generously with the world.",
      "May this golden day shine back on you with every bit of the love you give away. 💛",
    ],
  },
  gallery: {
    kicker: "day 3 memories",
    heading: "Warmth & Bright Days",
    subheading: "Golden memories to keep you smiling",
    items: [
      { src: "/days/day-3/memories/memory-1.jpg", caption: "Sunlit afternoons", rotate: -3, size: "lg", tape: "#E0B050" },
      { src: "/days/day-3/memories/memory-2.jpg", caption: "Radiant vibes", rotate: 4, size: "sm", tape: "#F6D7A7", flower: true },
      { src: "/days/day-3/memories/memory-3.jpg", caption: "Pure energy", rotate: -2, size: "md", tape: "#F7C9D4" },
      { src: "/days/day-3/memories/memory-4.jpg", caption: "That glowing grin", rotate: 2, size: "md", tape: "#E0B050" },
    ],
  },
  cards: {
    kicker: "day 3 glow",
    heading: "The Sunshine Qualities in You",
    items: [
      { id: "radiance", title: "Your Radiance", icon: "sun", message: "You have a natural inner glow that outshines any filter or lighting." },
      { id: "generosity", title: "Your Generous Heart", icon: "heart", message: "You are always looking out for others and finding ways to lift people up." },
      { id: "humour", title: "Your Quick Wit", icon: "party", message: "Your comebacks and funny comments never fail to make people burst out laughing." },
      { id: "authenticity", title: "Your Authenticity", icon: "sparkles", message: "You never pretend to be someone else. You are 100% genuine and honest." },
      { id: "curiosity", title: "Your Curiosity", icon: "smile", message: "The enthusiastic way you explore new ideas and stories is infectious." },
      { id: "encouragement", title: "Your Encouragement", icon: "friends", message: "When someone doubts themselves, you are always the first to cheer them on." },
    ],
  },
  secret: {
    heading: "Psst... Day 3 Sunshine Secret",
    button: "Reveal Day 3 Secret",
    revealedTitle: "Golden confession",
    message: "Even on cloudy, rainy days, reading a message from you feels like stepping right into warm sunshine. 💛",
  },
  gift: {
    heading: "Day 3 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 3 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 3 surprise video! ☀️",
    ],
    video: "/videos/V3.mp4",
  },
  footer: "Day 3 of 8 · Made with love, just for you 💛",
};
