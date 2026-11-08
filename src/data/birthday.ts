/**
 * ============================================================
 *  EDIT EVERYTHING ABOUT THE SURPRISE HERE.
 *  No component needs to be touched to personalise the site.
 * ============================================================
 */

export type DecorKind = "flower" | "star" | "heart" | "sparkle";

export interface ThemeColors {
  primary: string;
  secondary: string;
  bg: string;
  accent: string;
  gold: string;
  text: string;
  /** Surface colour for cards / glass panels */
  card: string;
}

export interface DailyTheme {
  /** Calendar day this look is shown (local time of the visitor) */
  date: string;
  name: string;
  tagline: string;
  /** A small note shown in the countdown section on this day */
  note: string;
  colors: ThemeColors;
  decor: DecorKind[];
}

export type CardIcon = "smile" | "heart" | "party" | "sun" | "friends" | "sparkles";

export interface GalleryItem {
  /** File inside /public/images/memories/ */
  src: string;
  caption: string;
  rotate: number;
  size: "sm" | "md" | "lg";
  tape: string;
  flower?: boolean;
}

export interface ComplimentCard {
  id: string;
  title: string;
  icon: CardIcon;
  message: string;
}

export const birthday = {
  /** Her name or nickname. Used in a few places ("Happy Birthday, {name}"). */
  herName: "Beautiful",

  /** Birthday: 15 November 2026 (month is 1-12). Countdown uses the visitor's local time. */
  birthdayDate: { year: 2026, month: 11, day: 15 },

  /** First day of the daily looks. The 8 themes below run 8 Nov → 15 Nov. */
  firstDay: "2026-11-08",

  welcome: {
    title: "Hey You! ✨",
    subtitle: "Someone made something special just for you...",
    button: "Open Your Surprise 💗",
  },

  countdown: {
    heading: "Something beautiful is coming...",
    dateLabel: "15 November 2026",
    todayText: "TODAY IS YOUR DAY!",
    todaySub: "Every little thing here was made to celebrate you.",
    afterText: "Your birthday was beautiful, and so are you.",
    afterSub: "The celebration never really ends. Scroll on and explore your gift again 💗",
  },

  letter: {
    kicker: "for you",
    heading: "A Little Letter For You",
    hint: "Tap the envelope",
    paragraphs: [
      "Some people make ordinary days a little more special just by being around.",
      "Today is about celebrating one of those people.",
      "I hope this little surprise makes you smile. You deserve happiness, laughter, beautiful memories, and countless reasons to smile.",
      "Happy Birthday! 💗",
    ],
  },

  gallery: {
    kicker: "our little moments",
    heading: "Memory Scrapbook",
    subheading: "Tap a memory to see it bigger",
    /**
     * Drop your photos into /public/images/memories/ and name them
     * memory-1.jpg … memory-8.jpg (or change the `src` values below).
     * Missing photos show an elegant placeholder, so nothing breaks.
     */
    items: [
      { src: "/images/memories/memory-1.png", caption: "The day we couldn't stop laughing", rotate: -4, size: "lg", tape: "#F7C9D4", flower: true },
      { src: "/images/memories/memory-2.png", caption: "Pure happiness", rotate: 3, size: "sm", tape: "#D9B8E8" },
      { src: "/images/memories/memory-3.png", caption: "My favourite human", rotate: -2, size: "md", tape: "#E8C77B" },
      { src: "/images/memories/memory-4.png", caption: "That unforgettable day", rotate: 4, size: "md", tape: "#F7C9D4" },
    ] as GalleryItem[],
  },

  cards: {
    kicker: "tap to flip",
    heading: "Little Things That Make You Special",
    items: [
      { id: "smile", title: "Your Smile", icon: "smile", message: "Your smile has a strange superpower: it can fix a bad day without a single word." },
      { id: "kindness", title: "Your Kindness", icon: "heart", message: "You care without keeping score, and everyone around you feels it. The world is softer because of you." },
      { id: "craziness", title: "Your Craziness", icon: "party", message: "Your beautiful chaos is my favourite kind of fun. Never, ever tone it down." },
      { id: "energy", title: "Your Positive Energy", icon: "sun", message: "You walk into a room and it gets brighter. That kind of energy can't be faked, and it's all yours." },
      { id: "friendship", title: "Your Friendship", icon: "friends", message: "Some friendships feel like home. Yours is one of those, and I'm so grateful for it." },
      { id: "unique", title: "Your Uniqueness", icon: "sparkles", message: "There is no one else like you, and the world is better for the one-of-a-kind way you exist." },
    ] as ComplimentCard[],
  },

  secret: {
    heading: "Psst... There's Something Else!",
    button: "Discover Something Special",
    revealedTitle: "A secret, just between us",
    message:
      "You are one of the best things that ever happened to my ordinary days. Thank you for being exactly who you are. Never forget how loved you are. 💗",
  },

  gift: {
    heading: "Wait... One Last Surprise For You!",
    button: "Open Your Gift 🎁",
    /** Keep the final gift locked until 15 November (she can still enjoy everything else) */
    lockUntilBirthday: true,
    lockedButton: "Opens on 15 November 🔒",
    lockedHint: "Not just yet... this gift opens on your birthday. Come back on 15 November ✨",
    finalHeading: "HAPPY BIRTHDAY! 🎂",
    finalParagraphs: [
      "May your life always be filled with happiness, beautiful moments, endless laughter and everything your heart wishes for.",
      "Keep smiling and keep being the wonderful person you are.",
      "You deserve all the beautiful things in this world. 💗",
    ],
    /** Optional personal video, e.g. "/videos/message.mp4". Leave empty ("") to hide. */
    video: "",
    /** Optional voice message, e.g. "/videos/voice.mp3". Leave empty ("") to hide. */
    voice: "",
  },

  music: {
    src: "/music/birthday.mp3",
    label: "Background music",
  },

  footer: "Made with love, just for you 💗",

  /**
   * One look per day, 8 Nov → 15 Nov. The site picks the look matching the
   * visitor's local date. (Before 8 Nov → first look, after 15 Nov → last look.)
   */
  dailyThemes: [
    {
      date: "2026-11-08",
      name: "Blush Morning",
      tagline: "Day 1 · A soft pink beginning",
      note: "A week from today, something wonderful begins. Until then, I'll leave you a little surprise every single day.",
      decor: ["flower", "sparkle"],
      colors: { primary: "#F7C9D4", secondary: "#FCE4EC", bg: "#FFF8F5", accent: "#D9B8E8", gold: "#E8C77B", text: "#594653", card: "#FFFFFF" },
    },
    {
      date: "2026-11-09",
      name: "Lavender Dreams",
      tagline: "Day 2 · Dreamy and calm",
      note: "Every day this week the world looks a little different here, just like how you make ordinary days feel different.",
      decor: ["star", "flower"],
      colors: { primary: "#D9B8E8", secondary: "#F1E6F8", bg: "#FBF7FF", accent: "#F7C9D4", gold: "#E8C77B", text: "#4E4560", card: "#FFFFFF" },
    },
    {
      date: "2026-11-10",
      name: "Golden Hour",
      tagline: "Day 3 · Warm like sunshine",
      note: "Some people carry sunshine with them wherever they go. You're one of them. Consider this golden afternoon yours.",
      decor: ["sparkle", "star"],
      colors: { primary: "#F6D7A7", secondary: "#FFF0D6", bg: "#FFFAF0", accent: "#F7C9D4", gold: "#E0B050", text: "#5E4B3A", card: "#FFFFFF" },
    },
    {
      date: "2026-11-11",
      name: "Rose Garden",
      tagline: "Day 4 · Petals and poetry",
      note: "Roses are lovely, but they've got nothing on the way you make people feel.",
      decor: ["flower", "heart"],
      colors: { primary: "#F2A7B8", secondary: "#FBD9E1", bg: "#FFF5F6", accent: "#D9B8E8", gold: "#E8C77B", text: "#5A3E49", card: "#FFFFFF" },
    },
    {
      date: "2026-11-12",
      name: "Starry Night",
      tagline: "Day 5 · Wishes under the stars",
      note: "Tonight the stars are out just for you. Make a wish. Your week is almost here.",
      decor: ["star", "sparkle"],
      colors: { primary: "#B79CE8", secondary: "#2E2852", bg: "#1F1B3A", accent: "#F7C9D4", gold: "#F2D58A", text: "#F3E9FA", card: "#2B2650" },
    },
    {
      date: "2026-11-13",
      name: "Peach Cloud",
      tagline: "Day 6 · Soft and sweet",
      note: "Two more sleeps... I'm counting too, and I can barely wait.",
      decor: ["heart", "sparkle"],
      colors: { primary: "#FFC9B5", secondary: "#FFE6DC", bg: "#FFF7F2", accent: "#F7C9D4", gold: "#E8C77B", text: "#5B4540", card: "#FFFFFF" },
    },
    {
      date: "2026-11-14",
      name: "Moonlit Eve",
      tagline: "Day 7 · The night before",
      note: "Tomorrow is the day. Sleep well and wake up smiling, because someone has big plans for you.",
      decor: ["star", "heart"],
      colors: { primary: "#E9A6C4", secondary: "#3B2646", bg: "#2A1B33", accent: "#C9A4E8", gold: "#F0CF86", text: "#FBEFF6", card: "#382444" },
    },
    {
      date: "2026-11-15",
      name: "Birthday Glow",
      tagline: "Day 8 · It's your day",
      note: "It's finally here. Today the whole world belongs to you.",
      decor: ["flower", "star", "heart", "sparkle"],
      colors: { primary: "#F7C9D4", secondary: "#FCE4EC", bg: "#FFF8F5", accent: "#D9B8E8", gold: "#E8C77B", text: "#594653", card: "#FFFFFF" },
    },
  ] as DailyTheme[],
};

export type BirthdayData = typeof birthday;
