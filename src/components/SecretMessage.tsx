"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Section from "./Section";
import { birthday } from "@/data/birthday";
import { fireConfetti } from "@/lib/confetti";
import { personalise } from "@/lib/theme";

interface Floater {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  sparkle: boolean;
}

export default function SecretMessage() {
  const s = birthday.secret;
  const [revealed, setRevealed] = useState(false);
  const [floaters, setFloaters] = useState<Floater[]>([]);

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    setFloaters(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        size: 14 + Math.random() * 20,
        delay: Math.random() * 1.6,
        duration: 3.5 + Math.random() * 3,
        sparkle: i % 3 === 0,
      }))
    );
    void fireConfetti("burst");
  };

  return (
    <Section id="secret" title={s.heading} className="overflow-hidden">
      <div className="relative flex w-full max-w-xl flex-col items-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="locked"
              exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-14 w-14 text-gold" strokeWidth={1.25} />
              </motion.div>
              <motion.button
                type="button"
                onClick={reveal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary focus-ring"
              >
                {s.button}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glass relative rounded-3xl px-6 py-10 text-center shadow-glow sm:px-10"
              role="status"
            >
              <Heart className="mx-auto mb-4 h-8 w-8 text-primary" fill="currentColor" aria-hidden="true" />
              <p className="font-script text-3xl text-gold">{s.revealedTitle}</p>
              <p className="mt-4 font-display text-[1.1rem] italic leading-relaxed text-ink sm:text-xl">
                {personalise(s.message, birthday.herName)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* floating hearts & sparkles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-0">
          {floaters.map((f) => (
            <motion.span
              key={f.id}
              className="absolute"
              style={{ left: `${f.left}%`, bottom: 0 }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -420, opacity: [0, 1, 1, 0], x: [0, (f.id % 2 ? 1 : -1) * 20, 0] }}
              transition={{ duration: f.duration, delay: f.delay, ease: "easeOut" }}
            >
              {f.sparkle ? (
                <Sparkles width={f.size} height={f.size} className="text-gold" />
              ) : (
                <Heart width={f.size} height={f.size} className="text-primary" fill="currentColor" />
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
