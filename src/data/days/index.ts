import type { DailySurprise } from "./types";
import { day1 } from "./day-1";
import { day2 } from "./day-2";
import { day3 } from "./day-3";
import { day4 } from "./day-4";
import { day5 } from "./day-5";
import { day6 } from "./day-6";
import { day7 } from "./day-7";
import { day8 } from "./day-8";

export * from "./types";
export { day1, day2, day3, day4, day5, day6, day7, day8 };

export const allDays: DailySurprise[] = [
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
];

/**
 * Returns the DailySurprise configuration for a given 0-based dayIndex (0 = Day 1)
 * or falls back to the closest available day.
 */
export function getDaySurprise(dayIndex: number): DailySurprise {
  if (dayIndex < 0) return allDays[0];
  if (dayIndex >= allDays.length) return allDays[allDays.length - 1];
  return allDays[dayIndex];
}

/**
 * Returns the DailySurprise configuration for a given date string "YYYY-MM-DD".
 */
export function getDaySurpriseByDate(date: string): DailySurprise {
  const match = allDays.find((d) => d.date === date);
  if (match) return match;
  return allDays[0];
}

