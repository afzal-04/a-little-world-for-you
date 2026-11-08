"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, kicker, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative z-10 mx-auto flex min-h-[100svh] w-full max-w-5xl scroll-mt-0 flex-col items-center justify-center px-5 py-20 sm:py-28 ${className}`}
    >
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 text-center sm:mb-14"
      >
        {kicker && <p className="font-script text-2xl text-gold sm:text-3xl">{kicker}</p>}
        <h2
          id={`${id}-title`}
          className="font-display text-[clamp(1.75rem,7vw,3rem)] font-medium leading-tight text-ink"
        >
          {title}
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-px w-10 bg-gold/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-10 bg-gold/60" />
        </div>
      </motion.header>
      {children}
    </section>
  );
}
