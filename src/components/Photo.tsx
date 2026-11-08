"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Photo with a graceful fallback: if the image file is missing (or not added yet)
 * an elegant placeholder is shown instead of a broken-image icon.
 */
export default function Photo({ src, alt, className = "" }: PhotoProps) {
  const [failed, setFailed] = useState(false);

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
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
