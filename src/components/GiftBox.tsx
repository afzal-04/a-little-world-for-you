"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import Section from "./Section";
import FloatingElements from "./FloatingElements";
import { birthday } from "@/data/birthday";
import type { Phase } from "@/hooks/useCountdown";
import { fireConfetti } from "@/lib/confetti";
import { personalise } from "@/lib/theme";

function Bow() {
  return (
    <div aria-hidden="true" className="absolute -top-9 left-1/2 z-20 h-12 w-24 -translate-x-1/2">
      <span className="absolute left-0 top-1 h-9 w-11 -rotate-[20deg] rounded-[60%_40%_60%_40%] border-4 border-[#d9a93f] bg-gradient-to-br from-[#f6e2a4] to-[#e0b850] shadow-md" />
      <span className="absolute right-0 top-1 h-9 w-11 rotate-[20deg] rounded-[40%_60%_40%_60%] border-4 border-[#d9a93f] bg-gradient-to-bl from-[#f6e2a4] to-[#e0b850] shadow-md" />
      <span className="absolute left-1/2 top-4 h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#f9e9b5] to-[#d9a93f] shadow" />
    </div>
  );
}

function splitHeading(text: string): { words: string; emoji: string } {
  const m = text.match(/^(.*?)\s*([\p{Extended_Pictographic}\u200d\ufe0f]+)\s*$/u);
  return m ? { words: m[1], emoji: m[2] } : { words: text, emoji: "" };
}

export default function GiftBox({ phase }: { phase: Phase | undefined }) {
  const g = birthday.gift;
  const heading = splitHeading(g.finalHeading);
  const [opened, setOpened] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [forceUnlock, setForceUnlock] = useState(false);
  const busy = useRef(false);

  // `?unlock=1` lets you preview the final gift early
  useEffect(() => {
    try {
      setForceUnlock(new URLSearchParams(window.location.search).get("unlock") === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const locked = g.lockUntilBirthday && phase !== "today" && phase !== "after" && !forceUnlock;

  const handleClick = () => {
    if (busy.current || opened) return;
    if (locked) {
      setShowHint(true);
      setShaking(true);
      window.setTimeout(() => setShaking(false), 550);
      return;
    }
    busy.current = true;
    setOpened(true);
    window.setTimeout(() => void fireConfetti("celebration"), 600);
  };

  return (
    <Section id="gift" title={opened ? "" : g.heading} className="overflow-hidden">
      {opened && <FloatingElements kinds={["flower", "star", "heart", "sparkle"]} count={30} scope="section" />}

      {!opened ? (
        <div className="relative flex flex-col items-center gap-14">
          {/* glow */}
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-[60%] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgb(var(--c-gold) / 0.5), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <button
            type="button"
            onClick={handleClick}
            aria-label={locked ? "Gift locked until your birthday" : "Open your gift"}
            className={`focus-ring relative mt-8 h-52 w-52 rounded-xl sm:h-60 sm:w-60 ${shaking ? "shake" : ""}`}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* box body */}
              <span
                className="absolute inset-x-0 bottom-0 top-[24%] rounded-b-xl"
                style={{
                  backgroundImage: "linear-gradient(160deg, #f8c0cf 0%, #eea0b6 60%, #e58aa5 100%)",
                  boxShadow: "inset -14px 0 24px rgb(0 0 0 / 0.08), 0 24px 40px -12px rgb(226 120 150 / 0.55)",
                }}
              />
              {/* vertical ribbon */}
              <span className="absolute bottom-0 left-1/2 top-[24%] w-9 -translate-x-1/2 bg-gradient-to-r from-[#e8c56a] via-[#f6e2a4] to-[#d9a93f]" />
              {/* lid */}
              <span
                className="absolute inset-x-[-5%] top-[8%] h-[20%] rounded-lg"
                style={{
                  backgroundImage: "linear-gradient(160deg, #fbd0dc, #f09ab2)",
                  boxShadow: "0 8px 16px -6px rgb(0 0 0 / 0.2)",
                }}
              >
                <span className="absolute inset-y-0 left-1/2 w-9 -translate-x-1/2 bg-gradient-to-r from-[#e8c56a] via-[#f6e2a4] to-[#d9a93f]" />
              </span>
              <div className="absolute inset-x-0 top-[8%]"><Bow /></div>
              {locked && (
                <span className="absolute bottom-[18%] left-1/2 z-30 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white/85 shadow">
                  <Lock className="h-5 w-5 text-[#8a5a2b]" aria-hidden="true" />
                </span>
              )}
            </motion.div>
          </button>

          <div className="flex flex-col items-center gap-4 text-center">
            <motion.button
              type="button"
              onClick={handleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary focus-ring"
              aria-disabled={locked}
            >
              {locked ? g.lockedButton : g.button}
            </motion.button>
            <AnimatePresence>
              {showHint && locked && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="max-w-xs font-script text-2xl text-ink/80"
                >
                  {g.lockedHint}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
          {/* the opening box (lid flies off) */}
          <div aria-hidden="true" className="relative mb-6 h-24 w-28">
            <motion.span
              className="absolute inset-x-0 bottom-0 top-[40%] rounded-b-lg bg-gradient-to-br from-[#f8c0cf] to-[#e58aa5]"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.1, 1], opacity: [1, 1, 0] }}
              transition={{ duration: 2.2, times: [0, 0.3, 1] }}
            />
            <motion.span
              className="absolute inset-x-[-6%] top-[18%] h-7 rounded-md bg-gradient-to-br from-[#fbd0dc] to-[#f09ab2]"
              initial={{ y: 0, rotate: 0, opacity: 1 }}
              animate={{ y: -150, x: 60, rotate: 28, opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/3 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgb(var(--c-gold) / 0.9), transparent 70%)" }}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: [0, 1, 0.4], scale: [0.2, 1.6, 1.2] }}
              transition={{ duration: 1.6 }}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
            className="font-display text-[clamp(2.2rem,10vw,4.5rem)] font-bold leading-tight text-ink"
          >
            <span className="text-shimmer">{heading.words}</span>
            {heading.emoji && <span aria-hidden="true"> {heading.emoji}</span>}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-2 font-script text-3xl text-gold sm:text-4xl"
          >
            {birthday.herName}
          </motion.p>

          <div className="glass mt-8 space-y-4 rounded-3xl px-6 py-8 shadow-glow sm:px-10">
            {g.finalParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.9, duration: 0.9 }}
                className="font-display text-[1.05rem] italic leading-relaxed text-ink sm:text-xl"
              >
                {personalise(p, birthday.herName)}
              </motion.p>
            ))}
          </div>

          {g.video && (
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 1 }}
              className="mt-8 w-full max-w-md rounded-2xl shadow-soft"
              controls
              playsInline
              preload="none"
              src={g.video}
              aria-label="A personal video message"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          )}
          {g.voice && (
            <motion.audio
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 1 }}
              className="mt-6 w-full max-w-sm"
              controls
              preload="none"
              src={g.voice}
              aria-label="A personal voice message"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          )}
        </div>
      )}
    </Section>
  );
}
