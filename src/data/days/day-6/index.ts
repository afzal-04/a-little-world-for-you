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
    title: "Some Days Just Feel Like a Poem 🍑",
    subtitle: "Day 6 is soft, hazy, and a little cinematic — like the closing scene of a beautiful film.",
    button: "Read Today's Chapter 🌸",
  },
  countdown: {
    heading: "Two sleeps — and time moves like honey.",
    highlightMemory: {
      src: "/days/day-6/memories/memory-5.jpg",
      caption: "A still frame worth keeping forever",
      rotate: 2,
      size: "md",
      tape: "#FFC9B5",
      flower: true,
    },
  },
  letter: {
    kicker: "poetry chapter 6",
    heading: "Dear Aashi, I Wrote You a Feeling",
    hint: "Tap the envelope",
    paragraphs: [
      "Have you ever had a moment so soft and quiet that you wished time would just pause there for a while?",
      "That's what today feels like to me — sitting still in the warm golden light before the big celebration arrives.",
      "You are, in every way, one of those rare things that makes ordinary days extraordinary just by existing in them.",
      "Tomorrow's countdown gets louder. But today, let's just be still, breathe, and feel how beautiful this all is. 🍑",
    ],
  },
  gallery: {
    kicker: "the aesthetic archive",
    heading: "Soft Frames & Golden Light 🌸",
    subheading: "Some photos are memories. These are feelings.",
    items: [
      { src: "/days/day-6/memories/memory-1.jpg", caption: "The kind of day poems are made of", rotate: -3, size: "lg", tape: "#FFC9B5" },
      { src: "/days/day-6/memories/memory-2.jpg", caption: "Caught mid-magic", rotate: 3, size: "sm", tape: "#F7C9D4", flower: true },
      { src: "/days/day-6/memories/memory-3.jpg", caption: "If golden hour had a face", rotate: -1, size: "md", tape: "#E8C77B" },
      { src: "/days/day-6/memories/memory-4.jpg", caption: "A film still from our world", rotate: 2, size: "md", tape: "#FFC9B5" },
    ],
  },
  cards: {
    kicker: "the aesthetic side of you",
    heading: "Things About You That Belong in Poetry 🍑",
    items: [
      { id: "silence", title: "The Way You Listen", icon: "heart", message: "You don't just hear words — you catch the feeling underneath them. That's a rare and beautiful gift." },
      { id: "eyes", title: "Your Eyes When You're Thinking", icon: "sparkles", message: "There's this look you get when something has your full attention. Like the whole world slows down." },
      { id: "aesthetics", title: "Your Taste in Everything", icon: "smile", message: "Whether it's music, films, or just what to order — you somehow always pick the right thing." },
      { id: "nostalgia", title: "How You Hold Memories", icon: "friends", message: "You remember little details that most people forget. It makes people feel seen and special around you." },
      { id: "calm", title: "Your Calm in Chaos", icon: "sun", message: "Even when everything's loud and messy, there's something grounding about you being in the room." },
      { id: "soul", title: "Your Whole Soul", icon: "party", message: "It's hard to put into words. You just have this quality — a presence — that leaves a mark on people." },
    ],
  },
  secret: {
    heading: "A Quiet Day 6 Secret 🍑",
    button: "Unfold Today's Secret",
    revealedTitle: "The honest truth",
    message: "There are some people who make the world feel more beautiful just by being in it. Aashi, you are that person for more people than you know. 🍑",
  },
  gift: {
    heading: "Today's Soft Surprise 🎁",
    button: "Open the Poetic Surprise 🎁",
    revealedHeading: "Day 6 Surprise: A Quiet Beautiful Moment ✨",
    paragraphs: [
      "No grand gestures today — just something warm and genuine, made for you. 🍑",
    ],
    video: "/videos/V6.mp4",
  },
  footer: "Day 6 of 8 · Soft, slow, and completely yours 🍑",
};
