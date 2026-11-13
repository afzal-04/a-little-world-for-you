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
    title: "Hey, Remember When...? 🌌",
    subtitle: "Day 5 is all about those chaotic, funny, unplanned moments that somehow became our best memories.",
    button: "Take a Trip Down Memory Lane 🎢",
  },
  countdown: {
    heading: "3 sleeps left — but who's counting? (I am.)",
    highlightMemory: {
      src: "/days/day-5/memories/memory-5.jpg",
      caption: "This moment? Unforgettable.",
      rotate: -3,
      size: "md",
      tape: "#F2D58A",
      flower: true,
    },
  },
  letter: {
    kicker: "throwback chapter 5",
    heading: "The 'Remember When' File 😂",
    hint: "Tap the envelope",
    paragraphs: [
      "Okay Aashi, I need to talk about all the chaotic things that somehow became our best memories.",
      "Remember when absolutely nothing went according to plan but we ended up having a better time anyway? That's us every single time.",
      "Or how every 'one last thing' becomes a whole hour-long rabbit hole? I would not trade those moments for anything.",
      "Here's to the unplanned, the unscripted, and the absolutely unhinged — because that's where the real magic is. 🌌",
    ],
  },
  gallery: {
    kicker: "the throwback vault",
    heading: "Okay But Remember This? 📷",
    subheading: "Exhibits A through E of us being completely unserious",
    items: [
      { src: "/days/day-5/memories/memory-1.jpg", caption: "The chaos that started it all", rotate: 3, size: "lg", tape: "#F2D58A" },
      { src: "/days/day-5/memories/memory-2.jpg", caption: "No context needed honestly", rotate: -2, size: "sm", tape: "#B79CE8" },
      { src: "/days/day-5/memories/memory-3.jpg", caption: "We really did that 💀", rotate: 4, size: "md", tape: "#F7C9D4" },
      { src: "/days/day-5/memories/memory-4.jpg", caption: "Court exhibit A: iconic", rotate: -1, size: "md", tape: "#F2D58A" },
    ],
  },
  cards: {
    kicker: "the unhinged hall of fame",
    heading: "Crimes You Regularly Commit 🌟",
    items: [
      { id: "laugh", title: "Laughing at the Wrong Time", icon: "party", message: "You have a talent for bursting out laughing at the most serious moments. And honestly? Same. 10/10 chaotic." },
      { id: "plans", title: "Making Plans Then Panicking", icon: "sparkles", message: "'Yeah sure I'm free!' — Aashi, 10 seconds before remembering three other things she said yes to." },
      { id: "snacks", title: "The Snack Obsession", icon: "smile", message: "No hangout, trip, or conversation is complete until food has been sourced. Non-negotiable. I respect it." },
      { id: "overthink", title: "Expert-Level Overthinking", icon: "heart", message: "She will analyze one message for 45 minutes but then reply in two seconds. Genius behavior." },
      { id: "redirect", title: "Becoming Everyone's Therapist", icon: "friends", message: "You came to vent but suddenly you're giving advice to the person you were venting to. This is you." },
      { id: "mode", title: "Villain Mode (Iconic)", icon: "sun", message: "The rare but legendary 'I'm done caring' energy that lasts approximately 20 minutes before she's back to being the sweetest person." },
    ],
  },
  secret: {
    heading: "Psst... Day 5 Confession 🌌",
    button: "Okay Fine, Reveal It",
    revealedTitle: "The truth comes out",
    message: "I have screenshots saved of conversations that made me cry-laugh and I will never delete them. You're genuinely one of a kind, Aashi. 🌌",
  },
  gift: {
    heading: "Today's Chaos Archive 🎁",
    button: "Open the Throwback Surprise 🎁",
    revealedHeading: "Day 5 Surprise: The Throwback Cut ✨",
    paragraphs: [
      "A little video for the memory vault — because some moments deserve to be replayed on loop. 🌌",
    ],
    video: "/videos/V5.mp4",
  },
  footer: "Day 5 of 8 · Certified chaotic, completely unforgettable 🌌",
};
