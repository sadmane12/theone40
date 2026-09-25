import React, { useState } from 'react';
import { RealClubEntry } from '../data/realClubsData';

interface RobustLogoImgProps {
  sources: string[];
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export const RobustLogoImg: React.FC<RobustLogoImgProps> = ({
  sources,
  alt,
  className = 'h-full w-full object-contain',
  fallback,
}) => {
  const [index, setIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(index + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return <>{fallback ?? <div className="text-xs font-mono text-gold">{alt}</div>}</>;
  }

  return (
    <img
      src={sources[index]}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
    />
  );
};

/**
 * Uniform club card — every crest sits in an identical 112px-tall dark plate,
 * every card has the same footprint regardless of club stature.
 */
export const RealClubCard: React.FC<{ club: RealClubEntry }> = ({ club }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-white/[0.08] bg-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_50px_-22px_rgba(201,168,76,0.22)]">
      {/* Dark crest plate — identical height & padding for all clubs */}
      <div className="logo-dark-plate relative flex h-[132px] w-full shrink-0 items-center justify-center overflow-hidden border-b border-white/[0.10] bg-gradient-to-br from-stone via-charcoal to-ink">
        {/* subtle radial halo behind the crest */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(220px_120px_at_50%_55%,rgba(201,168,76,0.16),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_8px)]" />

        {/* fixed-size crest box: every logo constrained to the same 88×88 area */}
        <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
          <RobustLogoImg
            sources={club.sources}
            alt={`${club.name} Official Logo`}
            className="max-h-[88px] max-w-[88px] object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] [mix-blend-mode:normal]"
            fallback={
              <div className="flex h-full w-full items-center justify-center border border-gold/30">
                <span className="font-display text-sm font-bold tracking-wider text-gold">
                  {club.shortName}
                </span>
              </div>
            }
          />
        </div>

        <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-display text-base leading-tight text-cream transition-colors group-hover:text-gold-bright">
              {club.name}
            </h4>
            <span className="shrink-0 border border-gold/30 bg-gold/[0.08] px-2 py-[2.5px] font-mono text-[9px] font-semibold tracking-[0.16em] text-gold">
              {club.country}
            </span>
          </div>
          <p className="mt-2 font-body text-[10px] uppercase tracking-[0.2em] text-fog/60">
            {club.league}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/[0.06] pt-3">
          <p className="font-editorial text-[13px] italic leading-snug text-fog/75">{club.note}</p>
          <span className="font-mono text-[11px] text-gold/40 transition-colors duration-500 group-hover:text-gold">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
};
