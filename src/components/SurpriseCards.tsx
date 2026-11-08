"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, HeartHandshake, PartyPopper, Smile, Sparkles, Sun, type LucideIcon } from "lucide-react";
import Section from "./Section";
import { birthday, type CardIcon, type ComplimentCard } from "@/data/birthday";
import { personalise } from "@/lib/theme";

const ICONS: Record<CardIcon, LucideIcon> = {
  smile: Smile,
  heart: Heart,
  party: PartyPopper,
  sun: Sun,
  friends: HeartHandshake,
  sparkles: Sparkles,
};

function FlipCard({ card, index }: { card: ComplimentCard; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICONS[card.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="[perspective:1100px]"
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${card.title}. ${flipped ? "Showing message, tap to flip back" : "Tap to reveal a message"}`}
        className="focus-ring block h-60 w-full rounded-3xl sm:h-64"
      >
        <motion.span
          className="relative block h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          {/* front */}
          <span className="glass backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl p-4 shadow-soft">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-glow">
              <Icon className="h-8 w-8 text-[#3d2433]" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">{card.title}</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-ink/60">tap to flip</span>
          </span>

          {/* back */}
          <span
            className="backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl p-5 text-center shadow-soft"
            style={{
              transform: "rotateY(180deg)",
              backgroundImage: "linear-gradient(145deg, rgb(var(--c-primary) / 0.9), rgb(var(--c-accent) / 0.9))",
              color: "#3d2433",
            }}
          >
            <Heart className="h-5 w-5" fill="currentColor" aria-hidden="true" />
            <span className="font-script text-[1.3rem] leading-snug sm:text-2xl">
              {personalise(card.message, birthday.herName)}
            </span>
          </span>
        </motion.span>
      </button>
    </motion.div>
  );
}

interface SurpriseCardsProps {
  cards?: {
    kicker: string;
    heading: string;
    items: ComplimentCard[];
  };
}

export default function SurpriseCards({ cards }: SurpriseCardsProps = {}) {
  const c = cards ?? birthday.cards;
  return (
    <Section id="special" kicker={c.kicker} title={c.heading}>
      <div className="grid w-full grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {c.items.map((card, i) => (
          <FlipCard key={card.id} card={card} index={i} />
        ))}
      </div>
    </Section>
  );
}
