import React, { useState } from 'react';

/* ---------- High-resolution logo source helpers ---------- */

/** Renders the source at up to `width` px — Wikipedia serves original vector/PNG masters. */
export const wp = (fileName: string, width = 1200) =>
  `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

export const clearbit = (domain: string, size = 512) =>
  `https://logo.clearbit.com/${domain}?size=${size}`;

export const favicon = (domain: string, size = 512) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

interface SmartLogoProps {
  sources: string[];
  alt: string;
  className?: string;
  imgStyle?: React.CSSProperties;
  fallback: React.ReactNode;
}

/**
 * Walks an ordered list of logo sources (highest fidelity first) and only
 * falls back to the supplied typographic crest if every remote source fails.
 */
export const SmartLogo: React.FC<SmartLogoProps> = ({
  sources,
  alt,
  className,
  imgStyle,
  fallback,
}) => {
  const [idx, setIdx] = useState(0);
  const [exhausted, setExhausted] = useState(false);

  if (exhausted) return <>{fallback}</>;

  return (
    <img
      src={sources[idx]}
      alt={alt}
      className={className}
      style={{ objectFit: 'contain', imageRendering: 'auto', ...imgStyle }}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (idx < sources.length - 1) setIdx(idx + 1);
        else setExhausted(true);
      }}
    />
  );
};

/* ---------- Mysco Sports house mark (sourced from myscosports.co.uk) ---------- */

const MYSCO_SOURCES = [
  'https://myscosports.co.uk/logo.png',
  'https://myscosports.co.uk/wp-content/uploads/logo.png',
  'https://myscosports.co.uk/wp-content/uploads/2022/12/logo.png',
  clearbit('myscosports.co.uk', 1024),
  favicon('myscosports.co.uk', 512),
];

export const MyscoLogoMark: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className ?? ''}`}>
    <SmartLogo
      sources={MYSCO_SOURCES}
      alt="Mysco Sports London — official logo"
      className="h-full w-full object-contain"
      fallback={
        <span className="font-display font-bold tracking-[0.05em] text-gold leading-none">
          MYSCO
        </span>
      }
    />
  </div>
);
