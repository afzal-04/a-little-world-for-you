const COLORS = ["#F7C9D4", "#D9B8E8", "#E8C77B", "#FFFFFF", "#F2A7B8", "#FCE4EC"];

/** canvas-confetti is loaded on demand so it never touches server rendering. */
export async function fireConfetti(kind: "burst" | "celebration"): Promise<void> {
  if (typeof window === "undefined") return;
  const confetti = (await import("canvas-confetti")).default;
  const base = { colors: COLORS, disableForReducedMotion: true, zIndex: 90, ticks: 220 };

  if (kind === "burst") {
    confetti({ ...base, particleCount: 70, spread: 75, origin: { y: 0.65 } });
    return;
  }

  confetti({ ...base, particleCount: 140, spread: 100, startVelocity: 45, origin: { y: 0.6 } });
  window.setTimeout(() => {
    confetti({ ...base, particleCount: 70, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } });
    confetti({ ...base, particleCount: 70, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } });
  }, 450);
  window.setTimeout(() => {
    confetti({ ...base, particleCount: 110, spread: 140, startVelocity: 30, gravity: 0.7, origin: { y: 0.4 } });
  }, 1100);
  window.setTimeout(() => {
    confetti({ ...base, particleCount: 60, angle: 60, spread: 70, origin: { x: 0, y: 0.8 } });
    confetti({ ...base, particleCount: 60, angle: 120, spread: 70, origin: { x: 1, y: 0.8 } });
  }, 2000);
}
