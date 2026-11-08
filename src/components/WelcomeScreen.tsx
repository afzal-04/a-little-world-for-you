"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FloatingElements from "./FloatingElements";
import type { DecorKind } from "@/data/birthday";

interface WelcomeScreenProps {
  title: string;
  subtitle: string;
  button: string;
  kinds: DecorKind[];
  onOpen: () => void;
}

export default function WelcomeScreen({ title, subtitle, button, kinds, onOpen }: WelcomeScreenProps) {
  const clicked = useRef(false);

  const handleOpen = () => {
    if (clicked.current) return; // prevent accidental repeated transitions
    clicked.current = true;
    onOpen();
  };

  return (
    <motion.div
      role="dialog"
      aria-label="Welcome"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{
        backgroundColor: "rgb(var(--c-bg))",
        backgroundImage:
          "radial-gradient(70rem 45rem at 15% 0%, rgb(var(--c-primary) / 0.75), transparent 60%), radial-gradient(60rem 40rem at 90% 40%, rgb(var(--c-accent) / 0.55), transparent 60%), radial-gradient(60rem 40rem at 40% 110%, rgb(var(--c-secondary)), transparent 60%)",
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.12, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <FloatingElements kinds={kinds} count={22} scope="section" />

      {/* soft glow orb */}
      <motion.div
        aria-hidden="true"
        className="absolute h-[22rem] w-[22rem] rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]"
        style={{ background: "radial-gradient(circle, rgb(var(--c-gold) / 0.35), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-full glass shadow-glow"
          aria-hidden="true"
        >
          <Sparkles className="h-7 w-7 text-gold" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-script text-[clamp(3.2rem,16vw,6.5rem)] leading-none text-ink"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-5 max-w-md font-display text-[clamp(1.05rem,4.5vw,1.5rem)] italic text-ink/80"
        >
          {subtitle}
        </motion.p>

        <motion.button
          type="button"
          onClick={handleOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary focus-ring mt-10"
        >
          {button}
        </motion.button>
      </div>
    </motion.div>
  );
}
