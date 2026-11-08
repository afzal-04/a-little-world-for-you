"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { birthday } from "@/data/birthday";
import { allDays, getDaySurprise } from "@/data/days";
import { useCountdown } from "@/hooks/useCountdown";
import { applyTheme } from "@/lib/theme";
import WelcomeScreen from "@/components/WelcomeScreen";
import Countdown from "@/components/Countdown";
import BirthdayLetter from "@/components/BirthdayLetter";
import MemoryGallery from "@/components/MemoryGallery";
import SurpriseCards from "@/components/SurpriseCards";
import SecretMessage from "@/components/SecretMessage";
import GiftBox from "@/components/GiftBox";
import MusicPlayer, { type MusicHandle } from "@/components/MusicPlayer";
import FloatingElements from "@/components/FloatingElements";
import SectionNavigation, { type NavSection } from "@/components/SectionNavigation";

const SECTIONS: NavSection[] = [
  { id: "countdown", label: "Countdown" },
  { id: "letter", label: "Letter" },
  { id: "memories", label: "Memories" },
  { id: "special", label: "What makes you special" },
  { id: "secret", label: "Secret" },
  { id: "gift", label: "Final gift" },
];

export default function Home() {
  const { birthdayDate, firstDay } = birthday;
  const target = useMemo(
    () => new Date(birthdayDate.year, birthdayDate.month - 1, birthdayDate.day, 0, 0, 0),
    [birthdayDate.year, birthdayDate.month, birthdayDate.day]
  );

  const clock = useCountdown(target, firstDay, allDays.length);
  const dayIndex = clock?.dayIndex ?? 0;
  const todaySurprise = getDaySurprise(dayIndex);
  const theme = todaySurprise.theme;

  const [opened, setOpened] = useState(false);
  const music = useRef<MusicHandle>(null);

  // Apply today's colour palette
  useEffect(() => {
    applyTheme(theme.colors);
  }, [theme]);

  // Lock scrolling behind the welcome screen
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  const handleOpen = () => {
    music.current?.play(); // allowed: this runs inside the visitor's click
    setOpened(true);
    window.scrollTo({ top: 0 });
  };

  const memory = todaySurprise.countdown.highlightMemory ?? (
    todaySurprise.gallery.items.length
      ? todaySurprise.gallery.items[0]
      : undefined
  );

  return (
    <MotionConfig reducedMotion="user">
      <FloatingElements kinds={theme.decor} count={16} />
      <MusicPlayer
        ref={music}
        src={todaySurprise.music.src}
        label={todaySurprise.music.label}
      />

      <AnimatePresence>
        {!opened && (
          <WelcomeScreen
            key="welcome"
            title={todaySurprise.welcome.title}
            subtitle={todaySurprise.welcome.subtitle}
            button={todaySurprise.welcome.button}
            kinds={theme.decor}
            onOpen={handleOpen}
          />
        )}
      </AnimatePresence>

      {opened && <SectionNavigation sections={SECTIONS} />}

      <motion.main
        initial={{ opacity: 0, scale: 0.97 }}
        animate={opened ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <Countdown
          clock={clock}
          theme={theme}
          totalDays={allDays.length}
          memory={memory}
          heading={todaySurprise.countdown.heading}
        />
        <BirthdayLetter letter={todaySurprise.letter} />
        <MemoryGallery gallery={todaySurprise.gallery} />
        <SurpriseCards cards={todaySurprise.cards} />
        <SecretMessage secret={todaySurprise.secret} />
        <GiftBox phase={clock?.phase} gift={todaySurprise.gift} />

        <footer className="relative z-10 px-5 pb-16 pt-6 text-center font-script text-2xl text-ink/70">
          {todaySurprise.footer}
        </footer>
      </motion.main>
    </MotionConfig>
  );
}
