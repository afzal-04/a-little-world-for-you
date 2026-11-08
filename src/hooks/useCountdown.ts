"use client";

import { useEffect, useState } from "react";

export type Phase = "before" | "today" | "after";

export interface Clock {
  phase: Phase;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** Calendar days left (midnight to midnight), e.g. 7 on 8 Nov */
  daysToGo: number;
  /** 0-based index of today's look (clamped to the number of themes) */
  dayIndex: number;
}

const DAY = 86_400_000;

function startOfDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function parseLocalDate(value: string): Date {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

/** `?day=2026-11-12` lets you preview any day's look before the real date. */
function readPreviewOffset(): number {
  try {
    const raw = new URLSearchParams(window.location.search).get("day");
    if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw)) return 0;
    const wanted = parseLocalDate(raw);
    const now = new Date();
    wanted.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), 0);
    return wanted.getTime() - now.getTime();
  } catch {
    return 0;
  }
}

/**
 * Live countdown. Returns null until mounted on the client, so server and
 * client markup always match (no hydration mismatch).
 */
export function useCountdown(
  target: Date,
  firstDay: string,
  totalDays: number
): Clock | null {
  const [clock, setClock] = useState<Clock | null>(null);
  const targetMs = target.getTime();

  useEffect(() => {
    const offset = readPreviewOffset();
    const first = startOfDay(parseLocalDate(firstDay));

    const tick = () => {
      const now = new Date(Date.now() + offset);
      const diff = targetMs - now.getTime();
      const dayIndex = Math.min(
        Math.max(Math.round((startOfDay(now) - first) / DAY), 0),
        totalDays - 1
      );

      if (diff > 0) {
        setClock({
          phase: "before",
          days: Math.floor(diff / DAY),
          hours: Math.floor((diff % DAY) / 3_600_000),
          minutes: Math.floor((diff % 3_600_000) / 60_000),
          seconds: Math.floor((diff % 60_000) / 1000),
          daysToGo: Math.round((targetMs - startOfDay(now)) / DAY),
          dayIndex,
        });
      } else {
        setClock({
          phase: now.getTime() < targetMs + DAY ? "today" : "after",
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          daysToGo: 0,
          dayIndex,
        });
      }
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs, firstDay, totalDays]);

  return clock;
}
