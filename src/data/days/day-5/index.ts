import type { DailySurprise } from "../types";

export const day5: DailySurprise = {
  dayNumber: 5,
  date: "2026-11-12",
  theme: {
    date: "2026-11-12",
    name: "Starry Night",
    tagline: "Day 5 · Wishes under the stars",
    note: "Tonight the stars are out just for you. Make a wish. Your week is almost here.",
    decor: ["star", "sparkle"],
    colors: {
      primary: "#B79CE8",
      secondary: "#2E2852",
      bg: "#1F1B3A",
      accent: "#F7C9D4",
      gold: "#F2D58A",
      text: "#F3E9FA",
      card: "#2B2650",
    },
  },
  music: {
    src: "/days/day-5/music.m4a",
    label: "Apna Bana Le 🎵",
  },
  welcome: {
    title: "Make a Wish Tonight 🌌",
    subtitle: "Day 5 wraps you in twilight and glowing starlight. The countdown is reaching its peak...",
    button: "Gaze Into Day 5 ✨",
  },
  countdown: {
    heading: "Only three sleeps to go...",
    highlightMemory: {
      src: "/days/day-5/memories/memory-5.jpg",
      caption: "Under the stars with you",
      rotate: -3,
      size: "md",
      tape: "#F2D58A",
      flower: true,
    },
  },
  letter: {
    kicker: "chapter 5",
    heading: "Wishes Under Constellations",
    hint: "Tap the envelope",
    paragraphs: [
      "Welcome to Day 5, under the deep indigo stars.",
      "They say when you see a shooting star, you should make a wish. But having you in my life already feels like a wish that came true.",
      "As your birthday draws closer, my wish for you is that this coming year brings you peace of mind, unshakeable confidence, and boundless adventures.",
      "Look up at the night sky tonight and know how special you are. ✨",
    ],
  },
  gallery: {
    kicker: "day 5 memories",
    heading: "Constellation of Memories",
    subheading: "Moments that shine brightest in the dark",
    items: [
      { src: "/days/day-5/memories/memory-1.jpg", caption: "Starlit laughter", rotate: 3, size: "lg", tape: "#F2D58A" },
      { src: "/days/day-5/memories/memory-2.jpg", caption: "Night walks & talks", rotate: -2, size: "sm", tape: "#B79CE8" },
      { src: "/days/day-5/memories/memory-3.jpg", caption: "Midnight memories", rotate: 4, size: "md", tape: "#F7C9D4" },
      { src: "/days/day-5/memories/memory-4.jpg", caption: "Shining bright", rotate: -1, size: "md", tape: "#F2D58A" },
    ],
  },
  cards: {
    kicker: "day 5 constellations",
    heading: "Things That Shine In You",
    items: [
      { id: "spark", title: "Your Spark", icon: "sparkles", message: "There's an unmistakable spark in your eyes whenever you get excited about something you love." },
      { id: "courage", title: "Your Courage", icon: "sun", message: "Even when things get scary or unfamiliar, you show up and do your best." },
      { id: "intuition", title: "Your Intuition", icon: "heart", message: "You have an uncanny emotional radar that senses what someone needs before they speak." },
      { id: "humour", title: "Late Night Laughs", icon: "party", message: "The silliest conversations always happen late at night, and yours are top tier." },
      { id: "comfort", title: "Your Comforting Aura", icon: "friends", message: "Talking to you at the end of a long day washes away all the fatigue." },
      { id: "dreams", title: "Your Big Dreams", icon: "smile", message: "I love hearing about your goals. Seeing your ambition inspires me to aim higher too." },
    ],
  },
  secret: {
    heading: "Psst... Day 5 Night Secret",
    button: "Reveal Day 5 Secret",
    revealedTitle: "Starlit whisper",
    message: "Out of billions of people on this giant spinning planet, I'm so lucky you crossed my path. 🌌",
  },
  gift: {
    heading: "Day 5 Surprise Box 🎁",
    button: "Open Today's Video Surprise 🎁",
    revealedHeading: "Day 5 Surprise Video ✨",
    paragraphs: [
      "Here is your special Day 5 surprise video! ✨",
    ],
    video: "/videos/V5.mp4",
  },
  footer: "Day 5 of 8 · Made with love, just for you 🌌",
};
