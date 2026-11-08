import type { DailySurprise } from "../types";

export const day7: DailySurprise = {
  dayNumber: 7,
  date: "2026-11-14",
  theme: {
    date: "2026-11-14",
    name: "Moonlit Eve",
    tagline: "Day 7 · The night before",
    note: "Tomorrow is the day. Sleep well and wake up smiling, because someone has big plans for you.",
    decor: ["star", "heart"],
    colors: {
      primary: "#E9A6C4",
      secondary: "#3B2646",
      bg: "#2A1B33",
      accent: "#C9A4E8",
      gold: "#F0CF86",
      text: "#FBEFF6",
      card: "#382444",
    },
  },
  music: {
    src: "/days/day-7/music.m4a",
    label: "Tum Se Hi 🎵",
  },
  welcome: {
    title: "Tomorrow is Your Day! 🌙",
    subtitle: "Just 1 sleep to go! The night before your birthday is wrapped in moonlight and pure excitement.",
    button: "Step Into The Eve 💜",
  },
  countdown: {
    heading: "Just 1 sleep to go!",
    highlightMemory: {
      src: "/days/day-7/memories/memory-5.jpg",
      caption: "The eve of something unforgettable",
      rotate: -3,
      size: "md",
      tape: "#F0CF86",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 7",
    heading: "The Eve Before Midnight",
    hint: "Tap the envelope",
    paragraphs: [
      "This is it. The very last sleep before your birthday.",
      "Looking back at the past year, through every high and every low, having you around has been one of the biggest blessings.",
      "Tonight when you close your eyes, sleep with a big smile knowing that tomorrow the entire world turns into a celebration for you.",
      "See you on the other side of midnight. 🌙✨",
    ],
  },
  gallery: {
    kicker: "day 7 memories",
    heading: "Cherished Eve Highlights",
    subheading: "One last scrapbook look before the big day",
    items: [
      { src: "/days/day-7/memories/memory-1.jpg", caption: "Night before smiles", rotate: 3, size: "lg", tape: "#F0CF86" },
      { src: "/days/day-7/memories/memory-2.jpg", caption: "Always laughing together", rotate: -2, size: "sm", tape: "#E9A6C4", flower: true },
      { src: "/days/day-7/memories/memory-3.jpg", caption: "Moments that matter", rotate: 2, size: "md", tape: "#C9A4E8" },
      { src: "/days/day-7/memories/memory-4.jpg", caption: "Can't wait for tomorrow", rotate: -3, size: "md", tape: "#F0CF86" },
    ],
  },
  cards: {
    kicker: "day 7 eve reflections",
    heading: "Reasons I'm Grateful For You",
    items: [
      { id: "presence", title: "Your Constant Presence", icon: "friends", message: "In a world of fleeting connections, your presence is real, steady, and genuine." },
      { id: "smiles", title: "All The Smiles You Gave Me", icon: "smile", message: "Countless smiles, silly jokes, and moments that made hard days turn into good ones." },
      { id: "growth", title: "How You Inspire Growth", icon: "sun", message: "Watching you evolve, face challenges, and stay true to your morals inspires me every day." },
      { id: "memories", title: "The Memories We Made", icon: "heart", message: "Every memory we've shared is a keepsake I cherish and wouldn't trade for anything." },
      { id: "laughter", title: "The Uncontrollable Laughs", icon: "party", message: "Those moments where we couldn't breathe because we were laughing so hard." },
      { id: "future", title: "The Excitement for Tomorrow", icon: "sparkles", message: "Tomorrow is finally your day, and it's going to be so, so special." },
    ],
  },
  secret: {
    heading: "Psst... Day 7 Midnight Secret",
    button: "Reveal Day 7 Secret",
    revealedTitle: "Midnight confession",
    message: "I will be waiting for the clock to strike 12 tonight just to wish you first. Sleep well, beautiful! 🌙",
  },
  gift: {
    heading: "Day 7 Surprise Box 🎁",
    button: "Open The Eve Surprise 🎁",
    revealedHeading: "The Night Before ✨",
    paragraphs: [
      "The wait is almost over. Tomorrow morning, when you open this page, the countdown will be complete and your grand birthday surprise will be waiting. 🌙",
    ],
    video: "/videos/V1.mp4",
  },
  footer: "Day 7 of 8 · Made with love, just for you 🌙",
};
