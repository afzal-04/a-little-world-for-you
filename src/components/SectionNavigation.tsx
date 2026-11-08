"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export interface NavSection {
  id: string;
  label: string;
}

export default function SectionNavigation({ sections }: { sections: NavSection[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  return (
    <>
      {/* scroll progress */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[66] h-1 origin-left bg-gradient-to-r from-primary via-gold to-accent"
        style={{ scaleX }}
      />

      {/* dots */}
      <nav
        aria-label="Sections"
        className="glass fixed right-4 top-1/2 z-[65] hidden -translate-y-1/2 flex-col items-center rounded-full px-0.5 py-1.5 sm:flex"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => go(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={active === s.id ? "true" : undefined}
            className="focus-ring group flex h-6 w-6 items-center justify-center rounded-full sm:h-7 sm:w-7"
          >
            <span
              className={`block rounded-full transition-all ${
                active === s.id ? "h-3 w-3 bg-gold" : "h-2 w-2 bg-ink/30 group-hover:bg-primary"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="focus-ring glass fixed bottom-4 right-4 z-[65] flex h-12 w-12 items-center justify-center rounded-full shadow-soft"
          >
            <ArrowUp className="h-5 w-5 text-ink" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
