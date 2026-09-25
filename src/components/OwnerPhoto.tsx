import { useState } from 'react';

/**
 * About-section owner portrait.
 * Uses the real photograph published on myscosports.co.uk, with automatic
 * fallbacks (http / www variants, then the local consultancy photo) so the
 * frame never appears broken.
 */
const OWNER_SOURCES = [
  'https://myscosports.co.uk/wp-content/uploads/2019/03/1.jpg',
  'http://myscosports.co.uk/wp-content/uploads/2019/03/1.jpg',
  'https://www.myscosports.co.uk/wp-content/uploads/2019/03/1.jpg',
  '/consultancy.jpg',
];

export function OwnerPhoto() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (index < OWNER_SOURCES.length - 1) {
      setIndex((current) => current + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal shadow-2xl shadow-black/40">
      {/* Loading shimmer while the photo is being fetched */}
      {!loaded && !failed && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-graphite via-charcoal to-ink">
          <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_50%_30%,rgba(201,168,76,0.12),transparent_70%)]" />
        </div>
      )}

      {!failed ? (
        <img
          key={OWNER_SOURCES[index]}
          src={OWNER_SOURCES[index]}
          alt="Mesut Edinak — Owner, Mysco Sports London"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`h-[440px] w-full object-cover object-top transition-opacity duration-700 md:h-[540px] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="flex h-[440px] w-full flex-col items-center justify-center gap-3 bg-charcoal md:h-[540px]">
          <span className="font-display text-2xl text-gold">Mysco Sports</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dusk">
            London · Owner Portrait
          </span>
        </div>
      )}

      {/* Soft bottom gradient so the quote card blends in */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void/80 to-transparent" />

      {/* Owner badge */}
      <div className="absolute right-4 top-4 border border-gold/45 bg-void/85 px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-gold-bright">
          Owner · Mysco Sports
        </span>
      </div>
    </div>
  );
}
