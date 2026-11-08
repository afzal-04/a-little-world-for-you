"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { birthday } from "@/data/birthday";

export interface MusicHandle {
  play: () => void;
}

export interface MusicPlayerProps {
  src?: string;
  label?: string;
  fallbackSrc?: string;
}

const MusicPlayer = forwardRef<MusicHandle, MusicPlayerProps>(function MusicPlayer(
  {
    src = birthday.music.src,
    label = birthday.music.label,
    fallbackSrc = "/music/birthday.mp3",
  },
  ref
) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(false);
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5);

  // Check whether the day-specific music file (or fallback) exists
  useEffect(() => {
    let cancelled = false;

    const checkTrack = async () => {
      // If it is an external URL (http/https), allow it directly without CORS-blocked HEAD fetch
      if (src.startsWith("http://") || src.startsWith("https://")) {
        if (!cancelled) {
          setResolvedSrc(src);
          setAvailable(true);
          return;
        }
      }

      // 1. Try day-specific track with audio extension fallbacks (.m4a, .mp3, etc.)
      const candidates = [src];
      const extMatch = src.match(/\.(mp3|m4a|wav|ogg)$/i);
      if (extMatch) {
        const base = src.slice(0, -extMatch[0].length);
        const altExts = [".m4a", ".mp3", ".wav", ".ogg"].filter(
          (ext) => ext.toLowerCase() !== extMatch[0].toLowerCase()
        );
        for (const alt of altExts) candidates.push(`${base}${alt}`);
      }

      for (const candidate of candidates) {
        try {
          const res = await fetch(candidate, { method: "HEAD" });
          const type = res.headers.get("content-type") ?? "";
          if (res.ok && !type.includes("text/html")) {
            if (!cancelled) {
              setResolvedSrc(candidate);
              setAvailable(true);
              return;
            }
          }
        } catch {
          /* continue to next candidate */
        }
      }

      // 2. Try default fallback track if different
      if (fallbackSrc && fallbackSrc !== src) {
        try {
          const res = await fetch(fallbackSrc, { method: "HEAD" });
          const type = res.headers.get("content-type") ?? "";
          if (res.ok && !type.includes("text/html")) {
            if (!cancelled) {
              setResolvedSrc(fallbackSrc);
              setAvailable(true);
              return;
            }
          }
        } catch {
          /* continue */
        }
      }

      if (!cancelled) {
        setAvailable(false);
        setResolvedSrc(null);
      }
    };

    void checkTrack();
    return () => {
      cancelled = true;
    };
  }, [src, fallbackSrc]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const start = () => {
    const el = audioRef.current;
    if (!el || !available) return;
    el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  useImperativeHandle(ref, () => ({ play: start }));

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) start();
    else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={available && resolvedSrc ? resolvedSrc : undefined}
        loop
        preload="none"
        onError={() => {
          setAvailable(false);
          setPlaying(false);
        }}
      />
      {available && (
        <div className="glass fixed bottom-4 left-4 z-[65] flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 shadow-soft">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? `Pause ${label}` : `Play ${label}`}
            className="focus-ring relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[#3d2433]"
          >
            {playing ? (
              <Pause className="h-5 w-5" fill="currentColor" />
            ) : (
              <Play className="h-5 w-5 translate-x-px" fill="currentColor" />
            )}
          </button>

          <motion.span
            aria-hidden="true"
            animate={
              playing
                ? { rotate: [0, 12, -12, 0], scale: [1, 1.15, 1] }
                : { rotate: 0, scale: 1 }
            }
            transition={{ duration: 1.6, repeat: playing ? Infinity : 0 }}
            className="text-gold"
          >
            <Music className="h-5 w-5" />
          </motion.span>

          <label className="hidden items-center gap-1.5 sm:flex">
            <Volume2 className="h-4 w-4 text-ink/70" aria-hidden="true" />
            <span className="sr-only">Volume</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-20 cursor-pointer accent-[rgb(232_199_123)]"
            />
          </label>
        </div>
      )}
    </>
  );
});

export default MusicPlayer;
