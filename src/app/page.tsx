"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { birthday } from "@/data/birthday";
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
  const { birthdayDate, firstDay, dailyThemes, welcome, gallery, footer } = birthday;
  const target = useMemo(
    () => new Date(birthdayDate.year, birthdayDate.month - 1, birthdayDate.day, 0, 0, 0),
    [birthdayDate.year, birthdayDate.month, birthdayDate.day]
  );

  const clock = useCountdown(target, firstDay, dailyThemes.length);
  const theme = dailyThemes[clock?.dayIndex ?? 0];
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

  const memory = gallery.items.length
    ? gallery.items[(clock?.dayIndex ?? 0) % gallery.items.length]
    : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <FloatingElements kinds={theme.decor} count={16} />
      <MusicPlayer ref={music} />

      <AnimatePresence>
        {!opened && (
          <WelcomeScreen
            key="welcome"
            title={welcome.title}
            subtitle={welcome.subtitle}
            button={welcome.button}
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
        <Countdown clock={clock} theme={theme} totalDays={dailyThemes.length} memory={memory} />
        <BirthdayLetter />
        <MemoryGallery />
        <SurpriseCards />
        <SecretMessage />
        <GiftBox phase={clock?.phase} />

        <footer className="relative z-10 px-5 pb-16 pt-6 text-center font-script text-2xl text-ink/70">
          {footer}
        </footer>
      </motion.main>
    </MotionConfig>
  );
}
