"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Flower2, Heart, Sparkles, Star } from "lucide-react";
import type { DecorKind } from "@/data/birthday";

interface Item {
  id: number;
  kind: DecorKind;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
}

const ICONS = { flower: Flower2, star: Star, heart: Heart, sparkle: Sparkles } as const;
const COLORS: Record<DecorKind, string> = {
  flower: "rgb(var(--c-primary))",
  star: "rgb(var(--c-gold))",
  heart: "rgb(var(--c-primary))",
  sparkle: "rgb(var(--c-accent))",
};

interface FloatingElementsProps {
  kinds: DecorKind[];
  count?: number;
  /** "screen": fixed behind everything. "section": fills its positioned parent. */
  scope?: "screen" | "section";
  className?: string;
}

export default function FloatingElements({
  kinds,
  count = 16,
  scope = "screen",
  className = "",
}: FloatingElementsProps) {
  const reduce = useReducedMotion();
  const [items, setItems] = useState<Item[]>([]);
  const kindsKey = kinds.join(",");

  useEffect(() => {
    const list = kindsKey.split(",") as DecorKind[];
    const total = window.innerWidth < 640 ? Math.max(6, Math.round(count * 0.6)) : count;
    setItems(
      Array.from({ length: total }, (_, i) => ({
        id: i,
        kind: list[i % list.length],
        left: Math.random() * 96,
        size: 12 + Math.random() * 20,
        delay: -Math.random() * 18,
        duration: 16 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 60,
        opacity: 0.25 + Math.random() * 0.4,
      }))
    );
  }, [kindsKey, count]);

  const position = scope === "screen" ? "fixed inset-0 z-0" : "absolute inset-0 z-0";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${position} ${className}`}
    >
      {items.map((it) => {
        const Icon = ICONS[it.kind];
        const style = {
          left: `${it.left}%`,
          bottom: "-40px",
          color: COLORS[it.kind],
          opacity: it.opacity,
        } as const;
        const icon = (
          <Icon
            width={it.size}
            height={it.size}
            strokeWidth={1.5}
            fill={it.kind === "flower" ? "none" : "currentColor"}
            fillOpacity={0.35}
          />
        );

        if (reduce) {
          return (
            <span key={it.id} className="absolute" style={{ ...style, bottom: `${10 + (it.id * 13) % 80}%` }}>
              {icon}
            </span>
          );
        }

        return (
          <motion.span
            key={it.id}
            className="absolute will-change-transform"
            style={style}
            animate={{ y: ["0vh", "-115vh"], x: [0, it.drift, 0], rotate: [0, 180] }}
            transition={{
              duration: it.duration,
              delay: it.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon}
          </motion.span>
        );
      })}
    </div>
  );
}
