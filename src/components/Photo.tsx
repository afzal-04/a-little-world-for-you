"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
}

const COMMON_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".JPG", ".PNG"];

/**
 * Photo with a graceful fallback: if the image file has a different extension,
 * it tries common image formats (.png, .jpg, .jpeg, .webp) before falling back to
 * an elegant placeholder if the file is truly missing.
 */
export default function Photo({ src, alt, className = "" }: PhotoProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [tried, setTried] = useState<string[]>([src]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setTried([src]);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    // 1. Try alternate image extension (.png, .jpg, .jpeg, .webp)
    const extMatch = currentSrc.match(/\.(jpg|jpeg|png|webp)$/i);
    if (extMatch) {
      const base = currentSrc.slice(0, -extMatch[0].length);
      const nextExt = COMMON_EXTENSIONS.find((ext) => !tried.includes(`${base}${ext}`));
      if (nextExt) {
        const nextSrc = `${base}${nextExt}`;
        setTried((prev) => [...prev, nextSrc]);
        setCurrentSrc(nextSrc);
        return;
      }
    }

    // 2. If it was a per-day path like /days/day-2/memories/memory-1.png, try shared /images/memories/
    const dayMatch = currentSrc.match(/^\/days\/day-\d+\/memories\/(.+)$/);
    if (dayMatch) {
      const sharedSrc = `/images/memories/${dayMatch[1]}`;
      if (!tried.includes(sharedSrc)) {
        setTried((prev) => [...prev, sharedSrc]);
        setCurrentSrc(sharedSrc);
        return;
      }
    }

    setFailed(true);
  };

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-secondary via-primary/50 to-accent/60 ${className}`}
      >
        <Camera className="h-8 w-8 text-white/80" strokeWidth={1.5} aria-hidden="true" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={handleError}
      className={`object-cover ${className}`}
    />
  );
}
