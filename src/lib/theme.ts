import type { ThemeColors } from "@/data/birthday";

function hexToRgbTriplet(hex: string): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

/** Writes the day's palette to CSS variables (as "r g b" so Tailwind alpha works). */
export function applyTheme(colors: ThemeColors): void {
  const root = document.documentElement;
  const entries: Array<[string, string]> = [
    ["--c-primary", colors.primary],
    ["--c-secondary", colors.secondary],
    ["--c-bg", colors.bg],
    ["--c-accent", colors.accent],
    ["--c-gold", colors.gold],
    ["--c-text", colors.text],
    ["--c-card", colors.card],
  ];
  for (const [name, hex] of entries) {
    root.style.setProperty(name, hexToRgbTriplet(hex));
  }
}

export function personalise(text: string, name: string): string {
  return text.replaceAll("{name}", name);
}
