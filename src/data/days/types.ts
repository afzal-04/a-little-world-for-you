import type { DailyTheme, GalleryItem, ComplimentCard } from "../birthday";

export interface DailySurprise {
  /** Day 1 through 8 */
  dayNumber: number;
  /** YYYY-MM-DD */
  date: string;
  theme: DailyTheme;
  music: {
    src: string;
    label: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    button: string;
  };
  countdown: {
    heading: string;
    /** Optional specific memory item to feature on this day's countdown */
    highlightMemory?: GalleryItem;
  };
  letter: {
    kicker: string;
    heading: string;
    hint?: string;
    paragraphs: string[];
  };
  gallery: {
    kicker: string;
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
  cards: {
    kicker: string;
    heading: string;
    items: ComplimentCard[];
  };
  secret: {
    heading: string;
    button: string;
    revealedTitle: string;
    message: string;
  };
  gift: {
    heading: string;
    button: string;
    lockedButton?: string;
    lockedHint?: string;
    revealedHeading: string;
    paragraphs: string[];
    video?: string;
    voice?: string;
  };
  footer: string;
}
