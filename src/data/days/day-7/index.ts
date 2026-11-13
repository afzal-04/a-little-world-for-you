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
    title: "This Is It, Aashi. Tomorrow. 🌙",
    subtitle: "One final sleep. The whole week has been building to this moment. Tomorrow, everything changes.",
    button: "Open the Last Chapter Before Tomorrow 💜",
  },
  countdown: {
    heading: "One sleep. ONE. I am not okay. 🌙",
    highlightMemory: {
      src: "/days/day-7/memories/memory-5.jpg",
      caption: "The last night before your world turns 🎂",
      rotate: -3,
      size: "md",
      tape: "#F0CF86",
      flower: true,
    },
  },
  letter: {
    kicker: "the final chapter — 7",
    heading: "Before The Clock Strikes Twelve",
    hint: "Tap the envelope",
    paragraphs: [
      "Aashi. Tomorrow is your birthday. I genuinely cannot explain how much I've been waiting for this day.",
      "This whole week — the letters, the photos, the songs, the little surprises — none of it comes close to how I actually feel. Words always fall a little short.",
      "But I want you to know this: you are someone who changed things. The way you show up, the way you care, the way you make ordinary moments feel like something worth remembering — that's rare. That's you.",
      "So tonight, close your eyes knowing this: tomorrow is entirely yours. And I will be there at midnight. Because some people are worth every second of the wait. 🌙",
    ],
  },
  gallery: {
    kicker: "the final countdown archive",
    heading: "Before Tomorrow — One Last Look 🌙",
    subheading: "Five frames from a story I never want to end",
    items: [
      { src: "/days/day-7/memories/memory-1.jpg", caption: "The beginning of everything", rotate: 3, size: "lg", tape: "#F0CF86" },
      { src: "/days/day-7/memories/memory-2.jpg", caption: "A moment I keep coming back to", rotate: -2, size: "sm", tape: "#E9A6C4", flower: true },
      { src: "/days/day-7/memories/memory-3.jpg", caption: "Worth every word I ever wrote", rotate: 2, size: "md", tape: "#C9A4E8" },
      { src: "/days/day-7/memories/memory-4.jpg", caption: "See you on the other side 🌙", rotate: -3, size: "md", tape: "#F0CF86" },
    ],
  },
  cards: {
    kicker: "last night confessions",
    heading: "Things I Never Said Out Loud 🌙",
    items: [
      { id: "truth", title: "The Honest Truth", icon: "heart", message: "Every time I worried this was too much or too extra — I decided it wasn't, because you deserve every bit of it." },
      { id: "miss", title: "What I'll Always Miss", icon: "sparkles", message: "Those random conversations that started at 11pm and somehow lasted until 2am without us noticing." },
      { id: "proud", title: "How Proud I Am of You", icon: "sun", message: "The version of you that exists today — wiser, braver, more yourself — I'm genuinely in awe of her." },
      { id: "laugh", title: "The Laugh I Can't Forget", icon: "party", message: "There's one specific laugh you have when something really catches you off guard. It's the best sound." },
      { id: "wish", title: "My Wish For Your Year", icon: "friends", message: "I hope this year brings you everything you've been quietly hoping for but haven't said out loud yet." },
      { id: "ready", title: "Tomorrow Is Ready For You", icon: "smile", message: "And so am I. Happy almost-birthday, Aashi. The main event starts at midnight. 🌙" },
    ],
  },
  secret: {
    heading: "One Last Secret Before Midnight 🌙",
    button: "Open the Final Secret",
    revealedTitle: "The midnight confession",
    message: "I will 100% be awake at 11:59pm just to be the first. Not because I have to — but because being first to celebrate you feels like a privilege. See you at midnight, Aashi. 🌙",
  },
  gift: {
    heading: "The Final Night Surprise 🎁",
    button: "Open the Last Surprise Before Tomorrow 🎁",
    revealedHeading: "Night Before — The Final Video ✨",
    paragraphs: [
      "One last surprise before the birthday officially begins. Tomorrow, the real celebration opens. Tonight, this is for you. 🌙",
    ],
    video: "/videos/V1.mp4",
  },
  footer: "Day 7 of 8 · The night before everything — made just for you, Aashi 🌙",
};
