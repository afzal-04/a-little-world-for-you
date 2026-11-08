"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import Section from "./Section";
import { birthday } from "@/data/birthday";
import { personalise } from "@/lib/theme";

interface BirthdayLetterProps {
  letter?: {
    kicker: string;
    heading: string;
    hint?: string;
    paragraphs: string[];
  };
}

export default function BirthdayLetter({ letter }: BirthdayLetterProps = {}) {
  const l = letter ?? birthday.letter;
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<0 | 1 | 2>(0); // 0 closed · 1 opening · 2 letter shown
  const timer = useRef<number | null>(null);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  useEffect(() => {
    setStage(0);
  }, [l.heading]);

  const open = () => {
    if (stage !== 0) return;
    setStage(1);
    timer.current = window.setTimeout(() => setStage(2), reduce ? 100 : 1200);
  };

  const opened = stage >= 1;
  const words = l.paragraphs.map((p) => personalise(p, birthday.herName).split(" "));
  const totalWords = words.reduce((n, w) => n + w.length, 0);
  const perWord = reduce ? 0 : Math.min(0.07, 6 / totalWords);
  let counter = 0;

  return (
    <Section id="letter" kicker={l.kicker} title={l.heading}>
      <div className="flex w-full flex-col items-center gap-8">
        <div className="[perspective:1000px]">
          <motion.button
            type="button"
            onClick={open}
            disabled={opened}
            aria-label={opened ? "Letter opened" : "Open the envelope"}
            animate={stage === 2 ? { scale: 0.82, opacity: 0.55 } : { scale: 1, opacity: 1 }}
            whileHover={stage === 0 ? { scale: 1.03, rotate: -1 } : undefined}
            whileTap={stage === 0 ? { scale: 0.97 } : undefined}
            transition={{ duration: 0.6 }}
            className="focus-ring relative block aspect-[3/2] w-[min(84vw,22rem)] rounded-xl disabled:cursor-default"
            style={{ filter: "drop-shadow(0 18px 30px rgb(var(--c-primary) / 0.55))" }}
          >
            {/* back of envelope */}
            <span className="absolute inset-0 rounded-xl bg-[#f6d9df]" />

            {/* the letter sliding out */}
            <motion.span
              aria-hidden="true"
              className="paper absolute inset-x-4 top-3 bottom-3 rounded-md shadow-md"
              animate={{ y: opened ? "-52%" : "0%" }}
              transition={{ duration: 0.9, delay: opened ? 0.45 : 0, ease: "easeOut" }}
            >
              <span className="mx-auto mt-5 block h-1 w-2/3 rounded bg-primary/50" />
              <span className="mx-auto mt-3 block h-1 w-1/2 rounded bg-primary/40" />
            </motion.span>

            {/* front pocket */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#fdeef1] to-[#f7cfd8]"
              style={{ clipPath: "polygon(0 100%, 0 0, 50% 56%, 100% 0, 100% 100%)" }}
            />

            {/* flap */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-0 h-[56%] w-full bg-gradient-to-b from-[#fbe3e8] to-[#f3c4cf]"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformOrigin: "top" }}
              animate={{ rotateX: opened ? 180 : 0, zIndex: opened ? 1 : 30 }}
              transition={{
                rotateX: { duration: 0.8, ease: "easeInOut" },
                zIndex: { delay: opened ? 0.35 : 0, duration: 0 },
              }}
            />

            {/* golden seal */}
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-[56%] z-40 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-glow"
              style={{ background: "radial-gradient(circle at 30% 30%, #f6e2a4, #d9b25a)" }}
              animate={{ opacity: opened ? 0 : 1, scale: opened ? 0.4 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="h-5 w-5 text-[#8a5a2b]" fill="currentColor" strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </div>

        {stage === 0 && (
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="font-script text-2xl text-ink/70"
          >
            {l.hint}
          </motion.p>
        )}

        <AnimatePresence>
          {stage === 2 && (
            <motion.article
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              aria-label="Your birthday letter"
              className="paper relative w-full max-w-xl rounded-2xl px-6 py-8 shadow-soft sm:px-10 sm:py-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgb(217 184 232 / 0.25) 32px)",
              }}
            >
              <Heart className="absolute -top-3 right-6 h-6 w-6 text-primary" fill="currentColor" aria-hidden="true" />
              <div className="space-y-4 font-script text-[1.4rem] leading-[2rem] sm:text-[1.65rem]">
                {words.map((para, pi) => (
                  <p key={pi}>
                    {para.map((w, wi) => {
                      const delay = counter++ * perWord;
                      return (
                        <motion.span
                          key={`${pi}-${wi}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay, duration: 0.4 }}
                          className="inline-block pr-[0.3em]"
                        >
                          {w}
                        </motion.span>
                      );
                    })}
                  </p>
                ))}
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
