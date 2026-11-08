"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Flower2, X } from "lucide-react";
import Section from "./Section";
import Photo from "./Photo";
import { birthday, type GalleryItem } from "@/data/birthday";

const ASPECT: Record<GalleryItem["size"], string> = {
  sm: "aspect-square",
  md: "aspect-[4/5]",
  lg: "aspect-[3/4]",
};

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  const prev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);
  const next = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${item.caption}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="paper relative w-full max-w-md rounded-sm p-3 pb-16 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Photo src={item.src} alt={item.caption} className="max-h-[68svh] w-full" />
        <p className="absolute inset-x-4 bottom-4 text-center font-script text-2xl">{item.caption}</p>
      </motion.div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo"
        className="focus-ring absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#594653]"
      >
        <X className="h-5 w-5" />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            className="focus-ring absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#594653] sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            className="focus-ring absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#594653] sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </motion.div>
  );
}

interface MemoryGalleryProps {
  gallery?: {
    kicker: string;
    heading: string;
    subheading: string;
    items: GalleryItem[];
  };
}

export default function MemoryGallery({ gallery }: MemoryGalleryProps = {}) {
  const g = gallery ?? birthday.gallery;
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <Section id="memories" kicker={g.kicker} title={g.heading}>
      <p className="-mt-6 mb-10 text-center text-sm text-ink/70 sm:text-base">{g.subheading}</p>

      <div className="w-full columns-2 gap-4 sm:gap-7 md:columns-3">
        {g.items.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 50, rotate: item.rotate + 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 5 }}
            className="relative mb-6 break-inside-avoid sm:mb-9"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open photo: ${item.caption}`}
              className="paper focus-ring relative block w-full rounded-sm p-2 pb-11 text-left shadow-soft sm:p-3 sm:pb-14"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-3 sm:w-16"
                style={{ background: `${item.tape}b3` }}
              />
              {item.flower && (
                <Flower2
                  aria-hidden="true"
                  className="absolute -right-2 -top-3 z-10 h-7 w-7 rotate-12 text-primary"
                  strokeWidth={1.5}
                  fill="rgb(247 201 212 / 0.5)"
                />
              )}
              <Photo src={item.src} alt={item.caption} className={`w-full ${ASPECT[item.size]}`} />
              <span className="absolute inset-x-2 bottom-2 text-center font-script text-[1.05rem] leading-tight sm:bottom-3 sm:text-xl">
                {item.caption}
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox items={g.items} index={active} onClose={close} onNavigate={setActive} />
        )}
      </AnimatePresence>
    </Section>
  );
}
