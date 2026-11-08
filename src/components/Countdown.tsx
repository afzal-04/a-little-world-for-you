"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper, Palette } from "lucide-react";
import Section from "./Section";
import Photo from "./Photo";
import { birthday, type DailyTheme, type GalleryItem } from "@/data/birthday";
import type { Clock } from "@/hooks/useCountdown";
import { fireConfetti } from "@/lib/confetti";
import { personalise } from "@/lib/theme";

function Unit({ label, value }: { label: string; value: number | null }) {
  const text = value === null ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="glass relative h-[4.6rem] w-[4.1rem] overflow-hidden rounded-2xl shadow-soft sm:h-28 sm:w-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: "-60%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "60%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center font-display text-[2rem] tabular-nums text-ink sm:text-5xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/70 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

interface CountdownProps {
  clock: Clock | null;
  theme: DailyTheme;
  totalDays: number;
  memory: GalleryItem | undefined;
  heading?: string;
}

export default function Countdown({ clock, theme, totalDays, memory, heading }: CountdownProps) {
  const c = birthday.countdown;
  const celebrated = useRef(false);
  const phase = clock?.phase;

  useEffect(() => {
    if (phase === "today" && !celebrated.current) {
      celebrated.current = true;
      void fireConfetti("burst");
    }
  }, [phase]);

  const dayNumber = (clock?.dayIndex ?? 0) + 1;
  const toGo = clock?.daysToGo ?? 0;

  return (
    <Section id="countdown" kicker={c.dateLabel} title={phase === "today" ? c.todayText : phase === "after" ? c.afterText : (heading ?? c.heading)}>
      <div className="flex w-full flex-col items-center gap-10">
        {phase === "before" || phase === undefined ? (
          <div
            role="timer"
            aria-live="off"
            aria-label="Time left until your birthday"
            className="flex items-start justify-center gap-2.5 sm:gap-6"
          >
            <Unit label="Days" value={clock ? clock.days : null} />
            <Unit label="Hours" value={clock ? clock.hours : null} />
            <Unit label="Minutes" value={clock ? clock.minutes : null} />
            <Unit label="Seconds" value={clock ? clock.seconds : null} />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass max-w-xl rounded-3xl px-6 py-8 text-center shadow-soft"
          >
            <PartyPopper className="mx-auto mb-3 h-10 w-10 text-gold" strokeWidth={1.5} aria-hidden="true" />
            <p className="font-display text-xl text-ink sm:text-2xl">
              {phase === "today" ? c.todaySub : c.afterSub}
            </p>
          </motion.div>
        )}

        <div className="grid w-full max-w-3xl items-center gap-6 sm:grid-cols-[1fr_auto]">
          {/* Today's note */}
          <motion.div
            key={theme.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-6 text-center shadow-soft sm:text-left"
          >
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
              <Palette className="h-3.5 w-3.5" aria-hidden="true" />
              Today&apos;s look · {theme.name}
            </p>
            <p className="font-script text-2xl text-gold">{theme.tagline}</p>
            <p className="mt-2 font-display text-[1.05rem] italic leading-relaxed text-ink sm:text-lg">
              {personalise(theme.note, birthday.herName)}
            </p>
            {clock?.phase === "before" && (
              <p className="mt-3 text-sm font-semibold text-ink/70">
                {toGo === 1 ? "Just 1 more sleep to go" : `${toGo} sleeps to go`} · look {dayNumber} of {totalDays}
              </p>
            )}
          </motion.div>

          {/* Memory of the day */}
          {memory && (
            <motion.figure
              initial={{ opacity: 0, rotate: 8, y: 30 }}
              whileInView={{ opacity: 1, rotate: 3, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9 }}
              className="paper relative mx-auto w-44 rounded-sm p-2.5 pb-9 shadow-soft sm:w-48"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-3"
                style={{ background: `${memory.tape}b3` }}
              />
              <Photo src={memory.src} alt={memory.caption} className="aspect-square w-full" />
              <figcaption className="absolute inset-x-2 bottom-2 text-center font-script text-lg leading-tight">
                memory of the day
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </Section>
  );
}
