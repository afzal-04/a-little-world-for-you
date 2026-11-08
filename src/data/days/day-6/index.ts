import type { DailySurprise } from "../types";

export const day6: DailySurprise = {
  dayNumber: 6,
  date: "2026-11-13",
  theme: {
    date: "2026-11-13",
    name: "Peach Cloud",
    tagline: "Day 6 · Soft and sweet",
    note: "Two more sleeps... I'm counting too, and I can barely wait.",
    decor: ["heart", "sparkle"],
    colors: {
      primary: "#FFC9B5",
      secondary: "#FFE6DC",
      bg: "#FFF7F2",
      accent: "#F7C9D4",
      gold: "#E8C77B",
      text: "#5B4540",
      card: "#FFFFFF",
    },
  },
  music: {
    src: "/days/day-6/music.m4a",
    label: "Heeriye 🎵",
  },
  welcome: {
    title: "Sweet Peach Sunset 🍑",
    subtitle: "Just 2 sleeps left! Today is light, sweet, and bursting with anticipation.",
    button: "Float Into Day 6 🧡",
  },
  countdown: {
    heading: "Just two sleeps to go!",
    highlightMemory: {
      src: "/days/day-6/memories/memory-5.jpg",
      caption: "Sweet and unforgettable",
      rotate: 2,
      size: "md",
      tape: "#FFC9B5",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 6",
    heading: "Counting Down the Hours",
    hint: "Tap the envelope",
    paragraphs: [
      "Can you believe we're already down to two sleeps?",
      "Every single moment leading up to this has been full of excitement. You deserve an entire season of celebrations, not just a single 24-hour day.",
      "Thank you for being the sweetest, funniest, and most genuine friend.",
      "The finish line is right around the corner, and the biggest celebration is almost here! 🍑",
    ],
  },
  gallery: {
    kicker: "day 6 memories",
    heading: "Sweetest Highlights",
    subheading: "A collection of our fondest memories",
    items: [
      { src: "/days/day-6/memories/memory-1.jpg", caption: "Sweet laughter & warm coffee", rotate: -3, size: "lg", tape: "#FFC9B5" },
      { src: "/days/day-6/memories/memory-2.jpg", caption: "Golden peach moments", rotate: 3, size: "sm", tape: "#F7C9D4", flower: true },
      { src: "/days/day-6/memories/memory-3.jpg", caption: "Pure joy captured", rotate: -1, size: "md", tape: "#E8C77B" },
      { src: "/days/day-6/memories/memory-4.jpg", caption: "One for the books", rotate: 2, size: "md", tape: "#FFC9B5" },
    ],
  },
  cards: {
    kicker: "day 6 sweetness",
    heading: "The Sweetest Traits of You",
    items: [
      { id: "sweetness", title: "Your Inherent Sweetness", icon: "heart", message: "You have a softness that disarms anger and brings relief to anyone having a rough time." },
      { id: "spontaneity", title: "Your Spontaneity", icon: "party", message: "Spontaneous ideas with you always turn into the best stories afterward." },
      { id: "support", title: "Your Unconditional Support", icon: "friends", message: "Whenever I need someone in my corner, you're always right there cheering." },
      { id: "smiles", title: "Your Contagious Glee", icon: "smile", message: "When you get excited about little things (like good food or a funny video), it's so wholesome." },
      { id: "energy", title: "Your Lighthearted Vibe", icon: "sun", message: "You don't take yourself too seriously, and that makes being around you so easy." },
      { id: "heart", title: "Your Golden Core", icon: "sparkles", message: "You have an honest, upright heart that wants good for everybody." },
    ],
  },
  secret: {
    heading: "Psst... Day 6 Whisper",
    button: "Reveal Day 6 Secret",
    revealedTitle: "Peach cloud secret",
    message: "I've been checking the countdown timer every few hours just because I can't wait for your reaction on the 15th! 🍑",
  },
  gift: {
    heading: "Day 6 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 6 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 6 surprise video! 🍑",
    ],
    video: "/videos/V6.mp4",
  },
  footer: "Day 6 of 8 · Made with love, just for you 🍑",
};
