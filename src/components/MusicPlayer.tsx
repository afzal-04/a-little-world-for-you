"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play, Volume2 } from "lucide-react";
import { birthday } from "@/data/birthday";

export interface MusicHandle {
  play: () => void;
}

const MusicPlayer = forwardRef<MusicHandle>(function MusicPlayer(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const { src, label } = birthday.music;

  // If the music file isn't there, quietly hide the player
  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        if (!cancelled && (!res.ok || type.includes("text/html"))) setAvailable(false);
      })
      .catch(() => { /* offline or blocked: keep the player, play() will handle errors */ });
    return () => { cancelled = true; };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const start = () => {
    const el = audioRef.current;
    if (!el) return;
    el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  useImperativeHandle(ref, () => ({ play: start }));

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) start();
    else { el.pause(); setPlaying(false); }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={available ? src : undefined}
        loop
        preload="none"
        onError={() => { setAvailable(false); setPlaying(false); }}
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
            {playing ? <Pause className="h-5 w-5" fill="currentColor" /> : <Play className="h-5 w-5 translate-x-px" fill="currentColor" />}
          </button>

          <motion.span
            aria-hidden="true"
            animate={playing ? { rotate: [0, 12, -12, 0], scale: [1, 1.15, 1] } : { rotate: 0, scale: 1 }}
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
